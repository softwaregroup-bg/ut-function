const xml2js = require('xml2js');
const fs = require('fs');
const DOMParser = require('xmldom').DOMParser;

function getPath(ob, p, attributes) {
    if (ob.parentNode) {
        p.push(ob.localName);
        getPath(ob.parentNode, p, attributes);
        const possibleNamesStr = ob.getAttribute('possibleNames');
        if (possibleNamesStr !== '') {
            attributes.possNames[ob.localName] = possibleNamesStr.split(',');
        }
        const explArrAttr = ob.getAttribute('explicitArray');
        if (explArrAttr !== '' && explArrAttr === 'true') {
            attributes.explicitArray = true;
        }
    }
}

function removeNilValues(ob) {
    if (typeof (ob) === 'object') {
        const obKeys = Object.keys(ob);
        for (const k in obKeys) {
            if (typeof (obKeys[k]) === 'string' && ob[obKeys[k]]['i:nil'] && ob[obKeys[k]]['i:nil'] === 'true') {
                return '';
            }
        }
    }
    return ob;
}

function getMaping(ob, fieldMapings) {
    if (ob.childNodes) {
        const keys = Object.keys(ob.childNodes);
        keys.forEach(function(pName, i) {
            if (pName !== 'length') {
                let ob1 = ob.childNodes[pName];
                if (ob1.nodeName === 'include') {
                    const tmplPath = ob1.getAttribute('templatePath');
                    if (tmplPath) {
                        const templString = fs.readFileSync(require.resolve(tmplPath)).toString();
                        const templDoc = new DOMParser().parseFromString(templString);
                        ob.replaceChild(templDoc.firstChild, ob1);
                        ob1 = ob.childNodes[i];
                    }
                }
                getMaping(ob1, fieldMapings);
            }
        });
    } else {
        const nodeValue = ob.nodeValue;
        const pat = /^\$\{(.*)}$/;
        const res = nodeValue.match(pat);
        if (res && res[1]) {
            const path = [];
            const attributes = { possNames: {}, explicitArray: false };
            getPath(ob.parentNode, path, attributes);
            path.reverse();
            fieldMapings.push({ path: path, fldName: res[1], possblNames: attributes.possNames, explicitArray: attributes.explicitArray });
        }
    }
}

function extractValue(obbVal, path, pNames, resultObj, possNames, explicitArray) {
    const lstName = pNames[(pNames.length - 1)];

    for (let i = 1; i <= path.length; i++) {
        if (obbVal && !Array.isArray(obbVal) && explicitArray && i === (path.length - 1)) {
            obbVal = [obbVal];
        }
        if (Array.isArray(obbVal)) {
            const childName = path.length === i ? lstName : (pNames.length === 1 ? 'data' : pNames[0]);
            resultObj[childName] = resultObj[childName] || [];

            if ((path.length - 1) === i || path.length === i) {
                obbVal.forEach(function(ar, ix) {
                    //  let val = ar[path[i]] ? ar[path[i]] : ar;
                    if (typeof (ar[path[i]]) !== 'undefined' || (typeof (path[i]) === 'undefined' && typeof (ar) === 'string')) {
                        //   we enter here when there is such property in result object OR when result object i actualy array of string values
                        const val = removeNilValues(typeof (path[i]) !== 'undefined' ? ar[path[i]] : ar);
                        if (path.length === i) {
                            resultObj[childName].push(val);
                        } else {
                            if (resultObj[childName][ix]) {
                                resultObj[childName][ix][lstName] = val;
                            } else {
                                const vl = {};
                                vl[lstName] = val;
                                resultObj[childName].push(vl);
                            }
                        }
                    }
                });
            } else {
                //  todo: ...extract array sub objects
                //  let chOb = extractValue(ar[path[i]], path, pName);
                //  res.push(chOb);
            }

            return resultObj;
        } else if (typeof (obbVal) === 'object') {
            let foundPn = false;
            if (possNames[path[i]]) {
                const posNames = possNames[path[i]];
                for (const p in posNames) {
                    if (typeof (posNames[p]) === 'string') {
                        if (posNames[p] === '*') {
                            obbVal = obbVal[Object.keys(obbVal)[0]];
                            foundPn = true;
                            break;
                        }
                        if (obbVal[posNames[p]]) {
                            obbVal = obbVal[posNames[p]];
                            foundPn = true;
                            break;
                        }
                    }
                }
            }
            if (!foundPn) {
                if (i === path.length) {
                    resultObj[lstName] = obbVal[path[i]];
                } else {
                    obbVal = obbVal[path[i]];
                }
            }
        } else {
            //  text
            if (pNames.length === 1) {
                resultObj[lstName] = obbVal;
            } else {
                if (!obbVal && explicitArray) {
                    resultObj[pNames[0]] = resultObj[pNames[0]] || [];
                } else {
                    resultObj[pNames[0]] = resultObj[pNames[0]] || {};
                    resultObj[pNames[0]][lstName] = obbVal;
                }
            }
        }
    }
}

function tagNameProcessor(name) {
    const r = name.split(':');
    return r[r.length - 1];
}

// ----------------------------------------------
module.exports = {
    parse: function(templName, data) {
        const templFile = fs.readFileSync(require.resolve(templName)).toString();
        const doc = new DOMParser().parseFromString(templFile);
        const fieldMapings = [];
        getMaping(doc, fieldMapings);

        return new Promise(function(resolve, reject) {
            xml2js.parseString(data, {
                trim: true,
                ignoreAttrs: false,
                explicitArray: false,
                tagNameProcessors: [tagNameProcessor]
            },
            function(err, reslt) {
                if (err) {
                    reject(err);
                    return;
                }
                const prsRes = {};
                for (const k in fieldMapings) {
                    if (typeof (fieldMapings[k]) === 'object') {
                        const path = fieldMapings[k].path;
                        const propNames = fieldMapings[k].fldName.split('.');
                        const obbVal = reslt[path[0]];
                        extractValue(obbVal, path, propNames, prsRes, fieldMapings[k].possblNames, fieldMapings[k].explicitArray);
                    }
                }
                //    console.log(reslt);
                resolve(prsRes);
            });
        });
    }
};

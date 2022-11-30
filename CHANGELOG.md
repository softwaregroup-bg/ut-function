#  (2022-11-30)


### Bug Fixes

* add description field in dropdownItems schema ([#37](https://github.com/softwaregroup-bg/ut-function/issues/37)) ([26caaff](https://github.com/softwaregroup-bg/ut-function/commit/26caaff92b95eb0690c5cc077eb635637b388ccc))
* add templateString property in function compilation errors ([bab080f](https://github.com/softwaregroup-bg/ut-function/commit/bab080fe75ffad4f21e25554523a7e8d770e598c))
* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* cbc utf8 handling #UTCORE-121 ([c86bd4c](https://github.com/softwaregroup-bg/ut-function/commit/c86bd4c0a870b649b5fcb2cf7a5e64f6b5b4d39a)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* dependencies ([2ed8d0a](https://github.com/softwaregroup-bg/ut-function/commit/2ed8d0ace696a18a12e18074ecbc7b9659d583c5))
* error handling #UTCORE-121 ([99b7ec9](https://github.com/softwaregroup-bg/ut-function/commit/99b7ec922904bb96d9a5e9282ae21f5af6a732d3)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* filter reserved words for variable names ([1fe2aa3](https://github.com/softwaregroup-bg/ut-function/commit/1fe2aa3d56cd75846463af745d5ec3e59a788845))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* handle undefined during stringify ([18b53e4](https://github.com/softwaregroup-bg/ut-function/commit/18b53e4a969a9154c124d6e4f61f7029faca3bef))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* improve JSON escaping ([e5ec5a2](https://github.com/softwaregroup-bg/ut-function/commit/e5ec5a22f7f4e29326b67cf43974c897ac529f5a))
* improve TS type generation ([5b61df5](https://github.com/softwaregroup-bg/ut-function/commit/5b61df59102fd74baf07d218c165ded75b68a28b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* reduce orderBy field length to (50) in accordance to core.orderByTT field column length ([#42](https://github.com/softwaregroup-bg/ut-function/issues/42)) ([40478f5](https://github.com/softwaregroup-bg/ut-function/commit/40478f5ab04bf3d359ede831c45a1f6261700c4a))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* stringTrimmed and stringNoSpace validation schemas ([#35](https://github.com/softwaregroup-bg/ut-function/issues/35)) ([709832a](https://github.com/softwaregroup-bg/ut-function/commit/709832a8434ed877918a5b1bc017d7a645896fd1))
* support older node.js ([adc9bd8](https://github.com/softwaregroup-bg/ut-function/commit/adc9bd829b41a427b4aa79897696923c004cac49))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* file validation ([697fa3a](https://github.com/softwaregroup-bg/ut-function/commit/697fa3ac92a7195ed779e689bf7a158b8b88b5fa))
* Move history transform functionality in ut-function.transform C… ([#43](https://github.com/softwaregroup-bg/ut-function/issues/43)) ([77d095a](https://github.com/softwaregroup-bg/ut-function/commit/77d095ab04460eb230a01cb4136ccbc9248e0861))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* ngram extraction function ([#41](https://github.com/softwaregroup-bg/ut-function/issues/41)) ([0706019](https://github.com/softwaregroup-bg/ut-function/commit/070601968fd6b04c73d821a8774136224acfbce3))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* stringify escaper ([df21ccb](https://github.com/softwaregroup-bg/ut-function/commit/df21ccb2865fcb0c9f81668b2edfea27059a52dc))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.iban ([#34](https://github.com/softwaregroup-bg/ut-function/issues/34)) ([84caa28](https://github.com/softwaregroup-bg/ut-function/commit/84caa28f11831d6f62b5518439a62d8af6007af2))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))
* xss prevention for all string schemas ([#39](https://github.com/softwaregroup-bg/ut-function/issues/39)) ([3d5ef00](https://github.com/softwaregroup-bg/ut-function/commit/3d5ef00ffc787878efeda427234fa53ecd44d2d7))



#  (2022-11-23)


### Bug Fixes

* add description field in dropdownItems schema ([#37](https://github.com/softwaregroup-bg/ut-function/issues/37)) ([26caaff](https://github.com/softwaregroup-bg/ut-function/commit/26caaff92b95eb0690c5cc077eb635637b388ccc))
* add templateString property in function compilation errors ([bab080f](https://github.com/softwaregroup-bg/ut-function/commit/bab080fe75ffad4f21e25554523a7e8d770e598c))
* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* cbc utf8 handling #UTCORE-121 ([c86bd4c](https://github.com/softwaregroup-bg/ut-function/commit/c86bd4c0a870b649b5fcb2cf7a5e64f6b5b4d39a)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* dependencies ([2ed8d0a](https://github.com/softwaregroup-bg/ut-function/commit/2ed8d0ace696a18a12e18074ecbc7b9659d583c5))
* error handling #UTCORE-121 ([99b7ec9](https://github.com/softwaregroup-bg/ut-function/commit/99b7ec922904bb96d9a5e9282ae21f5af6a732d3)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* filter reserved words for variable names ([1fe2aa3](https://github.com/softwaregroup-bg/ut-function/commit/1fe2aa3d56cd75846463af745d5ec3e59a788845))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* handle undefined during stringify ([18b53e4](https://github.com/softwaregroup-bg/ut-function/commit/18b53e4a969a9154c124d6e4f61f7029faca3bef))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* improve JSON escaping ([e5ec5a2](https://github.com/softwaregroup-bg/ut-function/commit/e5ec5a22f7f4e29326b67cf43974c897ac529f5a))
* improve TS type generation ([5b61df5](https://github.com/softwaregroup-bg/ut-function/commit/5b61df59102fd74baf07d218c165ded75b68a28b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* reduce orderBy field length to (50) in accordance to core.orderByTT field column length ([#42](https://github.com/softwaregroup-bg/ut-function/issues/42)) ([40478f5](https://github.com/softwaregroup-bg/ut-function/commit/40478f5ab04bf3d359ede831c45a1f6261700c4a))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* stringTrimmed and stringNoSpace validation schemas ([#35](https://github.com/softwaregroup-bg/ut-function/issues/35)) ([709832a](https://github.com/softwaregroup-bg/ut-function/commit/709832a8434ed877918a5b1bc017d7a645896fd1))
* support older node.js ([adc9bd8](https://github.com/softwaregroup-bg/ut-function/commit/adc9bd829b41a427b4aa79897696923c004cac49))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* file validation ([697fa3a](https://github.com/softwaregroup-bg/ut-function/commit/697fa3ac92a7195ed779e689bf7a158b8b88b5fa))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* ngram extraction function ([#41](https://github.com/softwaregroup-bg/ut-function/issues/41)) ([0706019](https://github.com/softwaregroup-bg/ut-function/commit/070601968fd6b04c73d821a8774136224acfbce3))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* stringify escaper ([df21ccb](https://github.com/softwaregroup-bg/ut-function/commit/df21ccb2865fcb0c9f81668b2edfea27059a52dc))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.iban ([#34](https://github.com/softwaregroup-bg/ut-function/issues/34)) ([84caa28](https://github.com/softwaregroup-bg/ut-function/commit/84caa28f11831d6f62b5518439a62d8af6007af2))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))
* xss prevention for all string schemas ([#39](https://github.com/softwaregroup-bg/ut-function/issues/39)) ([3d5ef00](https://github.com/softwaregroup-bg/ut-function/commit/3d5ef00ffc787878efeda427234fa53ecd44d2d7))



#  (2022-11-02)


### Bug Fixes

* add description field in dropdownItems schema ([#37](https://github.com/softwaregroup-bg/ut-function/issues/37)) ([26caaff](https://github.com/softwaregroup-bg/ut-function/commit/26caaff92b95eb0690c5cc077eb635637b388ccc))
* add templateString property in function compilation errors ([bab080f](https://github.com/softwaregroup-bg/ut-function/commit/bab080fe75ffad4f21e25554523a7e8d770e598c))
* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* cbc utf8 handling #UTCORE-121 ([c86bd4c](https://github.com/softwaregroup-bg/ut-function/commit/c86bd4c0a870b649b5fcb2cf7a5e64f6b5b4d39a)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* dependencies ([2ed8d0a](https://github.com/softwaregroup-bg/ut-function/commit/2ed8d0ace696a18a12e18074ecbc7b9659d583c5))
* error handling #UTCORE-121 ([99b7ec9](https://github.com/softwaregroup-bg/ut-function/commit/99b7ec922904bb96d9a5e9282ae21f5af6a732d3)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* handle undefined during stringify ([18b53e4](https://github.com/softwaregroup-bg/ut-function/commit/18b53e4a969a9154c124d6e4f61f7029faca3bef))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* improve JSON escaping ([e5ec5a2](https://github.com/softwaregroup-bg/ut-function/commit/e5ec5a22f7f4e29326b67cf43974c897ac529f5a))
* improve TS type generation ([5b61df5](https://github.com/softwaregroup-bg/ut-function/commit/5b61df59102fd74baf07d218c165ded75b68a28b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* reduce orderBy field length to (50) in accordance to core.orderByTT field column length ([#42](https://github.com/softwaregroup-bg/ut-function/issues/42)) ([40478f5](https://github.com/softwaregroup-bg/ut-function/commit/40478f5ab04bf3d359ede831c45a1f6261700c4a))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* stringTrimmed and stringNoSpace validation schemas ([#35](https://github.com/softwaregroup-bg/ut-function/issues/35)) ([709832a](https://github.com/softwaregroup-bg/ut-function/commit/709832a8434ed877918a5b1bc017d7a645896fd1))
* support older node.js ([adc9bd8](https://github.com/softwaregroup-bg/ut-function/commit/adc9bd829b41a427b4aa79897696923c004cac49))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* file validation ([697fa3a](https://github.com/softwaregroup-bg/ut-function/commit/697fa3ac92a7195ed779e689bf7a158b8b88b5fa))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* ngram extraction function ([#41](https://github.com/softwaregroup-bg/ut-function/issues/41)) ([0706019](https://github.com/softwaregroup-bg/ut-function/commit/070601968fd6b04c73d821a8774136224acfbce3))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* stringify escaper ([df21ccb](https://github.com/softwaregroup-bg/ut-function/commit/df21ccb2865fcb0c9f81668b2edfea27059a52dc))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.iban ([#34](https://github.com/softwaregroup-bg/ut-function/issues/34)) ([84caa28](https://github.com/softwaregroup-bg/ut-function/commit/84caa28f11831d6f62b5518439a62d8af6007af2))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))
* xss prevention for all string schemas ([#39](https://github.com/softwaregroup-bg/ut-function/issues/39)) ([3d5ef00](https://github.com/softwaregroup-bg/ut-function/commit/3d5ef00ffc787878efeda427234fa53ecd44d2d7))



#  (2022-10-17)


### Bug Fixes

* add description field in dropdownItems schema ([#37](https://github.com/softwaregroup-bg/ut-function/issues/37)) ([26caaff](https://github.com/softwaregroup-bg/ut-function/commit/26caaff92b95eb0690c5cc077eb635637b388ccc))
* add templateString property in function compilation errors ([bab080f](https://github.com/softwaregroup-bg/ut-function/commit/bab080fe75ffad4f21e25554523a7e8d770e598c))
* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* cbc utf8 handling #UTCORE-121 ([c86bd4c](https://github.com/softwaregroup-bg/ut-function/commit/c86bd4c0a870b649b5fcb2cf7a5e64f6b5b4d39a)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* dependencies ([2ed8d0a](https://github.com/softwaregroup-bg/ut-function/commit/2ed8d0ace696a18a12e18074ecbc7b9659d583c5))
* error handling #UTCORE-121 ([99b7ec9](https://github.com/softwaregroup-bg/ut-function/commit/99b7ec922904bb96d9a5e9282ae21f5af6a732d3)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* handle undefined during stringify ([18b53e4](https://github.com/softwaregroup-bg/ut-function/commit/18b53e4a969a9154c124d6e4f61f7029faca3bef))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* improve JSON escaping ([e5ec5a2](https://github.com/softwaregroup-bg/ut-function/commit/e5ec5a22f7f4e29326b67cf43974c897ac529f5a))
* improve TS type generation ([5b61df5](https://github.com/softwaregroup-bg/ut-function/commit/5b61df59102fd74baf07d218c165ded75b68a28b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* stringTrimmed and stringNoSpace validation schemas ([#35](https://github.com/softwaregroup-bg/ut-function/issues/35)) ([709832a](https://github.com/softwaregroup-bg/ut-function/commit/709832a8434ed877918a5b1bc017d7a645896fd1))
* support older node.js ([adc9bd8](https://github.com/softwaregroup-bg/ut-function/commit/adc9bd829b41a427b4aa79897696923c004cac49))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* file validation ([697fa3a](https://github.com/softwaregroup-bg/ut-function/commit/697fa3ac92a7195ed779e689bf7a158b8b88b5fa))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* ngram extraction function ([#41](https://github.com/softwaregroup-bg/ut-function/issues/41)) ([0706019](https://github.com/softwaregroup-bg/ut-function/commit/070601968fd6b04c73d821a8774136224acfbce3))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* stringify escaper ([df21ccb](https://github.com/softwaregroup-bg/ut-function/commit/df21ccb2865fcb0c9f81668b2edfea27059a52dc))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.iban ([#34](https://github.com/softwaregroup-bg/ut-function/issues/34)) ([84caa28](https://github.com/softwaregroup-bg/ut-function/commit/84caa28f11831d6f62b5518439a62d8af6007af2))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))
* xss prevention for all string schemas ([#39](https://github.com/softwaregroup-bg/ut-function/issues/39)) ([3d5ef00](https://github.com/softwaregroup-bg/ut-function/commit/3d5ef00ffc787878efeda427234fa53ecd44d2d7))



#  (2022-10-12)


### Bug Fixes

* add description field in dropdownItems schema ([#37](https://github.com/softwaregroup-bg/ut-function/issues/37)) ([26caaff](https://github.com/softwaregroup-bg/ut-function/commit/26caaff92b95eb0690c5cc077eb635637b388ccc))
* add templateString property in function compilation errors ([bab080f](https://github.com/softwaregroup-bg/ut-function/commit/bab080fe75ffad4f21e25554523a7e8d770e598c))
* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* cbc utf8 handling #UTCORE-121 ([c86bd4c](https://github.com/softwaregroup-bg/ut-function/commit/c86bd4c0a870b649b5fcb2cf7a5e64f6b5b4d39a)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* dependencies ([2ed8d0a](https://github.com/softwaregroup-bg/ut-function/commit/2ed8d0ace696a18a12e18074ecbc7b9659d583c5))
* error handling #UTCORE-121 ([99b7ec9](https://github.com/softwaregroup-bg/ut-function/commit/99b7ec922904bb96d9a5e9282ae21f5af6a732d3)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* handle undefined during stringify ([18b53e4](https://github.com/softwaregroup-bg/ut-function/commit/18b53e4a969a9154c124d6e4f61f7029faca3bef))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* improve JSON escaping ([e5ec5a2](https://github.com/softwaregroup-bg/ut-function/commit/e5ec5a22f7f4e29326b67cf43974c897ac529f5a))
* improve TS type generation ([5b61df5](https://github.com/softwaregroup-bg/ut-function/commit/5b61df59102fd74baf07d218c165ded75b68a28b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* stringTrimmed and stringNoSpace validation schemas ([#35](https://github.com/softwaregroup-bg/ut-function/issues/35)) ([709832a](https://github.com/softwaregroup-bg/ut-function/commit/709832a8434ed877918a5b1bc017d7a645896fd1))
* support older node.js ([adc9bd8](https://github.com/softwaregroup-bg/ut-function/commit/adc9bd829b41a427b4aa79897696923c004cac49))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* file validation ([697fa3a](https://github.com/softwaregroup-bg/ut-function/commit/697fa3ac92a7195ed779e689bf7a158b8b88b5fa))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* stringify escaper ([df21ccb](https://github.com/softwaregroup-bg/ut-function/commit/df21ccb2865fcb0c9f81668b2edfea27059a52dc))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.iban ([#34](https://github.com/softwaregroup-bg/ut-function/issues/34)) ([84caa28](https://github.com/softwaregroup-bg/ut-function/commit/84caa28f11831d6f62b5518439a62d8af6007af2))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))
* xss prevention for all string schemas ([#39](https://github.com/softwaregroup-bg/ut-function/issues/39)) ([3d5ef00](https://github.com/softwaregroup-bg/ut-function/commit/3d5ef00ffc787878efeda427234fa53ecd44d2d7))



#  (2022-10-03)


### Bug Fixes

* add description field in dropdownItems schema ([#37](https://github.com/softwaregroup-bg/ut-function/issues/37)) ([26caaff](https://github.com/softwaregroup-bg/ut-function/commit/26caaff92b95eb0690c5cc077eb635637b388ccc))
* add templateString property in function compilation errors ([bab080f](https://github.com/softwaregroup-bg/ut-function/commit/bab080fe75ffad4f21e25554523a7e8d770e598c))
* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* cbc utf8 handling #UTCORE-121 ([c86bd4c](https://github.com/softwaregroup-bg/ut-function/commit/c86bd4c0a870b649b5fcb2cf7a5e64f6b5b4d39a)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* dependencies ([2ed8d0a](https://github.com/softwaregroup-bg/ut-function/commit/2ed8d0ace696a18a12e18074ecbc7b9659d583c5))
* error handling #UTCORE-121 ([99b7ec9](https://github.com/softwaregroup-bg/ut-function/commit/99b7ec922904bb96d9a5e9282ae21f5af6a732d3)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* handle undefined during stringify ([18b53e4](https://github.com/softwaregroup-bg/ut-function/commit/18b53e4a969a9154c124d6e4f61f7029faca3bef))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* improve JSON escaping ([e5ec5a2](https://github.com/softwaregroup-bg/ut-function/commit/e5ec5a22f7f4e29326b67cf43974c897ac529f5a))
* improve TS type generation ([5b61df5](https://github.com/softwaregroup-bg/ut-function/commit/5b61df59102fd74baf07d218c165ded75b68a28b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* stringTrimmed and stringNoSpace validation schemas ([#35](https://github.com/softwaregroup-bg/ut-function/issues/35)) ([709832a](https://github.com/softwaregroup-bg/ut-function/commit/709832a8434ed877918a5b1bc017d7a645896fd1))
* support older node.js ([adc9bd8](https://github.com/softwaregroup-bg/ut-function/commit/adc9bd829b41a427b4aa79897696923c004cac49))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* file validation ([697fa3a](https://github.com/softwaregroup-bg/ut-function/commit/697fa3ac92a7195ed779e689bf7a158b8b88b5fa))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* stringify escaper ([df21ccb](https://github.com/softwaregroup-bg/ut-function/commit/df21ccb2865fcb0c9f81668b2edfea27059a52dc))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.iban ([#34](https://github.com/softwaregroup-bg/ut-function/issues/34)) ([84caa28](https://github.com/softwaregroup-bg/ut-function/commit/84caa28f11831d6f62b5518439a62d8af6007af2))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2022-09-08)


### Bug Fixes

* add description field in dropdownItems schema ([#37](https://github.com/softwaregroup-bg/ut-function/issues/37)) ([26caaff](https://github.com/softwaregroup-bg/ut-function/commit/26caaff92b95eb0690c5cc077eb635637b388ccc))
* add templateString property in function compilation errors ([bab080f](https://github.com/softwaregroup-bg/ut-function/commit/bab080fe75ffad4f21e25554523a7e8d770e598c))
* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* cbc utf8 handling #UTCORE-121 ([c86bd4c](https://github.com/softwaregroup-bg/ut-function/commit/c86bd4c0a870b649b5fcb2cf7a5e64f6b5b4d39a)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* dependencies ([2ed8d0a](https://github.com/softwaregroup-bg/ut-function/commit/2ed8d0ace696a18a12e18074ecbc7b9659d583c5))
* error handling #UTCORE-121 ([99b7ec9](https://github.com/softwaregroup-bg/ut-function/commit/99b7ec922904bb96d9a5e9282ae21f5af6a732d3)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* handle undefined during stringify ([18b53e4](https://github.com/softwaregroup-bg/ut-function/commit/18b53e4a969a9154c124d6e4f61f7029faca3bef))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* improve JSON escaping ([e5ec5a2](https://github.com/softwaregroup-bg/ut-function/commit/e5ec5a22f7f4e29326b67cf43974c897ac529f5a))
* improve TS type generation ([5b61df5](https://github.com/softwaregroup-bg/ut-function/commit/5b61df59102fd74baf07d218c165ded75b68a28b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* stringTrimmed and stringNoSpace validation schemas ([#35](https://github.com/softwaregroup-bg/ut-function/issues/35)) ([709832a](https://github.com/softwaregroup-bg/ut-function/commit/709832a8434ed877918a5b1bc017d7a645896fd1))
* support older node.js ([adc9bd8](https://github.com/softwaregroup-bg/ut-function/commit/adc9bd829b41a427b4aa79897696923c004cac49))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* stringify escaper ([df21ccb](https://github.com/softwaregroup-bg/ut-function/commit/df21ccb2865fcb0c9f81668b2edfea27059a52dc))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.iban ([#34](https://github.com/softwaregroup-bg/ut-function/issues/34)) ([84caa28](https://github.com/softwaregroup-bg/ut-function/commit/84caa28f11831d6f62b5518439a62d8af6007af2))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2022-09-07)


### Bug Fixes

* add description field in dropdownItems schema ([#37](https://github.com/softwaregroup-bg/ut-function/issues/37)) ([26caaff](https://github.com/softwaregroup-bg/ut-function/commit/26caaff92b95eb0690c5cc077eb635637b388ccc))
* add templateString property in function compilation errors ([bab080f](https://github.com/softwaregroup-bg/ut-function/commit/bab080fe75ffad4f21e25554523a7e8d770e598c))
* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* cbc utf8 handling #UTCORE-121 ([c86bd4c](https://github.com/softwaregroup-bg/ut-function/commit/c86bd4c0a870b649b5fcb2cf7a5e64f6b5b4d39a)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* dependencies ([2ed8d0a](https://github.com/softwaregroup-bg/ut-function/commit/2ed8d0ace696a18a12e18074ecbc7b9659d583c5))
* error handling #UTCORE-121 ([99b7ec9](https://github.com/softwaregroup-bg/ut-function/commit/99b7ec922904bb96d9a5e9282ae21f5af6a732d3)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* improve JSON escaping ([e5ec5a2](https://github.com/softwaregroup-bg/ut-function/commit/e5ec5a22f7f4e29326b67cf43974c897ac529f5a))
* improve TS type generation ([5b61df5](https://github.com/softwaregroup-bg/ut-function/commit/5b61df59102fd74baf07d218c165ded75b68a28b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* stringTrimmed and stringNoSpace validation schemas ([#35](https://github.com/softwaregroup-bg/ut-function/issues/35)) ([709832a](https://github.com/softwaregroup-bg/ut-function/commit/709832a8434ed877918a5b1bc017d7a645896fd1))
* support older node.js ([adc9bd8](https://github.com/softwaregroup-bg/ut-function/commit/adc9bd829b41a427b4aa79897696923c004cac49))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* stringify escaper ([df21ccb](https://github.com/softwaregroup-bg/ut-function/commit/df21ccb2865fcb0c9f81668b2edfea27059a52dc))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.iban ([#34](https://github.com/softwaregroup-bg/ut-function/issues/34)) ([84caa28](https://github.com/softwaregroup-bg/ut-function/commit/84caa28f11831d6f62b5518439a62d8af6007af2))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2022-09-02)


### Bug Fixes

* add description field in dropdownItems schema ([#37](https://github.com/softwaregroup-bg/ut-function/issues/37)) ([26caaff](https://github.com/softwaregroup-bg/ut-function/commit/26caaff92b95eb0690c5cc077eb635637b388ccc))
* add templateString property in function compilation errors ([bab080f](https://github.com/softwaregroup-bg/ut-function/commit/bab080fe75ffad4f21e25554523a7e8d770e598c))
* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* cbc utf8 handling #UTCORE-121 ([c86bd4c](https://github.com/softwaregroup-bg/ut-function/commit/c86bd4c0a870b649b5fcb2cf7a5e64f6b5b4d39a)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* dependencies ([2ed8d0a](https://github.com/softwaregroup-bg/ut-function/commit/2ed8d0ace696a18a12e18074ecbc7b9659d583c5))
* error handling #UTCORE-121 ([99b7ec9](https://github.com/softwaregroup-bg/ut-function/commit/99b7ec922904bb96d9a5e9282ae21f5af6a732d3)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* improve JSON escaping ([e5ec5a2](https://github.com/softwaregroup-bg/ut-function/commit/e5ec5a22f7f4e29326b67cf43974c897ac529f5a))
* improve TS type generation ([5b61df5](https://github.com/softwaregroup-bg/ut-function/commit/5b61df59102fd74baf07d218c165ded75b68a28b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* stringTrimmed and stringNoSpace validation schemas ([#35](https://github.com/softwaregroup-bg/ut-function/issues/35)) ([709832a](https://github.com/softwaregroup-bg/ut-function/commit/709832a8434ed877918a5b1bc017d7a645896fd1))
* support older node.js ([adc9bd8](https://github.com/softwaregroup-bg/ut-function/commit/adc9bd829b41a427b4aa79897696923c004cac49))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.iban ([#34](https://github.com/softwaregroup-bg/ut-function/issues/34)) ([84caa28](https://github.com/softwaregroup-bg/ut-function/commit/84caa28f11831d6f62b5518439a62d8af6007af2))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2022-07-20)


### Bug Fixes

* add description field in dropdownItems schema ([#37](https://github.com/softwaregroup-bg/ut-function/issues/37)) ([26caaff](https://github.com/softwaregroup-bg/ut-function/commit/26caaff92b95eb0690c5cc077eb635637b388ccc))
* add templateString property in function compilation errors ([bab080f](https://github.com/softwaregroup-bg/ut-function/commit/bab080fe75ffad4f21e25554523a7e8d770e598c))
* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* cbc utf8 handling #UTCORE-121 ([c86bd4c](https://github.com/softwaregroup-bg/ut-function/commit/c86bd4c0a870b649b5fcb2cf7a5e64f6b5b4d39a)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* dependencies ([2ed8d0a](https://github.com/softwaregroup-bg/ut-function/commit/2ed8d0ace696a18a12e18074ecbc7b9659d583c5))
* error handling #UTCORE-121 ([99b7ec9](https://github.com/softwaregroup-bg/ut-function/commit/99b7ec922904bb96d9a5e9282ae21f5af6a732d3)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* improve JSON escaping ([e5ec5a2](https://github.com/softwaregroup-bg/ut-function/commit/e5ec5a22f7f4e29326b67cf43974c897ac529f5a))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* stringTrimmed and stringNoSpace validation schemas ([#35](https://github.com/softwaregroup-bg/ut-function/issues/35)) ([709832a](https://github.com/softwaregroup-bg/ut-function/commit/709832a8434ed877918a5b1bc017d7a645896fd1))
* support older node.js ([adc9bd8](https://github.com/softwaregroup-bg/ut-function/commit/adc9bd829b41a427b4aa79897696923c004cac49))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.iban ([#34](https://github.com/softwaregroup-bg/ut-function/issues/34)) ([84caa28](https://github.com/softwaregroup-bg/ut-function/commit/84caa28f11831d6f62b5518439a62d8af6007af2))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2022-06-30)


### Bug Fixes

* add templateString property in function compilation errors ([bab080f](https://github.com/softwaregroup-bg/ut-function/commit/bab080fe75ffad4f21e25554523a7e8d770e598c))
* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* cbc utf8 handling #UTCORE-121 ([c86bd4c](https://github.com/softwaregroup-bg/ut-function/commit/c86bd4c0a870b649b5fcb2cf7a5e64f6b5b4d39a)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* dependencies ([2ed8d0a](https://github.com/softwaregroup-bg/ut-function/commit/2ed8d0ace696a18a12e18074ecbc7b9659d583c5))
* error handling #UTCORE-121 ([99b7ec9](https://github.com/softwaregroup-bg/ut-function/commit/99b7ec922904bb96d9a5e9282ae21f5af6a732d3)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* improve JSON escaping ([e5ec5a2](https://github.com/softwaregroup-bg/ut-function/commit/e5ec5a22f7f4e29326b67cf43974c897ac529f5a))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* stringTrimmed and stringNoSpace validation schemas ([#35](https://github.com/softwaregroup-bg/ut-function/issues/35)) ([709832a](https://github.com/softwaregroup-bg/ut-function/commit/709832a8434ed877918a5b1bc017d7a645896fd1))
* support older node.js ([adc9bd8](https://github.com/softwaregroup-bg/ut-function/commit/adc9bd829b41a427b4aa79897696923c004cac49))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.iban ([#34](https://github.com/softwaregroup-bg/ut-function/issues/34)) ([84caa28](https://github.com/softwaregroup-bg/ut-function/commit/84caa28f11831d6f62b5518439a62d8af6007af2))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2022-06-10)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* cbc utf8 handling #UTCORE-121 ([c86bd4c](https://github.com/softwaregroup-bg/ut-function/commit/c86bd4c0a870b649b5fcb2cf7a5e64f6b5b4d39a)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* dependencies ([2ed8d0a](https://github.com/softwaregroup-bg/ut-function/commit/2ed8d0ace696a18a12e18074ecbc7b9659d583c5))
* error handling #UTCORE-121 ([99b7ec9](https://github.com/softwaregroup-bg/ut-function/commit/99b7ec922904bb96d9a5e9282ae21f5af6a732d3)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* improve JSON escaping ([e5ec5a2](https://github.com/softwaregroup-bg/ut-function/commit/e5ec5a22f7f4e29326b67cf43974c897ac529f5a))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* stringTrimmed and stringNoSpace validation schemas ([#35](https://github.com/softwaregroup-bg/ut-function/issues/35)) ([709832a](https://github.com/softwaregroup-bg/ut-function/commit/709832a8434ed877918a5b1bc017d7a645896fd1))
* support older node.js ([adc9bd8](https://github.com/softwaregroup-bg/ut-function/commit/adc9bd829b41a427b4aa79897696923c004cac49))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.iban ([#34](https://github.com/softwaregroup-bg/ut-function/issues/34)) ([84caa28](https://github.com/softwaregroup-bg/ut-function/commit/84caa28f11831d6f62b5518439a62d8af6007af2))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2022-06-10)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* cbc utf8 handling #UTCORE-121 ([c86bd4c](https://github.com/softwaregroup-bg/ut-function/commit/c86bd4c0a870b649b5fcb2cf7a5e64f6b5b4d39a)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* dependencies ([2ed8d0a](https://github.com/softwaregroup-bg/ut-function/commit/2ed8d0ace696a18a12e18074ecbc7b9659d583c5))
* error handling #UTCORE-121 ([99b7ec9](https://github.com/softwaregroup-bg/ut-function/commit/99b7ec922904bb96d9a5e9282ae21f5af6a732d3)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* improve JSON escaping ([e5ec5a2](https://github.com/softwaregroup-bg/ut-function/commit/e5ec5a22f7f4e29326b67cf43974c897ac529f5a))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* stringTrimmed and stringNoSpace validation schemas ([#35](https://github.com/softwaregroup-bg/ut-function/issues/35)) ([709832a](https://github.com/softwaregroup-bg/ut-function/commit/709832a8434ed877918a5b1bc017d7a645896fd1))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.iban ([#34](https://github.com/softwaregroup-bg/ut-function/issues/34)) ([84caa28](https://github.com/softwaregroup-bg/ut-function/commit/84caa28f11831d6f62b5518439a62d8af6007af2))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2022-05-27)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* cbc utf8 handling #UTCORE-121 ([c86bd4c](https://github.com/softwaregroup-bg/ut-function/commit/c86bd4c0a870b649b5fcb2cf7a5e64f6b5b4d39a)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* dependencies ([2ed8d0a](https://github.com/softwaregroup-bg/ut-function/commit/2ed8d0ace696a18a12e18074ecbc7b9659d583c5))
* error handling #UTCORE-121 ([99b7ec9](https://github.com/softwaregroup-bg/ut-function/commit/99b7ec922904bb96d9a5e9282ae21f5af6a732d3)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* stringTrimmed and stringNoSpace validation schemas ([#35](https://github.com/softwaregroup-bg/ut-function/issues/35)) ([709832a](https://github.com/softwaregroup-bg/ut-function/commit/709832a8434ed877918a5b1bc017d7a645896fd1))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.iban ([#34](https://github.com/softwaregroup-bg/ut-function/issues/34)) ([84caa28](https://github.com/softwaregroup-bg/ut-function/commit/84caa28f11831d6f62b5518439a62d8af6007af2))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2022-05-26)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* cbc utf8 handling #UTCORE-121 ([c86bd4c](https://github.com/softwaregroup-bg/ut-function/commit/c86bd4c0a870b649b5fcb2cf7a5e64f6b5b4d39a)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* dependencies ([2ed8d0a](https://github.com/softwaregroup-bg/ut-function/commit/2ed8d0ace696a18a12e18074ecbc7b9659d583c5))
* error handling #UTCORE-121 ([99b7ec9](https://github.com/softwaregroup-bg/ut-function/commit/99b7ec922904bb96d9a5e9282ae21f5af6a732d3)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.iban ([#34](https://github.com/softwaregroup-bg/ut-function/issues/34)) ([84caa28](https://github.com/softwaregroup-bg/ut-function/commit/84caa28f11831d6f62b5518439a62d8af6007af2))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2022-05-25)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* cbc utf8 handling #UTCORE-121 ([c86bd4c](https://github.com/softwaregroup-bg/ut-function/commit/c86bd4c0a870b649b5fcb2cf7a5e64f6b5b4d39a)), closes [#UTCORE-121](https://github.com/softwaregroup-bg/ut-function/issues/UTCORE-121)
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* dependencies ([2ed8d0a](https://github.com/softwaregroup-bg/ut-function/commit/2ed8d0ace696a18a12e18074ecbc7b9659d583c5))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.iban ([#34](https://github.com/softwaregroup-bg/ut-function/issues/34)) ([84caa28](https://github.com/softwaregroup-bg/ut-function/commit/84caa28f11831d6f62b5518439a62d8af6007af2))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2022-05-23)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* dependencies ([2ed8d0a](https://github.com/softwaregroup-bg/ut-function/commit/2ed8d0ace696a18a12e18074ecbc7b9659d583c5))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.iban ([#34](https://github.com/softwaregroup-bg/ut-function/issues/34)) ([84caa28](https://github.com/softwaregroup-bg/ut-function/commit/84caa28f11831d6f62b5518439a62d8af6007af2))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2022-04-13)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* dependencies ([2ed8d0a](https://github.com/softwaregroup-bg/ut-function/commit/2ed8d0ace696a18a12e18074ecbc7b9659d583c5))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.iban ([#34](https://github.com/softwaregroup-bg/ut-function/issues/34)) ([84caa28](https://github.com/softwaregroup-bg/ut-function/commit/84caa28f11831d6f62b5518439a62d8af6007af2))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2022-04-13)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.iban ([#34](https://github.com/softwaregroup-bg/ut-function/issues/34)) ([84caa28](https://github.com/softwaregroup-bg/ut-function/commit/84caa28f11831d6f62b5518439a62d8af6007af2))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2022-01-17)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* simplify schema ([8ccef9d](https://github.com/softwaregroup-bg/ut-function/commit/8ccef9d9e075b82d0fea615c7bd764ad2bd61f9e))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-12-20)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add dropdown alias ([d6eb4f7](https://github.com/softwaregroup-bg/ut-function/commit/d6eb4f7a16805a5e1955547a73d5e028f7b76a99))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-12-07)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))
* typo ([#32](https://github.com/softwaregroup-bg/ut-function/issues/32)) ([2a226c2](https://github.com/softwaregroup-bg/ut-function/commit/2a226c285bf9e6c30b39786e1c0c447683eda395))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-12-02)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-10-28)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add currency names ([#30](https://github.com/softwaregroup-bg/ut-function/issues/30)) ([95e3fd2](https://github.com/softwaregroup-bg/ut-function/commit/95e3fd2d6077bbaff3c00b11fbd4648514907b75))
* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-10-26)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* orderBy fields ([de3cee8](https://github.com/softwaregroup-bg/ut-function/commit/de3cee89b0a7e99a1aa42ea17b49cafd52b44744))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-09-23)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.cert ([#29](https://github.com/softwaregroup-bg/ut-function/issues/29)) ([56eda6b](https://github.com/softwaregroup-bg/ut-function/commit/56eda6b533ba02f917396a6cfcec9311825346bc))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-09-20)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* paging ([28c13f4](https://github.com/softwaregroup-bg/ut-function/commit/28c13f43c927c421ac9ad577508ea829a3358e92))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-08-29)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-08-11)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* prioritize number ([09f8f2f](https://github.com/softwaregroup-bg/ut-function/commit/09f8f2f0892de99b0fed49d0de80bc1d01b96ae2))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-08-11)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common joi - dropdown items ([#27](https://github.com/softwaregroup-bg/ut-function/issues/27)) ([e46a89b](https://github.com/softwaregroup-bg/ut-function/commit/e46a89b323255938217b27ae213000d5508bea58))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-07-28)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* allow validations ([#26](https://github.com/softwaregroup-bg/ut-function/issues/26)) ([e784102](https://github.com/softwaregroup-bg/ut-function/commit/e784102a0405ff1cb0902b5bf16d10ecc51bb9ab))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-07-25)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add orderBy [UTCORE-121] ([f53b46e](https://github.com/softwaregroup-bg/ut-function/commit/f53b46e361aa9ba9e6e445e19c5fc7104faee9c6))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-06-30)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common validations ([#25](https://github.com/softwaregroup-bg/ut-function/issues/25)) ([89453f0](https://github.com/softwaregroup-bg/ut-function/commit/89453f0ca918be545fe3322912967f4706e01802))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-06-24)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve bigint validation ([#24](https://github.com/softwaregroup-bg/ut-function/issues/24)) ([8b4bcf6](https://github.com/softwaregroup-bg/ut-function/commit/8b4bcf69d440ad6b6802e6fb8bc75d70f9415189))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-06-23)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* extract common transfer validations ([#23](https://github.com/softwaregroup-bg/ut-function/issues/23)) ([0e48baf](https://github.com/softwaregroup-bg/ut-function/commit/0e48baf0d39a3a7e9e2126c3abf80cd3c2225b3c))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-06-07)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* common-joi package UTCORE-121 ([517d8d3](https://github.com/softwaregroup-bg/ut-function/commit/517d8d3e8dbeeb526fcd41b409ec5605367a3c62))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-05-11)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* rounded sum ([ba07280](https://github.com/softwaregroup-bg/ut-function/commit/ba07280ed9c664838a3bd2252d3acd20e5f4a751))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-04-23)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* pass imports parameter ([a3342fb](https://github.com/softwaregroup-bg/ut-function/commit/a3342fbc34eff7ec41b8016507afae4c6f1f4c34))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-03-29)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2021-03-04)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* sanitize port id ([57bdfef](https://github.com/softwaregroup-bg/ut-function/commit/57bdfef232fb76cadc7ac3604cd758e44ee55c22))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2020-12-17)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.pad ([#19](https://github.com/softwaregroup-bg/ut-function/issues/19)) ([7ac3579](https://github.com/softwaregroup-bg/ut-function/commit/7ac3579a47e804492f9d5ace1f4cc01cdfe6e3d1))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2020-12-17)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.bits ([#20](https://github.com/softwaregroup-bg/ut-function/issues/20)) ([620b4a2](https://github.com/softwaregroup-bg/ut-function/commit/620b4a23099a5039206a65a0b31863419cfcd1a5))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2020-11-15)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* CVE-2020-8116 ([7671394](https://github.com/softwaregroup-bg/ut-function/commit/767139495f4711a0c2671e186541bbc23d3ec79f))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* handle undefined ([b55605f](https://github.com/softwaregroup-bg/ut-function/commit/b55605f3c0c0c148fea81491162dea1d81911675))
* improve capture ([bf98fa5](https://github.com/softwaregroup-bg/ut-function/commit/bf98fa5272581d81cea0be2a96c914dce6e3f20b))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2020-07-27)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.timing.spare ([44a07dd](https://github.com/softwaregroup-bg/ut-function/commit/44a07dd002e727c0ef473bb7a000a2148acef069))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2020-07-26)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.timing ([d70a275](https://github.com/softwaregroup-bg/ut-function/commit/d70a275159209d612ef7f1b9424bc8abf4069a24))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2020-07-24)


### Bug Fixes

* allow string namespace ([0ca74ba](https://github.com/softwaregroup-bg/ut-function/commit/0ca74bab57a86e4c13811a0f3191011a66b357d9))
* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* auto namespace ([#17](https://github.com/softwaregroup-bg/ut-function/issues/17)) ([c25810a](https://github.com/softwaregroup-bg/ut-function/commit/c25810a656bd2e4b13dde275efbd5da3b338505b))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2020-07-06)


### Bug Fixes

* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))
* support repeating elements ([9f89935](https://github.com/softwaregroup-bg/ut-function/commit/9f899357416474167f693785d3461b646efeb089))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2020-02-28)


### Bug Fixes

* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* avoid extra padding ([f8c4f34](https://github.com/softwaregroup-bg/ut-function/commit/f8c4f3482fa47f04de78839c3eef28fd5be56663))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2020-02-25)


### Bug Fixes

* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* cbc decrypt bad value handling ([4be5b91](https://github.com/softwaregroup-bg/ut-function/commit/4be5b91ebe06a068efd956bb8d894adde9c76bb1))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2020-01-20)


### Bug Fixes

* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e2))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b944))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/9214235))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eef))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e517335))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13d))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a72986))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838e))



#  (2020-01-17)


### Bug Fixes

* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2020-01-15)


### Bug Fixes

* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2020-01-15)


### Bug Fixes

* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2020-01-15)


### Bug Fixes

* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e295aa443ad6369b03a30fe4bd803032ff4))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e890c122642e6436330c767f747f3be22c))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346bfef073fa2e2e157a359deb4302aefcda))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b94438790570768ef406ead83760ae4db0451))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4cb4d50906736122daba1d89481b307733))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2020-01-15)


### Bug Fixes

* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e2))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b944))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/9214235))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eef))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e517335))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13d))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a72986))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838e))



#  (2020-01-15)


### Bug Fixes

* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e2))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f))
* handle \ and special chars in template ([34d8a9e](https://github.com/softwaregroup-bg/ut-function/commit/34d8a9e))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b944))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/9214235))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eef))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e517335))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13d))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a72986))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838e))



#  (2020-01-14)


### Bug Fixes

* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e2))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3))
* add new module - ut-function.cbc ([fc2d346](https://github.com/softwaregroup-bg/ut-function/commit/fc2d346))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b944))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/9214235))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eef))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e517335))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13d))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a72986))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838e))



#  (2020-01-14)


### Bug Fixes

* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e2))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b944))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/9214235))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eef))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b))
* recursive templating over objects ([#11](https://github.com/softwaregroup-bg/ut-function/issues/11)) ([483b7e4](https://github.com/softwaregroup-bg/ut-function/commit/483b7e4))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e517335))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13d))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a72986))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838e))



#  (2019-12-17)


### Bug Fixes

* always cast parameters to strings before escaping ([#10](https://github.com/softwaregroup-bg/ut-function/issues/10)) ([cb8f6e2](https://github.com/softwaregroup-bg/ut-function/commit/cb8f6e2))
* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b944))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/9214235))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eef))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e517335))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13d))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a72986))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838e))



#  (2019-12-17)


### Bug Fixes

* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3))
* add ut-function.dispatch ([a06b944](https://github.com/softwaregroup-bg/ut-function/commit/a06b944))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/9214235))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eef))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e517335))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13d))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a72986))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838e))



#  (2019-12-17)


### Bug Fixes

* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* unit tests launcher, templates escaping ([#9](https://github.com/softwaregroup-bg/ut-function/issues/9)) ([6a72986](https://github.com/softwaregroup-bg/ut-function/commit/6a729867794a5d9c501c450205afd70bd28ad65e))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2019-12-12)


### Bug Fixes

* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))
* ut-function.xml2json ([a02838e](https://github.com/softwaregroup-bg/ut-function/commit/a02838ec659990a7afb84246c3ea943eb16f6555))



#  (2019-11-19)


### Bug Fixes

* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* new packege ut-function.interpolate ([#8](https://github.com/softwaregroup-bg/ut-function/issues/8)) ([f7bec27](https://github.com/softwaregroup-bg/ut-function/commit/f7bec27a469fa22b6ed6fc9e3c0229672a1d518b))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))



#  (2019-11-06)


### Bug Fixes

* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* possibility to provide function as a merge handler ([a8cf31b](https://github.com/softwaregroup-bg/ut-function/commit/a8cf31b9424afbf5de03eb25685c7931c4c97afe))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))



#  (2019-11-05)


### Bug Fixes

* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* new package ut-function.equals ([#7](https://github.com/softwaregroup-bg/ut-function/issues/7)) ([0d55ffe](https://github.com/softwaregroup-bg/ut-function/commit/0d55ffe3d9fae9a5cdc2140100e6d771b42a7231))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))



#  (2019-10-21)


### Bug Fixes

* currency path ([15d2833](https://github.com/softwaregroup-bg/ut-function/commit/15d2833688dd08a001e36aadb411434141d8984d))
* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))



#  (2019-10-11)


### Bug Fixes

* forgotten ([293de2f](https://github.com/softwaregroup-bg/ut-function/commit/293de2f149cd5086bb1781de9ddbef524ccf24a3))


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))



#  (2019-10-11)


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))



#  (2019-10-11)


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3bee861122afcdc6fb5c50a192f5bb1125))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/92142352e69cefe02f1a0e9cca69d794f662cf0d))
* curency ([3480eef](https://github.com/softwaregroup-bg/ut-function/commit/3480eefc72a3df7f551a83ccb10b031ab9cf1e50))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e51733518beffe579bbd1151bfe56f4e52812c8b))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13dc7d48b0396047d2935540b4618060b36f))



#  (2019-09-13)


### Features

* add flatten ([05754d3](https://github.com/softwaregroup-bg/ut-function/commit/05754d3))
* additional packages - capture-hapi, capture-request, timezone ([#3](https://github.com/softwaregroup-bg/ut-function/issues/3)) ([9214235](https://github.com/softwaregroup-bg/ut-function/commit/9214235))
* return renderer function ([e517335](https://github.com/softwaregroup-bg/ut-function/commit/e517335))
* simplify package names ([684a13d](https://github.com/softwaregroup-bg/ut-function/commit/684a13d))




const path = require('path');
const fuzzy = require('fuzzy');
const childProcess = require('child_process');
const tap = require.resolve('tap/bin/run');
const tests = require('glob').sync('packages/*/*.test.js');
const inquirer = require('inquirer');
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

inquirer
    .prompt({
        type: 'autocomplete',
        name: 'test',
        message: 'select test to run (type for fuzzy search)',
        pageSize: 20,
        source: (answers, input = '') => Promise.resolve(
            fuzzy.filter(input, tests).map(s => ({name: s.string, value: path.resolve(s.original)}))
        )
    })
    .then(({test}) => childProcess.spawnSync('node', [ tap, test ], {stdio: 'inherit', shell: true}))
    .catch(console.error);// eslint-disable-line no-console

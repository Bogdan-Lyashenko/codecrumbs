#!/usr/bin/env node

const path = require('path');
const program = require('commander');
const colors = require('colors');
const _ = require('lodash');

const showUpdatesInfo = require('./updatesInfo');
const server = require('../src/server');

showUpdatesInfo();

program
  .option('-e, --entry [entryPoint]', 'Specify path to entry point file. E.g. `src/app.js`')
  .option('-d, --dir [projectDir]', 'Specify path to project source code directory. E.g. `src`', '')
  .option(
    '-w, --webpack [webpackConfigFile]',
    'Specify path to webpack config file. E.g. webpack.config.js'
  )
  .option(
    '-t, --tsconfig [tsConfigFile]',
    'Specify path to typeScript config file. E.g. tsConfig.json'
  )
  .option('-p, --port [defaultPort]', 'Specify port for Codecrumbs client. E.g. 3333', 2018)
  .option('-i, --ideCmd [ideCmd]', 'IDE command to open file')
  .option('-x, --excludeDir [excludeDirectories]', 'Exclude directories')
  .option('-n, --projectName [projectNameAlias]', 'Project name alias')
  .option('-C, --configFile [pathToConfigFile]', 'Path to codecrumbs.config.js')
  .option('-D, --debugModeEnabled [debugModeEnabled]', 'Enable debug mode for logs.')
  .parse(process.argv);

const pathToConfigFile = program.configFile || 'codecrumbs.config.js';
const configFileExists = server.checkIfPathExists(pathToConfigFile);
if ((!program.entry || !program.dir) && !configFileExists) {
  console.log(
    colors.magenta(
      'Please specify `entryPoint` and `projectDir` params (e.g. `codecrumbs -e src/app.js -d src`). Or use `-C codecrumbs.config.js` instead.'
    )
  );
  process.exit();
}

const configFromFile = configFileExists ? require(path.resolve(pathToConfigFile)) : {};

const configFromCLI = {
  projectNameAlias: program.projectName,
  entryPoint: program.entry,
  projectDir: program.dir,
  webpackConfigPath: program.webpack,
  tsConfigPath: program.tsconfig,
  clientPort: program.port,
  excludeDir: program.excludeDir,
  ideCmd: program.ideCmd,
  debugModeEnabled: program.debugModeEnabled
};

server.setup(_.merge(configFromCLI, configFromFile), { isDev: false });

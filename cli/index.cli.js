#!/usr/bin/env node

const program = require('commander');
const colors = require('colors');

const server = require('../src/server');

program
  .option('-e, --entry [entryFile]', 'Specify path to entry point file. E.g. `src/app.js`')
  .option(
    '-d, --dir [projectDir]',
    'Specify path to project source code directory. E.g. `src`',
    ''
  )
  .option(
    '-w, --webpack [webpackConfigFile]',
    'Specify path to webpack config file. E.g. webpack.config.js'
  )
  .option(
    '-t, --tsconfig [tsConfigFile]',
    'Specify path to typeScript config file. E.g. tsConfig.json'
  )
  .option('-p, --port [defaultPort]', 'Specify port for Codecrumbs client. E.g. 3333', 2018)
  .option('-x, --excludeDir [excludeDirectories]', 'Exclude directories')
  .option('-n, --projectName [projectNameAlias]', 'Project name alias')
  .parse(process.argv);

if (!program.entry || !program.dir) {
  console.log(
    colors.magenta(
      'Please specify `entry` and `dir` params. E.g. `codecrumbs -e src/app.js -d src`'
    )
  );
  process.exit();
}

server.setup(
  {
    projectNameAlias: program.projectName,
    entryPoint: program.entry,
    projectDir: program.dir,
    webpackConfigPath: program.webpack,
    tsConfigPath: program.tsconfig,
    clientPort: program.port,
    excludeDir: program.excludeDir
  },
  false
);

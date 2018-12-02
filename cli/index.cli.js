#!/usr/bin/env node

const program = require('commander');
const colors = require('colors');

const httpServer = require('http-server');
const apiServer = require('../src/server');

program
  .option('-e, --entry [entryFile]', 'Specify path to entry point file. E.g. `./src/app.js`')
  .option('-d, --dir [projectDir]', 'Specify path to project source code directory. E.g. `./src`')
  .option(
    '-w, --webpack [webpackConfigFile]',
    'Specify path to webpack config file. E.g. ./webpack.config.js'
  )
  .option('-p, --port [defaultPort]', 'Specify port for Codecrumbs client. E.g. 3333', 2018)
  .parse(process.argv);

if (!program.entry && !program.dir) {
  console.log(
    colors.magenta(
      'Please specify `entry` and `dir` params. E.g. `codecrumbs -e src/app.js -d src`'
    )
  );
  process.exit();
}

apiServer.run({
  entryFile: program.entry,
  projectDir: program.dir,
  webpackConfigFile: program.webpack
});

httpServer.createServer({ root: './src/public/dist' }).listen(program.port, '127.0.0.1', () => {
  console.log(`Go to "Codecrumbs" client http://localhost:${program.port} `);
});

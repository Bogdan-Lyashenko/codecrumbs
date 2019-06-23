const fs = require('fs');
const { version } = require('../package.json');

const metaInfo = `export default { version: '${version}' }`;

const writeMetaInfo = path =>
  fs.writeFile(path, metaInfo, err => {
    if (err) console.log(err);
  });

writeMetaInfo('src/public/js/meta.js');

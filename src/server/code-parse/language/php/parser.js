const Engine = require('php-parser');

const parser = new Engine({
  parser: {
    extractDoc: true,
    php7: true
  },
  ast: {
    withPositions: true
  }
});
module.exports = parser

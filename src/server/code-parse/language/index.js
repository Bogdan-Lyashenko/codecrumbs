// check extensions
// https://github.com/blakeembrey/language-map/blob/master/languages.json
// copy(`/\.(${extensions.map(i=>i.slice(1)).join('|')})$/`)
module.exports = {
  detectLanguage: entryPoint => {
    const list = [
      {
        language: 'javascript',
        extensions: /\.(js|jsx|_js|bones|es|es6|frag|gs|jake|jsb|jscad|jsfl|jsm|jss|mjs|njs|pac|sjs|ssjs|xsjs|xsjslib)$/
      },
      {
        language: 'python',
        extensions: /\.(py|bzl|cgi|fcgi|gyp|gypi|lmi|py3|pyde|pyi|pyp|pyt|pyw|rpy|spec|tac|wsgi|xpy)$/
      }
    ];

    const detection = list.find(item => item.extensions.test(entryPoint));
    return detection ? detection : { language: 'default', extensions: /(.*?)/ };
  },
  getLanguageParsers: (language = 'default') => {
    const map = {
      javascript: {
        codecrumbsParser: require('./javascript/codecrumbs'),
        dependenciesParser: require('./javascript/dependencies')
      },
      python: {
        codecrumbsParser: require('./python/codecrumbs'),
        dependenciesParser: require('./python/dependencies')
      },
      default: {
        codecrumbsParser: require('./default/codecrumbs'),
        dependenciesParser: require('./default/dependencies')
      }
    };

    return map[language] || map.default;
  }
};

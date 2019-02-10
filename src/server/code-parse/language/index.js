// check extensions
// https://github.com/blakeembrey/language-map/blob/master/languages.json
// copy(`/\.(${extensions.map(i=>i.slice(1)).join('|')})$/`)
module.exports = {
  detectLanguage: (entryPoint, astParserFallback) => {
    const list = [
      {
        language: 'cpp',
        extensions: /.(cpp|c\+\+|cc|cp|cxx|h|h\+\+|hh|hpp|hxx|inc|inl|ino|ipp|re|tcc|tpp)$/
      },
      {
        language: 'java',
        extensions: /.(java|jsp)$/
      },
      {
        language: 'javascript',
        extensions: /\.(js|jsx|_js|bones|es|es6|frag|gs|jake|jsb|jscad|jsfl|jsm|jss|mjs|njs|pac|sjs|ssjs|xsjs|xsjslib)$/
      },
      {
        language: 'php',
        extensions: /.(php|aw|ctp|fcgi|inc|php3|php4|php5|phps|phpt)$/
      },
      {
        language: 'python',
        extensions: /\.(py|bzl|cgi|fcgi|gyp|gypi|lmi|py3|pyde|pyi|pyp|pyt|pyw|rpy|spec|tac|wsgi|xpy)$/
      },
      {
        language: 'typescript',
        extensions: /.(ts|tsx)$/
      }
    ];

    const detection = list.find(item => item.extensions.test(entryPoint));
    // only case for JavaScript for now, because AST parser is used and can fail
    if (detection && astParserFallback) {
      return {
        ...detection,
        language: 'default'
      };
    }

    return detection ? detection : { language: 'default', extensions: /(.*?)/ };
  },
  getLanguageParsers: (language = 'default') => {
    const map = {
      cpp: {
        codecrumbsParser: require('./cpp/codecrumbs'),
        dependenciesParser: require('./cpp/dependencies')
      },
      java: {
        codecrumbsParser: require('./java/codecrumbs'),
        dependenciesParser: require('./java/dependencies')
      },
      javascript: {
        codecrumbsParser: require('./javascript/codecrumbs'),
        dependenciesParser: require('./javascript/dependencies')
      },
      php: {
        codecrumbsParser: require('./php/codecrumbs'),
        dependenciesParser: require('./php/dependencies')
      },
      python: {
        codecrumbsParser: require('./python/codecrumbs'),
        dependenciesParser: require('./python/dependencies')
      },
      typescript: {
        codecrumbsParser: require('./typescript/codecrumbs'),
        dependenciesParser: require('./typescript/dependencies')
      },
      default: {
        codecrumbsParser: require('./default/codecrumbs'),
        dependenciesParser: require('./default/dependencies')
      }
    };

    return map[language] || map.default;
  }
};

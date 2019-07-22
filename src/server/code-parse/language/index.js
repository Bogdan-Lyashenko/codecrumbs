// check extensions
// https://github.com/blakeembrey/language-map/blob/master/languages.json
// copy(`/\.(${extensions.map(i=>i.slice(1)).join('|')})$/`)

const LANGUAGES = [
  'cpp',
  'csharp',
  'fortran',
  'golang',
  'haskell',
  'java',
  'javascript',
  'kotlin',
  'lua',
  'php',
  'python',
  'ruby',
  'typescript'
];

const getExtensions = parserName => require(`./${parserName}/extensions`);

const LANGUAGE_LIST = LANGUAGES.map(language => {
  return {
    language,
    extensions: getExtensions(language)
  };
});

const DEFAULT_PARSER = {
  language: 'default',
  extensions: getExtensions('default')
};

module.exports = {
  detectLanguage: entryPoint => {
    const detection = LANGUAGE_LIST.find(language => {
      return language.extensions.test(entryPoint);
    });

    return detection ? detection : DEFAULT_PARSER;
  },

  getLanguageParsers: (language = 'default') => {
    return (
      LANGUAGES.reduce((target, parser) => {
        return target.set(parser, getPropertiesByParser(parser));
      }, new Map()).get(language) || getPropertiesByParser('default')
    );
  }
};

const getPropertiesByParser = parser => {
  if (typeof parser === 'string') {
    return {
      codecrumbsParser: require(`./${parser}/codecrumbs`),
      dependenciesParser: require(`./${parser}/dependencies`)
    };
  } else {
    throw 'Invalid parser name';
  }
};

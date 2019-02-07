module.exports = {
  getLanguageParsers: (language = 'default') => {
    const map = {
      javascript: {
        codecrumbsParser: require('./javascript/codecrumbs'),
        dependenciesParser: require('./javascript/dependencies')
      },
      default: {
        codecrumbsParser: require('./default/codecrumbs'),
        dependenciesParser: require('./default/dependencies')
      }
    };

    return map[language] || map.default;
  }
};

const colors = require('colors');
const exec = require('child_process').exec;

module.exports = () => {
  try {
    exec('npm outdated codecrumbs').stdout.on('data', function(data) {
      const list = data
        .split('  ')
        .filter(v => !!v)
        .map(v => v.trim());

      const latestVersion = list[list.length - 2];
      console.log(
        colors.cyan.underline(
          `There is new version of codecrumbs (${latestVersion}) available! Please update to have all latest features and improvements!`
        )
      );
    });
  } catch (e) {}
};

const directoryTree = require('directory-tree');
const fs = require('fs');

const subscribeOnChange = (projectDir, fn) => {
    const filesList = [];
    const filesTree = directoryTree(
        projectDir,
        { extensions: /\.jsx?$/ },
        (item, PATH) => {
            filesList.push(item);
        }
    );

    Promise.all(
        filesList.map(
            item =>
                new Promise((
                    resolve //TODO: move to utils fs read + promise
                ) =>
                    fs.readFile(item.path, 'utf8', function(err, data) {
                        item.fileCode = data;
                        item.codecrumbs = false; //TODO: parse code, find crumb comment mark to true
                        resolve();
                    })
                )
        )
    ).then(() => fn(filesTree));

    //1) read file by file and mark files from tree which are without //crumb(s), so they can be greyed out on ui
    //2) add 'display path' (substr example-project which is repeated) and other info for resulting tree - based on passed params to crumbs
};

module.exports = {
    subscribeOnChange
};

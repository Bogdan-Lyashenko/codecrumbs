const directoryTree = require('directory-tree');
const codecrumbs = require('./codecrumbs');
const fs = require('fs');

let filesTreeCached = null;

const subscribeOnChange = (projectDir, fn) => {
    const filesList = [];

    const filesTree = directoryTree(
        projectDir,
        { extensions: /\.jsx?$/ },
        (item, PATH) => {
            filesList.push(item);
        }
    );

    if (filesTreeCached) {
        //keep files content
    }

    Promise.all(
        filesList.map(
            item =>
                new Promise((
                    resolve //TODO: move to utils fs read + promise
                ) =>
                    fs.readFile(item.path, 'utf8', function(err, code) {
                        item.fileCode = code;
                        item.codecrumbs = codecrumbs.getCrumbs(code); //TODO: parse code, find crumb comment mark to true
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

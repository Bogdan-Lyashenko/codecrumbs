const directoryTree = require('directory-tree');
const codecrumbs = require('./codecrumbs/codecrumbs');
const file = require('./utils/file');
const treeTraversal = require('../shared/utils/tree').traversal;
const DIR_NODE_TYPE = require('../shared/constants').DIR_NODE_TYPE;
const madge = require('madge');
const chokidar = require('chokidar');
const debounce = require('lodash.debounce');

const getDirFiles = projectDir => {
    const filesList = [];

    const filesTree = directoryTree(
        projectDir,
        { extensions: /\.jsx?$/ },
        (item, PATH) => {
            filesList.push(item);
        }
    );

    treeTraversal(filesTree, node => {
        if (node.type === DIR_NODE_TYPE && node.children) {
            node.children = node.children.sort((a, b) => {
                if (a.type !== DIR_NODE_TYPE && b.type === DIR_NODE_TYPE) {
                    return 1;
                }

                if (a.type === DIR_NODE_TYPE && b.type !== DIR_NODE_TYPE) {
                    return -1;
                }

                return 0;
            });
        }
    });

    return { list: filesList, tree: filesTree };
};

const getDependenciesList = (projectDir, entryPoint) => {
    return madge(projectDir + entryPoint)
        .then(res => res.obj())
        .then(obj => {
            return Object.entries(obj).map(([key, value]) => ({
                moduleName: `${projectDir}/${key}`,
                importedModuleNames: value.map(v => `${projectDir}/${v}`)
            }));
        });
};

const grabProjectSourceState = (projectDir, entryPoint) => {
    const dirFiles = getDirFiles(projectDir);

    return Promise.all([
        getDependenciesList(projectDir, entryPoint),
        ...dirFiles.list.map(item =>
            file.read(item.path, 'utf8').then(code => {
                const codecrumbsList = codecrumbs.getCrumbs(code);

                if (codecrumbsList.length) {
                    item.children = codecrumbsList;
                    item.hasCodecrumbs = true;
                    item.fileCode = code;
                }
            })
        )
    ]).then(([dependenciesList]) => ({
        filesTree: dirFiles.tree,
        filesList: dirFiles.list,
        dependenciesList
    }));
};

const createWatcher = (dir, fn) => {
    const DELAY = 500;

    const watcher = chokidar.watch(dir);
    watcher.on('all', debounce(fn, DELAY));

    return watcher;
};

const subscribeOnChange = (projectDir, entryPoint, fn) => {
    //use watcher.close(); to stop watching
    return createWatcher(projectDir, () => {
        console.log('Update project source state...');
        //TODO: add more specific handling, to re-draw only changed files
        grabProjectSourceState(projectDir, entryPoint).then(fn);
    });
};

module.exports = {
    subscribeOnChange
};

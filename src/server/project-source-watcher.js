const directoryTree = require('directory-tree');
const codecrumbs = require('./codecrumbs/codecrumbs');
const file = require('./utils/file');
const madge = require('madge');

const getDirFiles = projectDir => {
    const filesList = [];

    const filesTree = directoryTree(
        projectDir,
        { extensions: /\.jsx?$/ },
        (item, PATH) => {
            filesList.push(item);
        }
    );

    return { list: filesList, tree: filesTree };
};

const getDependenciesList = (projectDir, entryPoint) => {
    return madge(projectDir + entryPoint).then(res => res.obj());
};

const getProjectSourceStats = (projectDir, entryPoint) => {
    const dirFiles = getDirFiles(projectDir);

    return Promise.all([
        getDependenciesList(projectDir, entryPoint),
        ...dirFiles.list.map(item =>
            file.read(item.path, 'utf8').then(code => {
                const codecrumbsList = codecrumbs.getCrumbs(code);

                item.codecrumbs = codecrumbsList;
                item.hasCodecrumbs = !!codecrumbsList.length;
            })
        )
    ]).then(([dependenciesList]) => ({
        filesTree: dirFiles.tree,
        filesList: dirFiles.list,
        dependenciesList
    }));
};

const subscribeOnChange = (projectDir, entryPoint, fn) => {
    //first response on registration
    getProjectSourceStats(projectDir, entryPoint).then(fn);

    //watch changes here and trigger fn()
};

module.exports = {
    subscribeOnChange
};

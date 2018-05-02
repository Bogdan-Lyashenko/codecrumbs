const babylon = require('babylon');
const babelTraverse = require('babel-traverse');

const getCrumbs = fileCode => {
    const ast = babylon.parse(fileCode, { sourceType: 'module' });

    babelTraverse.default(ast, {
        enter(path) {
            if (path.node && path.node.leadingComments) {
                console.log(path.node.leadingComments);
            }
        }
    });

    return [];
};

module.exports = {
    getCrumbs
};

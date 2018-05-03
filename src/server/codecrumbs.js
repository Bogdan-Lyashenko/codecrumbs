const babylon = require('babylon');
const babelTraverse = require('babel-traverse');

const CRUMB = 'codecrumb',
    CRUMB_SHORT_HANDLER = 'cc';

const parseCodecrumbComment = (node = {}) => {
    const comment = node.value || '';
    return { original: comment };
};

const isCodecrumb = (node = {}) => {
    const comment = node.value || '';
    return comment.startsWith(CRUMB) || comment.startsWith(CRUMB_SHORT_HANDLER);
};

const getCrumbs = fileCode => {
    const ast = babylon.parse(fileCode, { sourceType: 'module' });
    const crumbsList = [];

    babelTraverse.default(ast, {
        enter(path) {
            const node = path.node;
            if (!node || !node.leadingComments) return;

            const leadingComment =
                node.leadingComments[node.leadingComments.length - 1];

            if (isCodecrumb(leadingComment)) {
                crumbsList.push({
                    crumbedLineNode: node,
                    crumbNode: leadingComment,
                    crumbOptions: parseCodecrumbComment(leadingComment)
                });
            }
        }
    });

    return crumbsList;
};

module.exports = {
    getCrumbs
};

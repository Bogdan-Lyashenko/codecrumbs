const babylon = require('babylon');
const babelTraverse = require('babel-traverse');

const CRUMB = 'codecrumb',
    CRUMB_SHORT_HANDLER = 'cc';

const parseCodecrumbComment = (node = {}) => {
    const comment = node.value || '';
    const afterAlias = comment.split(':')[1];
    return { original: comment, name: afterAlias };
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
            if (!node || !(node.leadingComments || node.trailingComments))
                return;

            const leadingComment = node.leadingComments
                ? node.leadingComments[node.leadingComments.length - 1]
                : null;

            const trailingComment = node.trailingComments
                ? node.trailingComments[0]
                : null;

            [leadingComment, trailingComment].forEach(comment => {
                if (comment && isCodecrumb(comment)) {
                    const crumbOptions = parseCodecrumbComment(comment);

                    crumbsList.push({
                        name: crumbOptions.name || '', //TODO: check, can be bug with layout calc
                        crumbedLineNode: node,
                        crumbNode: comment,
                        crumbOptions
                    });
                }
            });
        }
    });

    return crumbsList;
};

module.exports = {
    getCrumbs
};

const babylon = require('babylon');
const babelTraverse = require('babel-traverse');

const CRUMB = 'codecrumb',
    CRUMB_SHORT_HANDLER = 'cc';

const parseCodecrumbComment = (node = {}) => {
    const comment = node.value || '';

    const cc = { original: comment };
    const afterAlias = comment.split(':')[1];
    if (afterAlias) {
        const simplified = afterAlias.split(';');
        cc.name = simplified[0];
        cc.details = simplified[1];
    }

    return cc;
};

const isCodecrumb = (node = {}) => {
    const comment = node.value || '';
    return comment.startsWith(CRUMB) || comment.startsWith(CRUMB_SHORT_HANDLER);
};

const getCrumbs = fileCode => {
    let ast = {};
    const crumbsList = [];

    try {
        ast = babylon.parse(fileCode, { sourceType: 'module' });
    } catch (e) {
        console.log(e);
        return crumbsList;
    }

    babelTraverse.default(ast, {
        enter(path) {
            const node = path.node;
            if (!node || !(node.leadingComments || node.trailingComments))
                return;

            const leadingComment = node.leadingComments
                ? node.leadingComments[node.leadingComments.length - 1]
                : null;

            let trailingComment = node.trailingComments
                ? node.trailingComments[0]
                : null;

            if (
                trailingComment &&
                trailingComment.loc.start.line !== node.loc.start.line
            ) {
                trailingComment = null;
            }

            [leadingComment, trailingComment].forEach(comment => {
                if (comment && isCodecrumb(comment)) {
                    const params = parseCodecrumbComment(comment);

                    crumbsList.push({
                        name: params.name || '', //TODO: check, can be bug with layout calc
                        crumbedLineNode: node,
                        crumbNode: comment,
                        params
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

import * as babylon from 'babylon';
import babelTraverse from 'babel-traverse';

export default () => {
    const ast = babylon.parse(`
        //codecrumb
        var a = 12;
    `);

    babelTraverse(ast, {
        enter(path) {
            if (path.node && path.node.leadingComments) {
                //console.log(path.node.leadingComments);
            }
        }
    });
};

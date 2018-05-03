import * as babylon from 'babylon';
import babelTraverse from 'babel-traverse';

export default () => {
    const ast = babylon.parse(`
        //codecrumb
        //c
        /*aa
        */
        var a = 12;
    `);

    babelTraverse(ast, {
        enter(path) {
            if (path.node && path.node.leadingComments) {
                //debugger
                //console.log(path.node.leadingComments);
            }
        }
    });
};

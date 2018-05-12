import * as babylon from 'babylon';
import babelTraverse from 'babel-traverse';
import * as d3flextree from 'd3-flextree';
import SVG from 'svg.js';

const astTest = () => {
    const ast = babylon.parse(`
        //codecrumb
        var a = 12;
        
        var b = 8;//cc//aa
    `);

    babelTraverse(ast, {
        enter(path) {
            if (path.node && path.node.leadingComments || path.node.trailingComments) {
                //debugger
                console.log(path.node.leadingComments, path.node.trailingComments);
            }
        }
    });
};

const d3test = treeData => {
    const draw = SVG('drawing').size(500, 500);

    const layout = d3flextree.flextree({
        children: data => {
            return data.children;
        },
        nodeSize: node => [node.data.name.length, 40],
        spacing: (nodeA, nodeB) => 150
    });
    const tree = layout.hierarchy(treeData);
    const lt = layout(tree);

    lt.each(node => {
        draw
            .circle(10)
            .attr({ fill: '#f06' })
            .move(node.x + 200, node.y + 200);

        draw.text(node.data.name).move(node.x + 200, node.y + 200);

        if (node.parent) {
            let p = node.parent;
            draw
                .line(p.x + 200, p.y + 200, node.x + 200, node.y + 200)
                .stroke({ width: 1 });
        }
    });
};

export default p => {
    //astTest();
    //d3test(p);
};

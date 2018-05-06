import SVG from 'svg.js';
import * as d3flextree from 'd3-flextree';
import React from 'react';

class SourceTree extends React.Component {
    constructor(props) {
        super(props);

        this.svgDraw = null;
        this.svgElementsSet = null; //
    }

    componentDidMount() {
        this.svgDraw = SVG(this.svgMountNode).size(500, 500); //TODO: props for size
        this.drawTree(this.props.treeData, this.svgDraw);
    }

    componentDidUpdate() {
        this.drawTree(this.props.treeData, this.svgDraw);
    }

    //TODO: this can be moved to tree utils
    drawTree(treeData, draw) {
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
            if (node.parent) {
                let p = node.parent;
                draw
                    .line(p.x + 200, p.y + 200, node.x + 200, node.y + 200)
                    .stroke({ width: 1 });
            }
        });

        lt.each(node => {
            draw
                .circle(10)
                .attr({ fill: '#f06' }) //TODO: styles
                .move(node.x + 200 - 5, node.y + 200 - 5);

            let t = draw
                .text(node.data.name || '')
                .move(node.x + 200, node.y + 200); //TODO: shift to center
            //setTimeout(()=>t.remove(), 2000); //TODO: remove
        });
    }

    render() {
        return <div ref={ref => (this.svgMountNode = ref)} />;
    }
}

export default SourceTree;

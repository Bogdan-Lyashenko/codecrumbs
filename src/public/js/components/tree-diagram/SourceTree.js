import SVG from 'svg.js';
import React from 'react';
import { getTreeLayout } from './treeLayout';

const BOX_SIZE = 800;
const DOT = {
    x: BOX_SIZE / 4,
    y: BOX_SIZE / 4
};

class SourceTree extends React.Component {
    constructor(props) {
        super(props);

        this.svgDraw = null;
        this.svgElementsSet = null; //
    }

    componentDidMount() {
        this.svgDraw = SVG(this.svgMountNode).size(BOX_SIZE, BOX_SIZE); //TODO: props for size
        this.drawTree(this.props.treeData, this.svgDraw);
    }

    componentDidUpdate() {
        this.svgDraw.clear();
        this.drawTree(this.props.treeData, this.svgDraw);
    }

    drawTree(treeData, draw) {
        const layoutNodes = getTreeLayout(treeData);

        layoutNodes.each(node => {
            draw
                .circle(6)
                .fill('#ccc')
                .move(node.y + DOT.x - 3, node.x + DOT.y - 3);

            if (node.parent) {
                let p = node.parent;
                draw
                    .line(p.y + DOT.x, p.x + DOT.y, node.y + DOT.x, p.x + DOT.y)
                    .stroke({ width: 1, color: '#ccc' });

                draw
                    .line(
                        node.y + DOT.x,
                        p.x + DOT.y,
                        node.y + DOT.x,
                        node.x + DOT.y
                    )
                    .stroke({ width: 1, color: '#ccc' });
            }

            let text = draw.text(node.data.name || '');

            if (!node.children) {
                text.move(node.y + DOT.x + 18, node.x - 8 + DOT.y);

                draw
                    .image('resources/js-file-format-symbol.svg', 15, 15)
                    .move(node.y + DOT.x + 3, node.x - 6 + DOT.y);
            } else {
                text.move(node.y + DOT.x + 19, node.x - 17 + DOT.y);

                draw
                    .image('resources/folder.svg', 15, 15)
                    .move(node.y + DOT.x + 3, node.x - 16 + DOT.y);
            }

            text.font('family', 'Menlo');
        });
    }

    render() {
        return <div ref={ref => (this.svgMountNode = ref)} />;
    }
}

export default SourceTree;

import * as d3FlexTree from 'd3-flextree';

const DEFAULT_CONFIG = {
    symbolWidth: 8.4,
    nodeSizeX: 20,
    nodeSizeY: 60,
    spacing: 20
};

export const getTreeLayout = (treeData, config = DEFAULT_CONFIG) => {
    const layoutStructure = d3FlexTree.flextree({
        children: data => data.children,
        nodeSize: node => [
            config.nodeSizeX,
            config.symbolWidth * node.data.name.length + config.nodeSizeY
        ],
        spacing: (nodeA, nodeB) => config.spacing
    });

    const tree = layoutStructure.hierarchy(treeData);
    return layoutStructure(tree);
};

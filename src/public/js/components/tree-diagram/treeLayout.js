import * as d3FlexTree from 'd3-flextree';

export const getTreeLayout = treeData => {
    const layoutStructure = d3FlexTree.flextree({
        children: data => data.children,
        nodeSize: node => [40, 15 * node.data.name.length],
        spacing: (nodeA, nodeB) => 30
    });

    const tree = layoutStructure.hierarchy(treeData);
    return layoutStructure(tree);
};

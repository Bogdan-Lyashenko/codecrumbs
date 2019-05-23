import * as d3FlexTree from 'd3-flextree';

import { FILE_NODE_TYPE, DIR_NODE_TYPE, FOLDER_OPEN_STATE } from 'core/constants';
import { LAYOUT_CONFIG } from 'components/treeDiagram/component/constants';

export const getTreeLayout = (
  treeData,
  {
    includeFileChildren,
    extraSpaceForDetails,
    extraSpaceForCodePreview,
    config = LAYOUT_CONFIG,
    openedFolders,
    activeItemsMap,
    activeCodeCrumbs
  }
) => {
  const activeCodecrumbsFiles =
    (activeCodeCrumbs &&
      Object.values(activeCodeCrumbs).reduce((acc, item) => {
        if (typeof acc[item.filePath] === 'undefined') {
          acc[item.filePath] = item.flowStep;
        } else if (item.flowStep < acc[item.filePath]) {
          acc[item.filePath] = item.flowStep;
        }

        return acc;
      }, {})) ||
    {};

  const layoutStructure = d3FlexTree.flextree({
    children: data => {
      if (data.type === DIR_NODE_TYPE) {
        if (openedFolders[data.path] === FOLDER_OPEN_STATE.CLOSED) {
          return [];
        }

        const children =
          openedFolders[data.path] === FOLDER_OPEN_STATE.OPEN_ACTIVE_CHILDREN_ONLY
            ? data.children.filter(child => activeItemsMap[child.path])
            : data.children;

        return activeCodeCrumbs
          ? children.map(i => i).sort(sortNodesForCc(activeCodecrumbsFiles))
          : children;
      }

      if (!includeFileChildren) {
        return [];
      }

      return !activeCodeCrumbs
        ? data.children
        : (data.children || [])
            .filter(({ params }) => !!activeCodeCrumbs[params.original])
            .sort((a, b) => stepsSorter(a.params.flowStep, b.params.flowStep));
    },
    nodeSize: node => {
      let nameLength = node.data.name.length;

      if (node.parent && node.data.type === DIR_NODE_TYPE) {
        const children = node.parent.children;
        nameLength = children.reduce((max, item) => {
          if (item.data.type === DIR_NODE_TYPE && item.data.name.length > max) {
            return item.data.name.length;
          }

          return max;
        }, 0);
      }

      const LARGE_WIDTH_CC = 5000;
      const widthSpace =
        node.data.type !== DIR_NODE_TYPE && node.data.type !== FILE_NODE_TYPE
          ? LARGE_WIDTH_CC
          : nameLength * config.symbolWidth + config.nodeSizeY;

      if (
        extraSpaceForDetails &&
        node.data.type !== DIR_NODE_TYPE &&
        node.data.type !== FILE_NODE_TYPE &&
        node.data.params &&
        node.data.params.details
      ) {
        return [calcHeightForDetails(node), widthSpace];
      }

      if (
        extraSpaceForCodePreview &&
        node.data.type !== DIR_NODE_TYPE &&
        node.data.type !== FILE_NODE_TYPE
      ) {
        return [calcHeightForCodePreview(node), widthSpace];
      }

      return [config.nodeSizeX, widthSpace];
    },
    spacing: () => config.spacing
  });

  const tree = layoutStructure.hierarchy(treeData);
  return layoutStructure(tree);
};

export const sortNodesForCc = activeCodecrumbsFiles => (aNode, bNode) => {
  const aNodeStepOrder = getNodeFlowStepOrder(activeCodecrumbsFiles, aNode);
  const bNodeStepOrder = getNodeFlowStepOrder(activeCodecrumbsFiles, bNode);

  return stepsSorter(aNodeStepOrder, bNodeStepOrder);
};

export const stepsSorter = (stepA, stepB) => (stepA > stepB ? 1 : -1);

const getNodeFlowStepOrder = (activeCodecrumbsFiles, { path }) => {
  if (activeCodecrumbsFiles[path]) {
    return activeCodecrumbsFiles[path];
  }

  const children = Object.keys(activeCodecrumbsFiles).filter(p => !!p.startsWith(path));
  return children.reduce((acc, child) => {
    if (activeCodecrumbsFiles[child] < acc) {
      return activeCodecrumbsFiles[child];
    }
    return acc;
  }, Infinity);
};

export const getFileNodesMap = layoutNodes => {
  const map = {};

  layoutNodes.each(node => {
    if (node.data && node.data.type === FILE_NODE_TYPE) {
      map[node.data.path] = node;
    }
  });

  return map;
};

export const getCodecrumbNodesMap = fileNodesMap =>
  Object.keys(fileNodesMap).reduce((map, key) => {
    const node = fileNodesMap[key];
    if (node.data && node.data.type === FILE_NODE_TYPE && node.children) {
      map[node.data.path] = node;
    }

    return map;
  }, {});

export const getFilesForCurrentCcFlow = ({
  codeCrumbedFlowsMap,
  selectedCrumbedFlowKey,
  filesMap
}) => {
  return Object.keys(codeCrumbedFlowsMap[selectedCrumbedFlowKey]).filter(filePath => {
    const steps = ((filesMap[filePath] && filesMap[filePath].children) || []).filter(
      ({ params }) => params.flow === selectedCrumbedFlowKey
    );
    return steps && steps.length;
  });
};

export const getCodeCrumbsMapForCurrentCcFlow = ({
  codeCrumbedFlowsMap,
  selectedCrumbedFlowKey,
  filesMap
}) => {
  const ccMap = {};

  Object.keys(codeCrumbedFlowsMap[selectedCrumbedFlowKey])
    .map(filePath => ({
      filePath,
      steps: ((filesMap[filePath] && filesMap[filePath].children) || []).filter(
        ({ params }) => params.flow === selectedCrumbedFlowKey
      )
    }))
    .filter(({ steps }) => steps.length)
    .forEach(({ filePath, steps }) => {
      steps.forEach(({ params }) => {
        ccMap[params.original] = {
          filePath,
          flowStep: params.flowStep
        };
      });
    });

  return ccMap;
};

//TODO: numbers based on styles, better to do something with that..
const calcHeightForDetails = ({ data }) => {
  const { details } = data.params || {};
  let nameWidth = data.name ? data.name.length * 7.5 : 100;
  if (nameWidth < 250) nameWidth = 250;

  const n = Math.ceil((details.length * 7) / nameWidth);
  return (n + 1) * 20 + 50;
};

const calcHeightForCodePreview = () => {
  const n = 5;
  return n * 15 + 40;
};

import React from 'react';
import { connect } from 'react-redux';

import { CodeCrumbName } from 'components/treeDiagram/component/Node/CodeCrumb';
import { FileName } from 'components/treeDiagram/component/Node/File';
import {
  PartEdge,
  CodeCrumbEdge,
  CodeCrumbedFlowEdge
} from 'components/treeDiagram/component/Edge/CodeCrumbEdge';
import { selectCodeCrumb } from 'components/dataBus/store/actions';

const mapStateToProps = state => {
  const { checkedState } = state.viewSwitches;
  const { fileNodesMap, filesMap, selectedCrumbedFlowKey, codeCrumbedFlowsMap } = state.dataBus;

  return {
    fileNodesMap,
    filesMap,
    selectedCrumbedFlowKey,
    codeCrumbedFlowsMap,
    sourceDiagramOn: checkedState.source,
    dependenciesDiagramOn: checkedState.dependencies,
    codeCrumbsDiagramOn: checkedState.codeCrumbs,
    codeCrumbsMinimize: checkedState.codeCrumbsMinimize,
    codeCrumbsLineNumbers: checkedState.codeCrumbsLineNumbers
  };
};

const mapDispatchToProps = {
  onCodeCrumbSelect: selectCodeCrumb
};

export const CodeCrumbedFlowEdges = connect(mapStateToProps)(props => {
  const {
    shiftToCenterPoint,
    fileNodesMap,
    selectedCrumbedFlowKey,
    codeCrumbedFlowsMap,
    codeCrumbsMinimize
  } = props;

  const currentFlow = codeCrumbedFlowsMap[selectedCrumbedFlowKey] || {};

  // TODO: this can be done on flowSelect
  let sortedFlowSteps = [];
  Object.keys(currentFlow).forEach(filePath => {
    const steps = ((fileNodesMap[filePath] && fileNodesMap[filePath].children) || [])
      .filter(({ data }) => data.params.flow === selectedCrumbedFlowKey)
      .map(({ data, x, y }) => ({
        name: data.name,
        filePath,
        step: data.params.flowStep,
        flow: selectedCrumbedFlowKey,
        x,
        y
      }));

    sortedFlowSteps = sortedFlowSteps.concat(steps);
  });

  sortedFlowSteps.sort((a, b) => a.step - b.step);

  return (
    <React.Fragment>
      {!codeCrumbsMinimize &&
        sortedFlowSteps.map((toItem, i, list) => {
          if (!i) return null;

          const fromItem = list[i - 1];
          const fromFile = fileNodesMap[fromItem.filePath];
          const toFile = fileNodesMap[toItem.filePath];

          const edgePoints = [fromItem, toItem].map(crumb => {
            const [cX, cY] = [crumb.y, crumb.x];
            return shiftToCenterPoint(cX, cY);
          });

          return (
            <CodeCrumbedFlowEdge
              key={`cc-flow-edge-${fromItem.name}-${toItem.name}`}
              singleCrumbSource={fromFile.children.length === 1}
              singleCrumbTarget={toFile.children.length === 1}
              sourcePosition={edgePoints[0]}
              targetPosition={edgePoints[1]}
              sourceName={fromItem.name}
              targetName={toItem.name}
            />
          );
        })}
    </React.Fragment>
  );
});

class CodeCrumbsTree extends React.Component {
  render() {
    const {
      shiftToCenterPoint,
      fileNodesMap,
      filesMap,
      selectedCrumbedFlowKey,
      sourceDiagramOn,
      dependenciesDiagramOn,
      codeCrumbsMinimize,
      codeCrumbsLineNumbers,
      onCodeCrumbSelect
    } = this.props;

    return (
      <React.Fragment>
        {Object.keys(fileNodesMap).map(key => {
          const node = fileNodesMap[key];

          const [nX, nY] = [node.y, node.x];
          const position = shiftToCenterPoint(nX, nY);

          if (!node.children) {
            return null;
          }

          const file = filesMap[node.data.path];
          return (
            <React.Fragment key={`code-crumb-${file.name}`}>
              {!sourceDiagramOn && !dependenciesDiagramOn ? (
                <FileName position={position} name={file.name} purple={codeCrumbsMinimize} />
              ) : null}
              {(!codeCrumbsMinimize && (
                <PartEdge sourcePosition={position} parentName={file.name} />
              )) ||
                null}

              {!codeCrumbsMinimize &&
                node.children.map((crumb, i, list) => {
                  const [cX, cY] = [crumb.y, crumb.x];
                  const crumbPosition = shiftToCenterPoint(cX, cY);
                  const singleCrumb = list.length === 1;
                  const crumbData = crumb.data;
                  const ccParams = crumbData.params;

                  return (
                    <React.Fragment key={`code-crumb-edge-${file.path}-${crumbData.name}`}>
                      {(!singleCrumb && (
                        <CodeCrumbEdge
                          sourcePosition={position}
                          targetPosition={crumbPosition}
                          parentName={file.name}
                        />
                      )) ||
                        null}
                      <CodeCrumbName
                        position={crumbPosition}
                        loc={codeCrumbsLineNumbers ? crumbData.displayLoc : ''}
                        name={crumbData.name}
                        singleCrumb={singleCrumb}
                        cover={true}
                        flow={ccParams.flow && ccParams.flow === selectedCrumbedFlowKey}
                        flowStep={ccParams.flowStep}
                        onClick={() => onCodeCrumbSelect(file, crumbData)}
                      />
                    </React.Fragment>
                  );
                })}
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeCrumbsTree);

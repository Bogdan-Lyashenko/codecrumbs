import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { getCheckedState } from 'core/controlsBus/selectors';
import { getCodeCrumbsUserChoice, getSourceLayout } from 'core/dataBus/selectors';
import { getCcPosition, isCodeCrumbSelected } from '../helpers';

import './index.scss';

const DetailsComponent = props => {
  const { name, details, position, selected } = props;

  const nameWidth = name ? name.length * 7.5 : 100;
  return (
    <div
      className={classNames('CcDetailsContainer', { CcDetailsSelected: selected })}
      style={{
        left: position.x,
        top: position.y,
        width: nameWidth + 'px'
      }}
    >
      {details}
    </div>
  );
};

const CodeComponent = props => {
  const { position, crumbNodeLines, file } = props;
  const { fileCode } = file.data;
  const previewCode = fileCode.split('\n').slice(crumbNodeLines[0]-2, crumbNodeLines[0] + 2).join('\n');

  return (
    <div
      className={'CcCodeContainer'}
      style={{
        left: position.x,
        top: position.y
      }}
    >
      <pre style={{fontSize: '9px'}}>{previewCode}</pre>
    </div>
  );
};

const ExtraInfoSet = ({
  detailsEnabled,
  codePreviewEnabled,
  shiftToCenterPoint,
  ccAlightPoint,
  selectedCcFlowEdgeNodes,
  sortedFlowSteps,
  filesLayoutMap,
  ccShiftIndexMap,
  namespace
}) => {
  if (!detailsEnabled && !codePreviewEnabled) return null;

  return (
    <React.Fragment>
      {sortedFlowSteps.map(crumb => {
        if (crumb.namespace !== namespace) {
          return null;
        }

        const [_, nY] = [crumb.y, crumb.x];
        const position = shiftToCenterPoint(
          getCcPosition(ccAlightPoint, ccShiftIndexMap[crumb.id]),
          nY + 8
        );

        if (detailsEnabled && crumb.params && crumb.params.details) {
          return (
            <DetailsComponent
              key={crumb.id}
              details={crumb.params.details}
              name={crumb.name}
              position={position}
              selected={isCodeCrumbSelected(selectedCcFlowEdgeNodes, crumb)}
            />
          );
        }

        if (codePreviewEnabled) {
          return (
            <CodeComponent
              key={crumb.id}
              position={position}
              crumbNodeLines={crumb.crumbNodeLines}
              file={filesLayoutMap[crumb.filePath]}
            />
          );
        }

        return null;
      })}
    </React.Fragment>
  );
};

const mapStateToProps = (state, props) => {
  const { codeCrumbsMinimize, codeCrumbsDetails, codeCrumbsCodePreview } = getCheckedState(state);
  const { namespace } = props;

  const namespaceProps = { namespace };
  const { selectedCcFlowEdgeNodes } = getCodeCrumbsUserChoice(state, namespaceProps);
  const { ccAlightPoint, filesLayoutMap } = getSourceLayout(state, namespaceProps);

  return {
    detailsEnabled: !codeCrumbsMinimize && codeCrumbsDetails,
    codePreviewEnabled: !codeCrumbsMinimize && codeCrumbsCodePreview,
    filesLayoutMap,
    selectedCcFlowEdgeNodes,
    ccAlightPoint
  };
};

export default connect(mapStateToProps)(ExtraInfoSet);

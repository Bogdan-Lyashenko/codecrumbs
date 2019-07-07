import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { getCheckedState } from '../../../../../../core/controlsBus/selectors';
import {
  getCodeCrumbsUserChoice,
  getSourceLayout,
  getProjectMetadata
} from '../../../../../../core/dataBus/selectors';
import { getCcPosition, isCodeCrumbSelected } from '../helpers';

import './index.less';

const Code = React.lazy(() =>
  import(/* webpackChunkName: "code" */ '../../../../../sideBar/component/Code')
);

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
  const { position, crumbNodeLines, file, language, namespace } = props;
  const { fileCode } = file.data;

  return (
    <div
      className={'CcCodeContainer'}
      style={{
        left: position.x,
        top: position.y
      }}
    >
      <Suspense fallback={null}>
        <Code
          namespace={namespace}
          language={language}
          code={fileCode}
          fontSize={10}
          lineHeight={15}
          crumbedLines={[crumbNodeLines]}
        />
      </Suspense>
    </div>
  );
};

const ExtraInfoSet = ({
  detailsEnabled,
  codePreviewEnabled,
  shiftToCenterPoint,
  ccAlightPoint,
  selectedCcFlowEdgeNodes,
  flowSteps,
  sortedFlowSteps,
  filesLayoutMap,
  ccShiftIndexMap,
  namespace,
  language
}) => {
  if (!detailsEnabled && !codePreviewEnabled) return null;

  const crumbs = sortedFlowSteps.length ? sortedFlowSteps : flowSteps;
  return (
    <React.Fragment>
      {crumbs.map(crumb => {
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
              namespace={namespace}
              language={language}
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
  const { language } = getProjectMetadata(state, namespaceProps);
  const { selectedCcFlowEdgeNodes } = getCodeCrumbsUserChoice(state, namespaceProps);
  const { ccAlightPoint, filesLayoutMap } = getSourceLayout(state, namespaceProps);

  return {
    detailsEnabled: !codeCrumbsMinimize && codeCrumbsDetails,
    codePreviewEnabled: !codeCrumbsMinimize && codeCrumbsCodePreview,
    filesLayoutMap,
    selectedCcFlowEdgeNodes,
    ccAlightPoint,
    language
  };
};

export default connect(mapStateToProps)(ExtraInfoSet);

import React from 'react';
import { createSVGRender, convertCodeToFlowTree } from 'js2flowchart';

import './index.scss';

const Styles = {
  strokeColor: '#00bcd4',
  defaultFillColor: '#e6f7ff',
  textColor: '#595959',
  arrowFillColor: '#00bcd4',
  rectangleFillColor: '#fff',
  rectangleDotFillColor: '#fff',
  functionFillColor: '#fff',
  rootCircleFillColor: '#fff',
  loopFillColor: '#fff',
  conditionFillColor: '#fff',
  destructedNodeFillColor: '#fff',
  classFillColor: '#fff',
  debuggerFillColor: '#fff',
  exportFillColor: '#e6f7ff',
  throwFillColor: '#fff',
  tryFillColor: '#fff',
  objectFillColor: '#fff',
  callFillColor: '#fff',
  debugModeFillColor: '#fff'
};

class FlowChartTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.svgRender = createSVGRender();

    this.svgRender.applyColorBasedTheme(Styles);

    this.setState({ ready: true });
  }

  shouldComponentUpdate() {
    return this.props.active;
  }

  render() {
    const { ready } = this.state;
    if (!ready) {
      return null;
    }

    let svgXml = '';

    try {
      const flowTree = convertCodeToFlowTree(this.props.fileCode || '');
      svgXml = this.svgRender.buildShapesTree(flowTree).print();
    } catch (e) {
      console.error('SVG generation failed!', e);
    }

    return (
      <div className={'FlowChartTabContainer'}>
        <div dangerouslySetInnerHTML={{ __html: svgXml }} />
      </div>
    );
  }
}

export default FlowChartTab;

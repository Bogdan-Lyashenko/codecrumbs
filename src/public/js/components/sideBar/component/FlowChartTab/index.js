import React from 'react';

import { Spin, Alert } from 'antd';

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
    import(/* webpackChunkName: "js2flowchart" */ 'js2flowchart').then(
      ({ createSVGRender, convertCodeToFlowTree }) => {
        this.svgRender = createSVGRender();
        this.svgRender.applyColorBasedTheme(Styles);
        this.convertCodeToFlowTree = convertCodeToFlowTree;

        this.setState({ ready: true });
      }
    );
  }

  shouldComponentUpdate() {
    return this.props.active;
  }

  render() {
    const { ready } = this.state;
    if (!ready) {
      return (
        <div className={'FlowChartLoading'}>
          <Spin />
        </div>
      );
    }

    let svgXml = '';

    try {
      const flowTree = this.convertCodeToFlowTree(this.props.fileCode || '');
      svgXml = this.svgRender.buildShapesTree(flowTree).print();
    } catch (e) {
      return (
        <Alert
          message={'Oppss.. AST parser failed to parse your code. That dude..'}
          type="warning"
          description="Well, you can file an issue here https://github.com/Bogdan-Lyashenko/js-code-to-svg-flowchart"
          showIcon
        />
      );
    }

    return (
      <div className={'FlowChartTabContainer'}>
        <div dangerouslySetInnerHTML={{ __html: svgXml }} />
      </div>
    );
  }
}

export default FlowChartTab;

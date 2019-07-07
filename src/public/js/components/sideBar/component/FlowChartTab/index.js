import React from 'react';

import Alert from 'antd/es/alert'
import 'antd/es/alert/style'
import Spin from 'antd/es/spin'
import 'antd/es/spin/style'

import './index.less';

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
    this.state = {
      isSupported: props.language === 'javascript'
    };
  }

  componentDidMount() {
    if (!this.state.isSupported) {
      return;
    }

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
    const { ready, isSupported } = this.state;
    if (!isSupported) {
      return (
        <Alert
          message={'FlowChart supported for JavaScript code only'}
          type="warning"
          description="You can file an issue here https://github.com/Bogdan-Lyashenko/js-code-to-svg-flowchart. Thank you ;)"
          showIcon
        />
      );
    }

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
          description="Well.. maybe a bug, you can file an issue here https://github.com/Bogdan-Lyashenko/js-code-to-svg-flowchart. Thank you ;)"
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

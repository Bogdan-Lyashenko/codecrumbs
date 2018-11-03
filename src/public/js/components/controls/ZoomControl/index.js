import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';

const ButtonGroup = Button.Group;

import { setZoom } from 'components/controls/ViewSwitches/store/actions';
import './index.scss';

const ZoomControl = ({ zoom, setZoom }) => {
  const step = 0.1;
  return (
    <div className={'ZoomControl'}>
      <ButtonGroup size={'small'}>
        <Button icon="zoom-out" disabled={zoom <= step} onClick={() => setZoom(zoom - step)} />
        <Button icon="border" disabled={zoom === 1} onClick={() => setZoom(1)} />
        <Button icon="zoom-in" onClick={() => setZoom(zoom + step)} />
      </ButtonGroup>
    </div>
  );
};

const mapStateToProps = state => {
  const { valuesState } = state.viewSwitches;

  return {
    zoom: valuesState.zoom
  };
};

const mapDispatchToProps = {
  setZoom
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ZoomControl);

import React from 'react';
import { connect } from 'react-redux';
import SideBar from './component/SideBar';
import { selectFile } from '../data-bus/store/actions';

const SideBarContainer = ({ selectedFile, selectedCodeCrumb, onClose }) => {
    if (!selectedFile) return null;

    return (
        <SideBar
            file={selectedFile}
            codeCrumb={selectedCodeCrumb}
            onClose={onClose}
        />
    );
};

const mapStateToProps = state => {
    const { selectedFile, selectedCodeCrumb } = state.dataBus;

    return {
        selectedFile,
        selectedCodeCrumb
    };
};

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch(selectFile(null))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);

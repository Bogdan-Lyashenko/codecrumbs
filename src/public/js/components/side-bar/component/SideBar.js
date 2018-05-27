import React from 'react';
import './SideBar.css';
import { Card } from 'antd';

//TODO: Add slide from right animation
export default ({ file, codeCrumb, onClose }) => {
    return (
        <div className="SideBar-container">
            <Card
                title={file.path}
                extra={
                    <a href="#" onClick={onClose}>
                        [X]
                    </a>
                }
            >
                <p>file: {file.name}</p>
                {codeCrumb && <p>crumb: {codeCrumb.name}</p>}
            </Card>
        </div>
    );
};

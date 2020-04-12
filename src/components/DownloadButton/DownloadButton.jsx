import './DownloadButton.scss';
import React from 'react';

const DownloadButton = ({cv}) => { return <a href={cv} download> download cv</a> }

export default DownloadButton;
import './Button.scss';
import React from 'react';

const Button = ({cv}) => {

    return (
          <a href={cv} download> download cv</a>
    )
}

export default Button;
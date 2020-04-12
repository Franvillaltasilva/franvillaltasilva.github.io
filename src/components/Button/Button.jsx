import './Button.scss';
import React from 'react';

const Button = ({cv}) => {

    return (
        <button>
          <a href={cv} download> download cv</a>
        </button>
    )
}

export default Button;
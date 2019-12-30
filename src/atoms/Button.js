import React from 'react';

const Button = (props)=>{
    const {bg, copy} = props;
    return(
        <button style={{ backgroundColor: bg }}>{copy}</button>
    );
};

export default Button;
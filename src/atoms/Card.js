import React from 'react';
import PropTypes from 'prop-types';

const Card = (props)=>{
    const {title} = props;
    return(
        <div className="card">
            <h3>{title}</h3>
            {props.children}
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired  
};

export default Card;
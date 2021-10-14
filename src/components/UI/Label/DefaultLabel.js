import React from 'react';
import classes from './DefaultLabel.module.css';

const DefaultLabel = (props) => {
    return (
        <label className={classes.defaultLabel} {...props}/>
    );
};

export default DefaultLabel;
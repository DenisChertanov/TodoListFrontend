import React from 'react';
import classes from './CenteredLabel.module.css';

const CenteredLabel = (props) => {
    return (
        <label className={classes.centeredLabel} {...props}/>
    );
};

export default CenteredLabel;
import React from 'react';
import classes from './VerticalCenteredLabel.module.css';

const VerticalCenteredLabel = (props) => {
    return (
        <label className={classes.verticalCenteredLabel} {...props}/>
    );
};

export default VerticalCenteredLabel;
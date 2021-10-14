import React from 'react';
import classes from './DefaultButton.module.css';

const DefaultButton = (props) => {
    return (
        <button className={classes.defaultButton} {...props}/>
    );
};

export default DefaultButton;
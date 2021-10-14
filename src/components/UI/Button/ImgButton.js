import React from 'react';
import classes from './ImgButton.module.css';

const ImgButton = (props) => {
    return (
        <button className={classes.imgButton} {...props}/>
    );
};

export default ImgButton;
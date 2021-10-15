import React from 'react';
import DefaultInput from "../Input/DefaultInput";
import classes from './DefaultForm.module.css';

const DefaultForm = (props) => {
    return (
        <form className={classes.defaultForm} {...props}>
            <DefaultInput {...props}/>
        </form>
    );
};

export default DefaultForm;
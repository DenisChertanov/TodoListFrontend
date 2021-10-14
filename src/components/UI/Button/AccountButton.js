import React from 'react';
import classes from './AccountButton.module.css';

const AccountButton = (props) => {
    return (
        <button className={classes.accountButton} {...props}/>
    );
};

export default AccountButton;
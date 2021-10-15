import React from 'react';
import '../styles/ImagesStyle.css';
import DefaultInput from "./UI/Input/DefaultInput";
import DefaultButton from "./UI/Button/DefaultButton";
import DefaultLabel from "./UI/Label/DefaultLabel";
import {Link, useHistory} from "react-router-dom";

const LoginForm = () => {
    const history = useHistory();

    function authenticate() {
        history.push('/main');
    }

    return (
        <form className="login_form">
            <DefaultLabel style={{marginLeft: "10px"}}>Username:</DefaultLabel>
            <DefaultInput type="text"/>

            <DefaultLabel style={{marginLeft: "10px"}}>Password:</DefaultLabel>
            <DefaultInput type="password"/>

            <DefaultButton onClick={authenticate}>Login</DefaultButton>
            <DefaultButton type="button" style={{backgroundColor: "#EF4A51", color: "white"}}>
                <i className="fab fa-google"/>
                Continue with Google
            </DefaultButton>
        </form>
    );
};

export default LoginForm;
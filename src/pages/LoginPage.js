import React from 'react';
import LoginForm from "../components/LoginForm";
import logo from '../components/UI/Img/to-do.png';
import '../styles/ImagesStyle.css';
import '../styles/LoginPageStyle.css';

const LoginPage = (props) => {
    return (
        <div className="login_container">
            <img className="login_icon" src={logo} alt=""/>
            <LoginForm set={props.set}/>
        </div>
    );
};

export default LoginPage;
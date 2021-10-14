import React from 'react';
import LoginForm from "../components/LoginForm";
import logo from '../components/UI/Img/to-do.png';
import '../styles/ImagesStyle.css';
import '../styles/LoginPageStyle.css';

const LoginPage = () => {
    return (
        <div className="login_container">
            <img className="login_icon" src={logo} alt=""/>
            <LoginForm/>
        </div>
    );
};

export default LoginPage;
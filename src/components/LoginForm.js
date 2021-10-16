import React, {useState} from 'react';
import '../styles/ImagesStyle.css';
import DefaultInput from "./UI/Input/DefaultInput";
import DefaultButton from "./UI/Button/DefaultButton";
import DefaultLabel from "./UI/Label/DefaultLabel";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import https from "https";

const LoginForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    const instance = axios.create({
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    });

    async function authenticate(event) {
        event.preventDefault();
        const response = await instance.post('https://localhost:8443/todo/login',
            {
                "requestObject": {
                    "params": [
                        {
                            "name": "password",
                            "strings": [password]
                        },
                        {
                            "name": "userName",
                            "strings": [username]
                        }
                    ]
                }
            }
        );

        if (response.status === 200) {
            // console.log(response.data);
            const token = response.data.responseObject.params[0].strings[0];

            props.set(token);
            history.push('/main');
        }
    }

    return (
        <form className="login_form">
            <DefaultLabel style={{marginLeft: "10px"}}>Username:</DefaultLabel>
            <DefaultInput type="text" onChange={(e) => setUsername(e.target.value)}/>

            <DefaultLabel style={{marginLeft: "10px"}}>Password:</DefaultLabel>
            <DefaultInput type="password" onChange={(e) => setPassword(e.target.value)}/>

            <DefaultButton onClick={authenticate}>Login</DefaultButton>
            <DefaultButton type="button" style={{backgroundColor: "#EF4A51", color: "white"}}>
                <i className="fab fa-google"/>
                Continue with Google
            </DefaultButton>
        </form>
    );
};

export default LoginForm;
import React, {useState} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import './styles/AppStyle.css';

function App() {
    const [token, setToken] = useState('')

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <LoginPage set={setToken}/>
                </Route>
                <Route path="/main">
                    <MainPage token={token}/>
                </Route>
                <Redirect to="/login"/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

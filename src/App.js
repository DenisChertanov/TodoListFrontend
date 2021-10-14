import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import './styles/AppStyle.css';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <LoginPage/>
                </Route>
                <Route path="/main">
                    <MainPage/>
                </Route>
                <Redirect to="/login"/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

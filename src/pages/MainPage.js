import React from 'react';
import NavigatePanel from "../components/NavigatePanel";
import DashboardView from "../components/DashboardView";

const MainPage = () => {
    return (
        <div className="mainPage">
            <NavigatePanel/>
            <DashboardView/>
        </div>
    );
};

export default MainPage;
import React from 'react';
import DefaultLabel from "./UI/Label/DefaultLabel";
import '../styles/DashboardViewTitleStyle.css';

const DashboardViewTitle = () => {
    return (
        <div>
            <DefaultLabel style={{color: "white", fontSize: "26px"}}>
                University
            </DefaultLabel>
            <hr className="dashboardViewHR" color="#4D5153"/>
        </div>
    );
};

export default DashboardViewTitle;
import React from 'react';
import '../styles/DashboardViewStyle.css';
import DashboardViewTitle from "./DashboardViewTitle";
import Column from "./Column";

const DashboardView = (props) => {
    return (
        <div className="dashboardView">
            <DashboardViewTitle/>
            <Column/>
        </div>
    );
};

export default DashboardView;
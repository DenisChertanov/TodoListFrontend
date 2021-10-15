import React from 'react';
import '../styles/DashboardViewStyle.css';
import DashboardViewTitle from "./DashboardViewTitle";
import Column from "./Column";

const DashboardView = ({tasks, dashboard, ...props}) => {
    return (
        <div className="dashboardView">
            <DashboardViewTitle dashboard={dashboard}/>
            <Column tasks={tasks} create={props.create} remove={props.remove}/>
        </div>
    );
};

export default DashboardView;
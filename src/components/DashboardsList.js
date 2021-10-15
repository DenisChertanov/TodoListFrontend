import React, {useState} from 'react';
import '../styles/DashboardsListStyle.css';
import DashboardItem from "./DashboardItem";
import DashboardTitle from "./DashboardTitle";

const DashboardsList = () => {
    const [dashboards, setDashboards] = useState([
        {id: 1, title: 'University'},
        {id: 2, title: 'Work'}
    ]);

    return (
        <div class="dashboardsList">
            <DashboardTitle/>
            {dashboards.map((dashboard) =>
                <DashboardItem dashboard={dashboard} key={dashboard.id}/>
            )}
        </div>
    );
};

export default DashboardsList;
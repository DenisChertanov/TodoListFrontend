import React, {useState} from 'react';
import '../styles/DashboardsListStyle.css';
import DashboardItem from "./DashboardItem";
import DashboardTitle from "./DashboardTitle";
import LeftAddInput from "./LeftAddInput";
import RightAddInput from "./RightAddInput";

const DashboardsList = () => {
    const [dashboards, setDashboards] = useState([
        {id: 1, title: 'University'},
        {id: 2, title: 'Work'}
    ]);

    function addDashboard(newDashboardTitle) {
        setDashboards([...dashboards, {id: dashboards.length + 1, title: newDashboardTitle}]);
    }

    function removeDashboard(dashboard) {
        setDashboards(dashboards.filter(d => d.id !== dashboard.id));
    }

    return (
        <div class="dashboardsList">
            <DashboardTitle/>
            {dashboards.map((dashboard) =>
                <DashboardItem remove={removeDashboard} dashboard={dashboard} key={dashboard.id}/>
            )}
            <RightAddInput create={addDashboard}/>
        </div>
    );
};

export default DashboardsList;
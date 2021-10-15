import React, {useState} from 'react';
import '../styles/DashboardsListStyle.css';
import DashboardItem from "./DashboardItem";
import DashboardTitle from "./DashboardTitle";
import LeftAddInput from "./LeftAddInput";
import RightAddInput from "./RightAddInput";

const DashboardsList = ({dashboards, ...props}) => {
    return (
        <div class="dashboardsList">
            <DashboardTitle/>
            {dashboards.map((dashboard) =>
                <DashboardItem remove={props.remove} set={props.set} dashboard={dashboard} key={dashboard.id}/>
            )}
            <RightAddInput create={props.create}/>
        </div>
    );
};

export default DashboardsList;
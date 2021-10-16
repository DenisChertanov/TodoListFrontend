import React from 'react';
import DashboardsList from "./DashboardsList";
import '../styles/NavigatePanelStyle.css';
import AccountButton from "./UI/Button/AccountButton";

const NavigatePanel = (props) => {
    return (
        <div class="navigatePanel">
            <AccountButton type="button">
                <i class="far fa-user"/>
                {props.userInfo}
            </AccountButton>
            <DashboardsList dashboards={props.dashboards} create={props.create} remove={props.remove} set={props.set}/>
        </div>
    );
};

export default NavigatePanel;
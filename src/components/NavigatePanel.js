import React from 'react';
import DashboardsList from "./DashboardsList";
import '../styles/NavigatePanelStyle.css';
import AccountButton from "./UI/Button/AccountButton";

const NavigatePanel = () => {
    return (
        <div class="navigatePanel">
            <AccountButton type="button">
                <i class="far fa-user"/>
                Chertanov Denis
            </AccountButton>
            <DashboardsList/>
        </div>
    );
};

export default NavigatePanel;
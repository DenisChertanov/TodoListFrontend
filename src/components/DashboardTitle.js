import React from 'react';
import DefaultLabel from "./UI/Label/DefaultLabel";
import ImgButton from "./UI/Button/ImgButton";
import '../styles/DashboardTitleStyle.css';

const DashboardTitle = (props) => {
    return (
        <div className="dashboardTitle">
            <DefaultLabel style={{color: "#AFB1B3", backgroundColor: "#363C3F", fontSize: "12px"}}>
                DASHBOARDS
            </DefaultLabel>
            <ImgButton type="button" style={{left: "55%"}}>
                <i class="far fa-plus-square"/>
            </ImgButton>
        </div>
    );
};

export default DashboardTitle;
import React from 'react';
import DefaultLabel from "./UI/Label/DefaultLabel";
import right_arrow_triangle from './UI/Img/right-arrow-triangle.png';
import '../styles/DashboardItemStyle.css';

const DashboardItem = (props) => {
    return (
        <div className="dashboardItem">
            <img src={right_arrow_triangle} alt="" width="10px" height="10px" className="right_arrow_triangle"/>
            <DefaultLabel style={{backgroundColor: "#363C3F", color: "#AFB1B3"}}>
                {props.dashboard.title}
            </DefaultLabel>
        </div>
    );
};

export default DashboardItem;
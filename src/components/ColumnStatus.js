import React from 'react';
import CenteredLabel from "./UI/Label/CenteredLabel";
import '../styles/ColumnStatusStyle.css';

const ColumnStatus = () => {
    return (
        <div className="columnStatus">
            <CenteredLabel>Planned</CenteredLabel>
        </div>
    );
};

export default ColumnStatus;
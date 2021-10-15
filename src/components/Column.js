import React from 'react';
import ColumnStatus from "./ColumnStatus";
import TasksList from "./TasksList";
import LeftAddInput from "./LeftAddInput";

const Column = () => {
    return (
        <div>
            <ColumnStatus/>
            <TasksList/>
        </div>
    );
};

export default Column;
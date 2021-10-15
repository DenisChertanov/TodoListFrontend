import React from 'react';
import ColumnStatus from "./ColumnStatus";
import TasksList from "./TasksList";
import AddTask from "./AddTask";

const Column = () => {
    return (
        <div>
            <ColumnStatus/>
            <TasksList/>
            <AddTask/>
        </div>
    );
};

export default Column;
import React from 'react';
import ColumnStatus from "./ColumnStatus";
import TasksList from "./TasksList";
import LeftAddInput from "./LeftAddInput";

const Column = ({tasks, ...props}) => {
    return (
        <div>
            <ColumnStatus/>
            <TasksList tasks={tasks} create={props.create} remove={props.remove}/>
        </div>
    );
};

export default Column;
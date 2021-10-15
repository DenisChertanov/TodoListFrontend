import React, {useState} from 'react';
import TaskShortView from "./TaskShortView";
import LeftAddInput from "./LeftAddInput";

const TasksList = ({tasks, ...props}) => {
    return (
        <div>
            {tasks.map((task) =>
                <TaskShortView remove={props.remove} task={task} key={task.id}/>
            )}
            <LeftAddInput create={props.create}/>
        </div>
    );
};

export default TasksList;
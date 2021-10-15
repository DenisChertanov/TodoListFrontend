import React, {useState} from 'react';
import TaskShortView from "./TaskShortView";

const TasksList = () => {
    const [tasks, setTasks] = useState([
        {id: 1, title: 'Task #1'},
        {id: 2, title: 'Task #2'},
        {id: 3, title: 'Task #3'},
        {id: 4, title: 'Task #4'}
    ])

    return (
        <div>
            {tasks.map((task) =>
                <TaskShortView task={task} key={task.id}/>
            )}
        </div>
    );
};

export default TasksList;
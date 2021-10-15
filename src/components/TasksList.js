import React, {useState} from 'react';
import TaskShortView from "./TaskShortView";
import LeftAddInput from "./LeftAddInput";

const TasksList = () => {
    const [tasks, setTasks] = useState([
        {id: 1, title: 'Task #1'},
        {id: 2, title: 'Task #2'},
        {id: 3, title: 'Task #3'},
        {id: 4, title: 'Task #4'}
    ])

    function addTask(title) {
        setTasks([...tasks, {id: tasks.length + 1, title: title}]);
    }

    function removeTask(task) {
        setTasks(tasks.filter(t => t.id !== task.id));
    }

    return (
        <div>
            {tasks.map((task) =>
                <TaskShortView remove={removeTask} task={task} key={task.id}/>
            )}
            <LeftAddInput create={addTask}/>
        </div>
    );
};

export default TasksList;
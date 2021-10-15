import React, {useState} from 'react';
import NavigatePanel from "../components/NavigatePanel";
import DashboardView from "../components/DashboardView";

const MainPage = () => {
    const [currentDashboard, setCurrentDashboard] = useState();

    const [dashboards, setDashboards] = useState([
        {id: 1, title: 'University'},
        {id: 2, title: 'Work'}
    ]);
    const [tasks, setTasks] = useState([])

    function addTask(title) {
        setTasks([...tasks, {id: Date.now(), title: title}]);
    }

    function removeTask(task) {
        setTasks(tasks.filter(t => t.id !== task.id));
    }

    function addDashboard(newDashboardTitle) {
        setDashboards([...dashboards, {id: Date.now(), title: newDashboardTitle}]);
    }

    function removeDashboard(dashboard) {
        setDashboards(dashboards.filter(d => d.id !== dashboard.id));
    }

    function setDashboard(dashboard) {
        setCurrentDashboard(dashboard);
        if (dashboard.id === 2) {
            setTasks([
                {id: 1, title: 'Task #11'},
                {id: 2, title: 'Task #22'},
                {id: 3, title: 'Task #33'},
                {id: 4, title: 'Task #44'}
            ]);
        } else {
            setTasks([
                {id: 1, title: 'Task #1'},
                {id: 2, title: 'Task #2'},
                {id: 3, title: 'Task #3'},
                {id: 4, title: 'Task #4'}
            ]);
        }
    }

    return (
        <div className="mainPage">
            <NavigatePanel dashboards={dashboards} create={addDashboard} remove={removeDashboard} set={setDashboard}/>
            {currentDashboard
                ?
                <DashboardView tasks={tasks} dashboard={currentDashboard} create={addTask} remove={removeTask}/>
                : <h1/>
            }
        </div>
    );
};

export default MainPage;
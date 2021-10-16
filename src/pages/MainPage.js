import React, {useEffect, useState} from 'react';
import NavigatePanel from "../components/NavigatePanel";
import DashboardView from "../components/DashboardView";
import axios from "axios";
import https from "https";
import $ from "jquery";

const MainPage = ({token, ...props}) => {
    const [currentDashboard, setCurrentDashboard] = useState();
    const [dashboards, setDashboards] = useState([]);
    const [tasks, setTasks] = useState([])
    const [userInfo, setUserInfo] = useState('');

    async function addTask(title) {
        const data = await addTaskAjax(title);
        setTasks([...tasks, {id: data.responseObject.params[3].longs[0], title: title}]);
    }

    async function removeTask(task) {
        const data = await removeTaskAjax(task);
        setTasks(tasks.filter(t => t.id !== task.id));
    }

    async function addDashboard(newDashboardTitle) {
        const data = await addDashboardAjax(newDashboardTitle);
        setDashboards([...dashboards, {id: data.responseObject.params[0].longs[0], title: newDashboardTitle}]);
    }

    function removeDashboard(dashboard) {
        setDashboards(dashboards.filter(d => d.id !== dashboard.id));
    }

    function addTaskAjax(title) {
        return $.ajax({
            type: 'POST',
            headers: {'Authorization': 'Bearer ' + token},
            url: 'https://localhost:8443/api/task/create',
            contentType: 'application/json',
            data: JSON.stringify({
                'requestObject': {
                    'params': [
                        {
                            'name': 'queueId',
                            'longs': [currentDashboard.id]
                        },
                        {
                            'name': 'header',
                            'strings': [title]
                        },
                        {
                            'name': 'description',
                            'strings': ['description']
                        }
                    ]
                }
            })
        });
    }

    function removeTaskAjax(task) {
        return $.ajax({
            type: 'POST',
            headers: {'Authorization': 'Bearer ' + token},
            url: 'https://localhost:8443/api/task/remove',
            contentType: 'application/json',
            data: JSON.stringify({
                'requestObject': {
                    'params': [
                        {
                            'name': 'id',
                            'longs': [task.id]
                        }
                    ]
                }
            })
        });
    }

    async function setDashboard(dashboard) {
        setCurrentDashboard(dashboard);

        const data = await loadTasksAjax(dashboard.id);
        let newTasks = [];
        if (data.responseObjects.length !== 0) {
            data.responseObjects.forEach(element => {
                console.log(newTasks);
                newTasks = [...newTasks, {
                    id: element.params[3].longs[0],
                    title: element.params[1].strings[0]
                }];
            });
            console.log(newTasks);
        }
        setTasks(newTasks);
    }

    function loadTasksAjax(queueId) {
        return $.ajax({
            type: 'POST',
            headers: {'Authorization': 'Bearer ' + token},
            url: 'https://localhost:8443/api/task/list',
            contentType: 'application/json',
            data: JSON.stringify({
                'requestObject': {
                    'params': [
                        {
                            'name': 'queueId',
                            'longs': [queueId]
                        }
                    ]
                }
            })
        });
    }

    function addDashboardAjax(dashboardTitle) {
        return $.ajax({
            type: 'POST',
            headers: {'Authorization': 'Bearer ' + token},
            url: 'https://localhost:8443/api/queue/create',
            contentType: 'application/json',
            data: JSON.stringify({
                'requestObject': {
                    'params': [
                        {
                            'name': 'name',
                            'strings': [dashboardTitle]
                        }
                    ]
                }
            })
        });
    }

    function fetchDashboardAjax() {
        return $.ajax({
            type: 'POST',
            headers: {'Authorization': 'Bearer ' + token},
            url: 'https://localhost:8443/api/queue/list',
            contentType: 'application/json',
        });
    }

    async function fetchDashboards() {
        console.log(token);
        const data = await fetchDashboardAjax();
        console.log(data);

        let newDashboards = [];
        if (data.responseObjects.length !== 0) {
            data.responseObjects.forEach(element => {
                console.log(newDashboards);
                newDashboards = [...newDashboards, {
                    id: element.params[0].longs[0],
                    title: element.params[1].strings[0]
                }];
            });
            console.log(newDashboards);
        }
        return newDashboards;
    }

    function fetchUserInfoAjax() {
        return $.ajax({
            type: 'POST',
            headers: {'Authorization': 'Bearer ' + token},
            url: 'https://localhost:8443/todo/current_user',
            contentType: 'application/json',
        });
    }

    async function fetchUserInfo() {
        const data = await fetchUserInfoAjax();
        return data.responseObject.params[0].strings[0];
    }

    useEffect(() => {
            fetchDashboards()
                .then(res => setDashboards(res));
            fetchUserInfo()
                .then(res => setUserInfo(res));
        }
        , [])

    return (
        <div className="mainPage">
            <NavigatePanel userInfo={userInfo} dashboards={dashboards} create={addDashboard} remove={removeDashboard}
                           set={setDashboard}/>
            {currentDashboard
                ?
                <DashboardView tasks={tasks} dashboard={currentDashboard} create={addTask} remove={removeTask}/>
                : <h1/>
            }
        </div>
    );
};

export default MainPage;
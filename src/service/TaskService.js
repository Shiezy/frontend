import axios from 'axios';

const TASK_API_BASE_URL = 'https://sheila-task-scheduler.herokuapp.com/api/task/';
const AuthStr = 'Bearer ' + localStorage.getItem("token");
const headers =  {
    'Content-Type': 'application/json',
    'Authorization': AuthStr,
}

class TaskService {


    fetchTasks() {
        return axios.get(TASK_API_BASE_URL+"all",{ headers: headers});
        // return axios.get(TASK_API_BASE_URL+"all",{ headers: { Authorization: AuthStr }});
    }

}

export default new TaskService();
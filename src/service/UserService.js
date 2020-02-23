import axios from 'axios';

const USER_API_BASE_URL = 'https://sheila-task-scheduler.herokuapp.com/api/auth/';

class UserService {

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL+"signup", user);
    }

    login(user) {
        return axios.post(USER_API_BASE_URL+"signin", user);
    }


    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }


    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

}

export default new UserService();
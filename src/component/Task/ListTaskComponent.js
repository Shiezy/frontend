import React, { Component } from 'react'
import TaskService from "../../service/TaskService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

class ListTaskComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            message: null
        };
        this.deleteTask = this.deleteTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.reloadTaskList = this.reloadTaskList.bind(this);
    }

    componentDidMount() {
        this.reloadTaskList();
    }

    reloadTaskList() {
        TaskService.fetchTasks()
            .then((res) => {
                console.log("response : ",res);
                this.setState({tasks: res.data});
                console.log("tasks : ",this.state.tasks);

            });
    }

    deleteTask(taskId) {
        TaskService.deleteTask(taskId)
            .then(res => {
                this.setState({message : 'Task deleted successfully.'});
                this.setState({tasks: this.state.tasks.filter(task => task.id !== taskId)});
            })

    }

    editTask(id) {
        window.localStorage.setItem("taskId", id);
        this.props.history.push('/edit-task');
    }

    addTask() {
        window.localStorage.removeItem("taskId");
        this.props.history.push('/add-task');
    }

    render() {
        return (
            <div className="col-sm-12" >
                <Typography variant="h4" style={style}>Task Details</Typography>

                <Button align="right" variant="contained" color="primary" onClick={() => this.addTask()}>
                    Add Task
                </Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell> Customer FirstName</TableCell>
                            <TableCell> Customer Last Name</TableCell>
                            <TableCell> Customer Phone</TableCell>
                            {/*<TableCell> Age</TableCell>*/}

                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            // this.state.tasks?
                            this.state.tasks.map(
                                task => (<TableRow key={task.id}>
                                        <TableCell>{task.id}</TableCell>
                                        <TableCell>{task.customerFirstName}</TableCell>
                                        <TableCell>{task.customerLastName}</TableCell>
                                        <TableCell>{task.customerPhone}</TableCell>
                                        {/*<TableCell>{task.age}</TableCell>*/}
                                        <TableCell align="right" onClick={() => this.deleteTask(task.id)}><DeleteIcon /></TableCell>
                                        <TableCell align="right" onClick={() => this.editTask(task.id)}><CreateIcon /></TableCell>

                                    </TableRow>))
                        }

                    </TableBody>
                </Table>

            </div>
        );
    }

}
const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default ListTaskComponent;
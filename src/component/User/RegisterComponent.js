import React, { Component } from 'react'
import UserService from "../../service/UserService";
import Typography from "@material-ui/core/Typography";

class RegisterComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            name: '',
            phone: '',
            email: '',
            password: '',
            roles: ["ROLE_USER"],
            message: null
        };
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {phone: this.state.phone, password: this.state.password, name: this.state.name,  email: this.state.email, roles: this.state.roles};
        UserService.addUser(user)
            .then(res => {
                this.setState({message : res.message});
                this.props.history.push('/users');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>

                <Typography variant="h4" style={style}>User Registration</Typography>

                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="full name" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        <input type="txt" placeholder="0712345678" name="phone" className="form-control" value={this.state.phone} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="email@email.com" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                </form>
            </div>
        );
    }
}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default RegisterComponent;
import React, { Component } from 'react'
import UserService from "../../service/UserService";
import Typography from '@material-ui/core/Typography';



class LoginComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            phone: '',
            password: '',
        };
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {phone: this.state.phone, password: this.state.password};
        UserService.login(user)
            .then(res => {
                if (res.data.message) {
                    console.log("Encountered Exception during Login ;", res.data.message);
                } else {
                    localStorage.setItem("token", res.data.accessToken)
                    // dispatch(loginUser(data.user))

                }

                this.setState({message : res.message});
                this.props.history.push('/');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div className="col-md-6  offset-md-3">
                <Typography variant="h4" style={style}>User Login</Typography>
                <form>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="txt" placeholder="0712345678" name="phone" className="form-control" value={this.state.phone} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveUser}>Login</button>
                </form>

            </div>
        );
    }
}

const style ={
    display: 'flex',
    justifyContent: 'center'
}



export default LoginComponent;
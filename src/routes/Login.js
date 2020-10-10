import React, {Component} from 'react';

class Login extends Component{
    componentDidMount(){
        this.props.updateScreenName("login"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("login"); // todo1: create constants
    }

    render(){
        return(
            <div className="Login Screen">
                Login works
            </div>
        );
    }
}

export default Login;
import React, {Component} from 'react';

class Register extends Component{
    componentDidMount(){
        this.props.updateScreenName("register"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("register"); // todo1: create constants
    }

    render(){
        return(
            <div className="Register Screen">
                Register works
            </div>
        );
    }
}

export default Register;
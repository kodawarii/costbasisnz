import React, {Component} from 'react';

class Logout extends Component{
    componentDidMount(){
        this.props.updateScreenName("logout"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("logout"); // todo1: create constants
    }

    render(){
        return(
            <div className="Logout Screen">
                Logout works
            </div>
        );
    }
}

export default Logout;
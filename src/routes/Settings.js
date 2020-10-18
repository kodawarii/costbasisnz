import React, {Component} from 'react';

class Settings extends Component{
    componentDidMount(){
        this.props.updateScreenName("settings"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("settings"); // todo1: create constants
    }

    render(){
        return(
            <div className="Settings Screen">
                Settings works
                <p className="msg"> Broker Portfolio Deletion in Settings (Todo: 1. Delete All Data, or 2. Hide from Home) </p>
                
            </div>
        );
    }
}

export default Settings;
import React, {Component} from 'react';

class Settings extends Component{
    constructor(props){
        super(props);
    }

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
            </div>
        );
    }
}

export default Settings;
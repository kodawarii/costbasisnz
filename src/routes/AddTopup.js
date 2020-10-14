import React, {Component} from 'react';

class AddTopup extends Component{
    componentDidMount(){
        this.props.updateScreenName("AddTopup"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("AddTopup"); // todo1: create constants
    }

    render(){
        return(
            <div className="AddTopup Screen">
                AddTopup works
            </div>
        );
    }
}

export default AddTopup;
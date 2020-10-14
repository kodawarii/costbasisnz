import React, {Component} from 'react';

class AddFX extends Component{
    componentDidMount(){
        this.props.updateScreenName("AddFX"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("AddFX"); // todo1: create constants
    }

    render(){
        return(
            <div className="AddFX Screen">
                AddFX works
            </div>
        );
    }
}

export default AddFX;
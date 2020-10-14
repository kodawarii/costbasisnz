import React, {Component} from 'react';

class AddSell extends Component{
    componentDidMount(){
        this.props.updateScreenName("AddSell"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("AddSell"); // todo1: create constants
    }

    render(){
        return(
            <div className="AddSell Screen">
                AddSell works
            </div>
        );
    }
}

export default AddSell;
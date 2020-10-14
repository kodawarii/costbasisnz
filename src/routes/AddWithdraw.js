import React, {Component} from 'react';

class AddWithdraw extends Component{
    componentDidMount(){
        this.props.updateScreenName("AddWithdraw"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("AddWithdraw"); // todo1: create constants
    }

    render(){
        return(
            <div className="AddWithdraw Screen">
                AddWithdraw works
            </div>
        );
    }
}

export default AddWithdraw;
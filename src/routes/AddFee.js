import React, {Component} from 'react';

class AddFee extends Component{
    componentDidMount(){
        this.props.updateScreenName("AddFee"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("AddFee"); // todo1: create constants
    }

    render(){
        return(
            <div className="AddFee Screen">
                AddFee works
            </div>
        );
    }
}

export default AddFee;
import React, {Component} from 'react';

class AddBuy extends Component{
    componentDidMount(){
        this.props.updateScreenName("AddBuySell"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("AddBuySell"); // todo1: create constants
    }

    render(){
        return(
            <div className="AddBuySell Screen">
                Add BuySell works
            </div>
        );
    }
}

export default AddBuy;
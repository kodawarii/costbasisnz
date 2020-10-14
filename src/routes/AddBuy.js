import React, {Component} from 'react';

class AddBuy extends Component{
    componentDidMount(){
        this.props.updateScreenName("AddBuy"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("AddBuy"); // todo1: create constants
    }

    render(){
        return(
            <div className="AddBuy Screen">
                AddBuy works
            </div>
        );
    }
}

export default AddBuy;
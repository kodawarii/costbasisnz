import React, {Component} from 'react';

class AddDividend extends Component{
    componentDidMount(){
        this.props.updateScreenName("AddDividend"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("AddDividend"); // todo1: create constants
    }

    render(){
        return(
            <div className="AddDividend Screen">
                AddDividend works
            </div>
        );
    }
}

export default AddDividend;
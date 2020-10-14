import React, {Component} from 'react';
import {connect} from 'react-redux';

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
                Adding for = {this.props.portfolio}
            </div>
        );
    }
}

export default connect(
    (state) => ({
        portfolio: state.portfolioNameToShow.name,
    }),
    {

    }
)(AddTopup);
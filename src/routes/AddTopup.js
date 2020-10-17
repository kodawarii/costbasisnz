import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/AddDataScreens.css';

class AddTopup extends Component{
    constructor(props){
        super(props);

        this.state = {
            key: "DEFAULT: Retrieve last used, then ++1",
            date: 'DEFAULT_DATE',
            action: 'Topup', // TODO: Change to Parameter string from external json constants
            amount: 0,
            notes: ''
        }
    }

    handleChange(event){

    }

    handleSubmit(){

    }


    componentDidMount(){
        this.props.updateScreenName("AddTopup"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("AddTopup"); // todo1: create constants
    }

    render(){

        // TODO: add Base Currency to user1 data against the broker
        let currency = '';
        if(this.props.portfolio === 'Interactive Brokers'){
            currency = 'AUD';
        }
        else if(this.props.portfolio === 'Hatch'){
            currency = 'USD';
        }
        else if(this.props.portfolio === 'Sharsies'){
            currency = 'NZD';
        }

        return(
            <div className="AddData AddTopup Screen">
                <h4>{this.props.portfolio}</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Topup Amount ({currency})<br/><br/>
                        <input type="text" name="name" value={this.state.value} onChange={this.handleChange} className="AddDataTextBox"/>
                    </label>
                    <br/><br/>
                    <input type="submit" value="Add" className="submit-btn" />
                </form> 
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
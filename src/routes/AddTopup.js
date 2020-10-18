import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/AddDataScreens.css';

// Redux
import { 
    fetchTopupStyle
} from '../actions/ProgramActions';

import {
    addToLogs
} from '../actions/UserDataActions';

class AddTopup extends Component{

    // this.props.

    // Other Notes
    // There are 2 types of topups (so far...)
    // 1. Native (IBKR, Sharsies)
    // 2. Convert (Hatch)

    constructor(props){
        super(props);

        this.state = {
            action: 'Topup', // TODO: Change to Parameter string from external json constants
            amountSent: '',
            rate: '',
            amountLanded: '',
            notes: '' // TODO: Handle notes1 or notes2 - did we arrive on AddTopup Section via log ribbon OR topup/withdraw ribbon ?
        }

        this.getTopupForm_TYPE_CONVERT = this.getTopupForm_TYPE_CONVERT.bind(this);
        this.getTopupForm_TYPE_NATIVE = this.getTopupForm_TYPE_NATIVE.bind(this);
        this.handleChangeAmountSent = this.handleChangeAmountSent.bind(this);
        this.handleChangeAmountLanded = this.handleChangeAmountLanded.bind(this);
        this.handleChangeConversionRate = this.handleChangeConversionRate.bind(this);
        this.handleChangeNotes = this.handleChangeNotes.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getDate(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        return yyyy.toString().substr(2,2) + '-' + mm + '-' + dd;
    }

    handleChangeNotes(event){
        this.setState({notes: event.target.value});
    }

    handleChangeConversionRate(event){
        this.setState({rate: event.target.value});
    }

    handleChangeAmountLanded(event){
        this.setState({amountLanded: event.target.value});
    }

    handleChangeAmountSent(event){
        this.setState({amountSent: event.target.value});
    }

    handleSubmit(event){
        if(this.props.topupStyle === 'native'){
            let logToAdd = {
                type: 'reg',
                pkey: 0,
                date: this.getDate(),
                action: 'Topup',
                notes1: this.state.notes,

                amount: this.state.amountLanded,
                notes2: this.state.notes // TODO notes2 implementation
            };

            // disgusting code
            if(this.props.portfolio==='Interactive Brokers'){
                this.props.addToLogs(this.props.b2, this.props.b3, this.props.b1, logToAdd);
            }
            else if(this.props.portfolio==='Sharsies'){
                this.props.addToLogs(this.props.b1, this.props.b3, this.props.b2, logToAdd);
            }
        }
        else if(this.props.topupStyle === 'convert'){
            let logToAdd = {
                type: 'reg',
                pkey: 0,
                date: this.getDate(),
                action: 'Topup',
                notes1: this.state.notes,

                amountSent: this.state.amountSent,
                rate: this.state.rate,
                amountLanded: this.state.amountLanded,
                notes2: this.state.notes // TODO notes2 implementation
            };
            
            // disgusting code
            if(this.props.portfolio==='Hatch'){
                this.props.addToLogs(this.props.b1, this.props.b2, this.props.b3, logToAdd);
            }
        }
        else{
            console.log(">> TopupStyle Does not exist: " + this.props.topupStyle);
        }

        event.preventDefault();
    }

    componentDidMount(){
        this.props.fetchTopupStyle(this.props.brokers, this.props.portfolio); // This will be buggy af - assuiming we only access AddTopup after choosing a portfolio - URL injection will crash
        this.props.updateScreenName("AddTopup"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("AddTopup"); // todo1: create constants
    }

    // TODO: Add Number Validations
    getTopupForm_TYPE_NATIVE(currency){
        return <form onSubmit={this.handleSubmit}>
            <label>
                
                Topup Amount ({currency})
                <br/><br/>
                <input type="text" name="amountLanded" value={this.state.amountLanded} onChange={this.handleChangeAmountLanded} className="AddDataTextBox"/>
                <br/><br/>

                Notes
                <br/><br/>
                <input type="text" name="amountLanded" value={this.state.notes} onChange={this.handleChangeNotes} className="AddDataTextBox"/>
            
            </label>
            <br/><br/>
            <input type="submit" value="Add" className="submit-btn" />
        </form> 
    }

    // TODO: Add Number Validations
    getTopupForm_TYPE_CONVERT(currency){
        return <form onSubmit={this.handleSubmit}>
            <label>
                
                Amount sent 
                <br/><br/>
                <input type="text" name="amountSent" value={this.state.amountSent} onChange={this.handleChangeAmountSent} className="AddDataTextBox"/>
                <br/><br/>

                Conversion Rate 
                <br/><br/>
                <input type="text" name="rate" value={this.state.rate} onChange={this.handleChangeConversionRate} className="AddDataTextBox"/>
                <br/><br/>
                
                Amount Recieved ({currency})
                <br/><br/>
                <input type="text" name="amountLanded" value={this.state.amountLanded} onChange={this.handleChangeAmountLanded} className="AddDataTextBox"/>
                <br/><br/>

                Notes
                <br/><br/>
                <input type="text" name="amountLanded" value={this.state.notes} onChange={this.handleChangeNotes} className="AddDataTextBox"/>

            </label>
            <br/><br/>
            <input type="submit" value="Add" className="submit-btn" />
        </form>
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
        
        let formToShow;
        if(this.props.topupStyle === 'native'){
            formToShow = () => this.getTopupForm_TYPE_NATIVE(currency);
        }
        else if(this.props.topupStyle === 'convert'){
            formToShow = () => this.getTopupForm_TYPE_CONVERT(currency);
        }
        else{
            console.log('>> THAT TOPUP STYLE DOES NOT EXIST');
            formToShow = () => <div> ERROR </div>;
        }

        return(
            <div className="AddData AddTopup Screen">
                <h4>{this.props.portfolio}</h4>
                {formToShow()}
            </div>
        );
    }
}

export default connect(
    (state) => ({
        portfolio: state.portfolioNameToShow.name,
        brokers: state.brokers.brokers,
        topupStyle: state.topupStyle.topupStyle,

        // BEE backend db logs
        // logs: state.logs.logs // care at logs vs log lol

        // FEE local redux logs
        b1: state.logs.b1,
        b2: state.logs.b2,
        b3: state.logs.b3
    }),
    {
        fetchTopupStyle,
        addToLogs
    }
)(AddTopup);
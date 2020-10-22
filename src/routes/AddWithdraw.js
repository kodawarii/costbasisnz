import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFormattedDate} from '../utils/Functions';
import '../styles/AddDataScreens.css';

// Redux
import { 
    
} from '../actions/ProgramActions';

import {
    addToLogs
} from '../actions/UserDataActions';

// Components
import AddItemModal from '../components/AddItemModal';

class AddWithdraw extends Component{

    constructor(props){
        super(props);

        this.state = {
            //// WITHDRAW SCHEMA
            type: 'reg',
            pkey: 0,
            date: getFormattedDate(),
            action: 'Withdraw', // TODO: Change to Parameter string from external json constants
            notes1: '', // TODO: Handle notes1 or notes2 - did we arrive on AddTopup Section via log ribbon OR topup/withdraw ribbon ?

            amountSent: '',
            notes2: '',

            //// PROGRAM DATA
            showModal: false
        };

        this.closeModal = this.closeModal.bind(this);
        this.handleChangeAmount = this.handleChangeAmount.bind(this);
        this.handleChangeNotes1 = this.handleChangeNotes1.bind(this);
        this.handleChangeNotes2 = this.handleChangeNotes2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    closeModal(){
        this.setState({showModal: false});
    }

    handleChangeAmount(event){
        this.setState({amountSent: event.target.value});
    }

    handleChangeNotes2(event){
        this.setState({notes2: event.target.value}); // NOTES1
    }

    handleChangeNotes1(event){
        this.setState({notes1: event.target.value}); // NOTES1
    }

    handleSubmit(event){
        let logToAdd = {
            type: 'reg',
            pkey: 0,
            date: getFormattedDate(),
            action: 'Withdraw',
            notes1: this.state.notes1,

            amountSent: this.state.amountSent,
            notes2: this.state.notes2 // TODO notes2 implementation
        };
            
        this.props.addToLogs(this.props.listOfProfileData, this.props.portfolio, logToAdd);

        this.setState({showModal: true});
       
        event.preventDefault();
    }

    componentDidMount(){
        this.props.updateScreenName("AddWithdraw"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("AddWithdraw"); // todo1: create constants
    }
    
    getWithdrawForm(){        
        if(this.props.brokerData === undefined) {
            console.log(">> Could not find broker data");
            return <div>No Broker Selected</div>;
        }

        // TODO: MUST HANDLE 'CONVERT' TOPUP STYLE WITHDRAWALS

        return <form onSubmit={this.handleSubmit}>
            <label>
                
                <div className="textbox-label">Withdraw Amount ({this.props.brokerData.baseCurrency})</div>
                <input type="text" type="number" name="amountSent" value={this.state.amountSent} onChange={this.handleChangeAmount} className="AddDataTextBox"/>
                <br/><br/>

                <div className="textbox-label">Notes for Main Log</div>
                <input type="text" name="notes1" value={this.state.notes1} onChange={this.handleChangeNotes1} className="AddDataTextBox"/>
                <br/><br/>

                <div className="textbox-label">Notes for Topup/Withdraw Log</div>
                <input type="text" name="notes2" value={this.state.notes2} onChange={this.handleChangeNotes2} className="AddDataTextBox"/>
            
            </label>
            <br/><br/>
            <input type="submit" value="Add" className="submit-btn" />
        </form> 
    }

    render(){
        return(
            <div className="AddData AddWithdraw Screen">
                <h4>{this.props.portfolio}</h4>
                {this.getWithdrawForm()}
                <AddItemModal show={this.state.showModal} prompt={"Successfully Added New Topup Event to " + this.props.portfolio} closeModal={this.closeModal}/>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        portfolio: state.portfolioNameToShow.name,
        brokers: state.brokers.brokers,
        brokerData: state.brokerData.brokerData,

        // BEE backend db logs
        // logs: state.logs.logs // care at logs vs log lol

        // FEE local redux logs
        listOfProfileData: state.listOfProfileData
    }),
    {
        addToLogs
    }
)(AddWithdraw);
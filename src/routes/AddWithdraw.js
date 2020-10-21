import React, {Component} from 'react';
import {connect} from 'react-redux';
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
            date: this.getDate(),
            action: 'Topup', // TODO: Change to Parameter string from external json constants
            notes1: '', // TODO: Handle notes1 or notes2 - did we arrive on AddTopup Section via log ribbon OR topup/withdraw ribbon ?

            amountSent: '',
            rate: '',
            amountLanded: '',
            notes2: '', // TODO notes2 implementation

            //// PROGRAM DATA
            showModal: false
        }
    }

    getDate(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        return yyyy.toString().substr(2,2) + '-' + mm + '-' + dd;
    }

    componentDidMount(){
        this.props.updateScreenName("AddWithdraw"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("AddWithdraw"); // todo1: create constants
    }

    getTopupForm_TYPE_CONVERT(currency){
    }

    getTopupForm_TYPE_NATIVE(currency){
    }

    render(){
        let formToShow;
        if(this.props.brokerData === undefined) {
            console.log(">> Could not find broker data");
            formToShow = () => <div>No Broker Selected</div>;
        }
        else if(this.props.brokerData.topupStyle === 'native'){
            formToShow = () => this.getTopupForm_TYPE_NATIVE(this.props.brokerData.baseCurrency);
        }
        else if(this.props.brokerData.topupStyle === 'convert'){
            formToShow = () => this.getTopupForm_TYPE_CONVERT(this.props.brokerData.baseCurrency);
        }
        else{
            console.log('>> THAT TOPUP STYLE DOES NOT EXIST');
            formToShow = () => <div> ERROR </div>;
        }
        return(
            <div className="AddData AddWithdraw Screen">
                <h4>{this.props.portfolio}</h4>
                {formToShow()}
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
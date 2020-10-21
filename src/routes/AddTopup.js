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

class AddTopup extends Component{

    // this.props.

    // Other Notes
    // There are 2 types of topups (so far...)
    // 1. Native (IBKR, Sharsies)
    // 2. Convert (Hatch)

    constructor(props){
        super(props);

        this.state = {
            //// TOPUP SCHEMA
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

        this.getTopupForm_TYPE_CONVERT = this.getTopupForm_TYPE_CONVERT.bind(this);
        this.getTopupForm_TYPE_NATIVE = this.getTopupForm_TYPE_NATIVE.bind(this);
        this.handleChangeAmountSent = this.handleChangeAmountSent.bind(this);
        this.handleChangeAmountLanded = this.handleChangeAmountLanded.bind(this);
        this.handleChangeConversionRate = this.handleChangeConversionRate.bind(this);
        this.handleChangeNotes = this.handleChangeNotes.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal(){
        this.setState({showModal: false});
    }

    getDate(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        return yyyy.toString().substr(2,2) + '-' + mm + '-' + dd;
    }

    handleChangeNotes(event){
        this.setState({notes1: event.target.value});
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
        let logToAdd = {
            type: 'reg',
            pkey: 0,
            date: this.getDate(),
            action: 'Topup',
            notes1: this.state.notes1,

            amountSent: this.state.amountSent,
            rate: this.state.rate,
            amountLanded: this.state.amountLanded,
            notes2: this.state.notes2 // TODO notes2 implementation
        };
            
        this.props.addToLogs(this.props.listOfProfileData, this.props.portfolio, logToAdd);

        this.setState({showModal: true});
       
        event.preventDefault();
    }

    componentDidMount(){
        this.props.updateScreenName("AddTopup"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("AddTopup"); // todo1: create constants
    }

    // TODO: Add Number Validations
    getTopupForm_TYPE_NATIVE(currency){
        let notesType = "notes1"; // Determine which notes we are adding

        return <form onSubmit={this.handleSubmit}>
            <label>
                
                Topup Amount ({currency})
                <br/><br/>
                <input type="text" type="number" name="amountSent" value={this.state.amountSent} onChange={this.handleChangeAmountSent} className="AddDataTextBox"/>
                <br/><br/>

                Notes1
                <br/><br/>
                <input type="text" name={notesType} value={this.state.notes1} onChange={this.handleChangeNotes} className="AddDataTextBox"/>
            
            </label>
            <br/><br/>
            <input type="submit" value="Add" className="submit-btn" />
        </form> 
    }

    // TODO: Add Number Validations
    getTopupForm_TYPE_CONVERT(currency){
        let notesType = "notes1"; // Determine which type of notes we are adding

        return <form onSubmit={this.handleSubmit}>
            <label>
                
                Amount sent 
                <br/><br/>
                <input type="text" type="number" name="amountSent" value={this.state.amountSent} onChange={this.handleChangeAmountSent} className="AddDataTextBox"/>
                <br/><br/>

                Conversion Rate 
                <br/><br/>
                <input type="text" type="number" name="rate" value={this.state.rate} onChange={this.handleChangeConversionRate} className="AddDataTextBox"/>
                <br/><br/>

                <button> ⭣ </button>
                <br/><br/>
                
                Amount Recieved ({currency})
                <br/><br/>
                <input type="text" type="number" name="amountLanded" value={this.state.amountLanded} onChange={this.handleChangeAmountLanded} className="AddDataTextBox"/>
                <br/><br/>

                Notes1
                <br/><br/>
                <input type="text" name={notesType} value={this.state.notes1} onChange={this.handleChangeNotes} className="AddDataTextBox"/>

            </label>
            <br/><br/>
            <input type="submit" value="Add" className="submit-btn" />
        </form>
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
            <div className="AddData AddTopup Screen">
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
)(AddTopup);
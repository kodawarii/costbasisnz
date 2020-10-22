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

class AddFX extends Component{

    constructor(props){
        super(props);
        this.state = {
            //// FX Schema
            type: 'reg',
            pkey: 0,
            date: getFormattedDate(),
            action: 'FX', 
            notes1: '', 

            amountSent: '',
            rate: '',
            amountLanded: '',
            notes2: '', 

            //// PROGRAM DATA
            fxDirection: 'RIGHT',
            showForm: false,
            showModal: false
        };

        this.closeModal = this.closeModal.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeAmountSent = this.handleChangeAmountSent.bind(this);
        this.handleChangeAmountLanded = this.handleChangeAmountLanded.bind(this);
        this.handleChangeConversionRate = this.handleChangeConversionRate.bind(this);
        this.handleChangeNotes1 = this.handleChangeNotes1.bind(this);
        this.handleChangeNotes2 = this.handleChangeNotes2.bind(this);
    }

    handleSubmit(event){
        let logToAdd = {
            type: 'reg',
            pkey: 0,
            date: getFormattedDate(),
            action: 'FX ' + (this.state.fxDirection === 'RIGHT' ? this.props.brokerData.targetCurrency : this.props.brokerData.baseCurrency),
            notes1: this.state.notes1,

            amountSent: this.state.amountSent,
            rate: this.state.rate,
            amountLanded: this.state.amountLanded,
            notes2: this.state.notes2
        };
            
        this.props.addToLogs(this.props.listOfProfileData, this.props.portfolio, logToAdd);

        this.setState({showModal: true});
       
        event.preventDefault();
    }

    handleChangeNotes1(event){
        this.setState({notes1: event.target.value});
    }

    handleChangeNotes2(event){
        this.setState({notes2: event.target.value});
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

    onValueChange(event){
        this.setState({fxDirection: event.target.value});
    }

    closeModal(){
        this.setState({showModal: false});
    }

    componentDidMount(){
        this.props.updateScreenName("AddFX"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("AddFX"); // todo1: create constants
    }

    getFXForm(){
        let fxDirection = this.state.fxDirection;
        return <form onSubmit={this.handleSubmit}>
            <label>
                
                <div className="textbox-label">From ({fxDirection==='RIGHT' ? this.props.brokerData.baseCurrency : this.props.brokerData.targetCurrency})</div>
                <input 
                type="number" 
                name={fxDirection==='RIGHT' ? 'amountSent' : 'amountLanded'} 
                value={fxDirection==='RIGHT' ? this.state.amountSent : this.state.amountLanded} 
                onChange={fxDirection==='RIGHT' ? this.handleChangeAmountSent : this.handleChangeAmountLanded} 
                className="AddDataTextBox"/>
                <br/><br/>

                <div className="textbox-label">Conversion Rate </div>
                <input 
                type="number" 
                name="rate" 
                value={this.state.rate} 
                onChange={this.handleChangeConversionRate} 
                className="AddDataTextBox"/>
                <br/><br/>

                <div className="textbox-label">To ({fxDirection==='RIGHT' ? this.props.brokerData.targetCurrency : this.props.brokerData.baseCurrency})</div>
                <input 
                type="number" 
                name={fxDirection==='RIGHT' ? 'amountLanded' : 'amountSent'} 
                value={fxDirection==='RIGHT' ? this.state.amountLanded : this.state.amountSent} 
                onChange={fxDirection==='RIGHT' ? this.handleChangeAmountLanded : this.handleChangeAmountSent} 
                className="AddDataTextBox"/>
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
        if(this.props.brokerData === undefined) {
            console.log(">> Could not find broker data");
            return <div className="AddData AddFX Screen"> No Broker Selected </div>;
        }

        return(
            <div className="AddData AddFX Screen">
                <h4>{this.props.portfolio}</h4>
                <div>
                    <label>
                        <input type="radio" value="RIGHT" checked={this.state.fxDirection === "RIGHT"} onChange={this.onValueChange}/> 
                        {this.props.brokerData.baseCurrency} to {this.props.brokerData.targetCurrency}
                    </label>
                    <label>
                        <input type="radio" value="LEFT" checked={this.state.fxDirection === "LEFT"} onChange={this.onValueChange}/>
                        {this.props.brokerData.targetCurrency} to {this.props.brokerData.baseCurrency}
                    </label>
                </div>
                
                <br/>

                {this.getFXForm()}
                <AddItemModal show={this.state.showModal} prompt={"Successfully Added New FX Event to " + this.props.portfolio} closeModal={this.closeModal}/>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        portfolio: state.portfolioNameToShow.name,
        brokerData: state.brokerData.brokerData,

        listOfProfileData: state.listOfProfileData
    }),
    {
        addToLogs
    }
)(AddFX);
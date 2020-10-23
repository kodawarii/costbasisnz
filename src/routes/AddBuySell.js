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

class AddBuySell extends Component{

    constructor(props){
        super(props);

        this.state = {
            //// BUY/SELL Schema
            type: 'reg',
            pkey: 0,
            date: getFormattedDate(),
            action: 'BUY', 
            ticker: '',
            notes1: '', 
            
            shares: 100,
            price: 0,
            total: 0,
            notes2: '', 

            //// PROGRAM DATA
            showForm: false,
            showModal: false
        };

        this.closeModal = this.closeModal.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeShares = this.handleChangeShares.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeTicker = this.handleChangeTicker.bind(this);
        this.handleChangeNotes1 = this.handleChangeNotes1.bind(this);
        this.handleChangeNotes2 = this.handleChangeNotes2.bind(this);
    }

    handleSubmit(event){
        let logToAdd = {
            type: 'reg',
            pkey: 0,
            date: getFormattedDate(),
            action: this.state.action,
            ticker: this.state.ticker,
            notes1: this.state.notes1,

            shares: this.state.shares,
            price: this.state.price,
            total: this.state.total,
            notes2: this.state.notes2
        };
            
        this.props.addToLogs(this.props.listOfProfileData, this.props.portfolio, logToAdd);

        this.setState({showModal: true});

        event.preventDefault();
    }

    // Assuming BuySell is always target currency and not base currency
    getBuySellForm(){
        return <form onSubmit={this.handleSubmit}>
            <label>

                <div className="textbox-label"> Ticker Symbol </div>
                <input 
                type="text" 
                name="ticker"
                value={this.state.ticker}
                onChange={this.handleChangeTicker} 
                className="AddDataTextBox"/>
                <br/><br/>
                
                <div className="textbox-label"> Shares </div>
                <input 
                type="number" 
                name="shares"
                value={this.state.shares}
                onChange={this.handleChangeShares} 
                className="AddDataTextBox"/>
                <br/><br/>

                <div className="textbox-label">Price </div>
                <input 
                type="number" 
                name="price"
                value={this.state.price} 
                onChange={this.handleChangePrice} 
                className="AddDataTextBox"/>
                <br/><br/>

                <div className="textbox-label">Total</div>
                <div> {this.state.total}</div>
                <br/>

                <div className="textbox-label">Notes for Main Log</div>
                <input type="text" name="notes1" value={this.state.notes1} onChange={this.handleChangeNotes1} className="AddDataTextBox"/>
                <br/><br/>

                <div className="textbox-label">Notes for Buy/Sell Log</div>
                <input type="text" name="notes2" value={this.state.notes2} onChange={this.handleChangeNotes2} className="AddDataTextBox"/>
            
            </label>
            <br/><br/>
            <input type="submit" value="Add" className="submit-btn" />
        </form> 
    }

    handleChangeTicker(event){
        this.setState({ticker: event.target.value});
    }

    handleChangeShares(event){
        this.setState({shares: event.target.value, total: this.state.price * event.target.value});
    }

    handleChangePrice(event){
        this.setState({price: event.target.value, total: this.state.shares * event.target.value});
    }
    
    onValueChange(event){
        this.setState({action: event.target.value});
    }

    closeModal(){
        this.setState({showModal: false});
    }
    
    handleChangeNotes1(event){
        this.setState({notes1: event.target.value});
    }

    handleChangeNotes2(event){
        this.setState({notes2: event.target.value});
    }

    componentDidMount(){
        this.props.updateScreenName("AddBuySell"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("AddBuySell"); // todo1: create constants
    }

    render(){
        if(this.props.brokerData === undefined) {
            console.log(">> [AddBuySell] Could not find broker data");
            return <div className="AddBuySell AddFX Screen"> No Broker Selected </div>;
        }

        return(
            <div className="AddBuySell Screen">
                <h4>{this.props.portfolio}</h4>
                <div>
                    <label>
                        <input type="radio" value="BUY" checked={this.state.action === "BUY"} onChange={this.onValueChange}/> 
                        BUY
                    </label>
                    <label>
                        <input type="radio" value="SELL" checked={this.state.action === "SELL"} onChange={this.onValueChange}/>
                        SELL
                    </label>
                </div>
                
                <br/>

                {this.getBuySellForm()}
                <AddItemModal show={this.state.showModal} prompt={"Successfully Added New " + this.state.action + " event to " + this.props.portfolio} closeModal={this.closeModal}/>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        portfolioId: state.brokerData.id,
        portfolio: state.brokerData.broker,
        brokerData: state.brokerData.brokerData,

        listOfProfileData: state.listOfProfileData
    }),
    {
        addToLogs
    }
)(AddBuySell);
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

            //// PROGRAM DATA
            showModal: false
        };

        this.closeModal = this.closeModal.bind(this);
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
        if(this.props.brokerData === undefined) {
            console.log(">> Could not find broker data");
            return <div>No Broker Selected</div>;
        }

        return <form onSubmit={this.handleSubmit}>
            <label>
                
                <div className="textbox-label">From ({this.props.brokerData.baseCurrency})</div>
                <input type="text" type="number" name="amountSent" value={this.state.amountSent} onChange={this.handleChangeAmount} className="AddDataTextBox"/>
                <br/><br/>

                <div className="textbox-label">Conversion Rate </div>
                <input type="text" type="number" name="rate" value={this.state.rate} onChange={this.handleChangeConversionRate} className="AddDataTextBox"/>
                <br/><br/>

                <div className="textbox-label">To ({this.props.brokerData.baseCurrency})</div>
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
            <div className="AddData AddFX Screen">
                <h4>{this.props.portfolio}</h4>
                {this.getFXForm()}
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

        listOfProfileData: state.listOfProfileData
    }),
    {
        addToLogs
    }
)(AddFX);
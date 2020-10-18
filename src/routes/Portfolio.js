// Packages
import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/Portfolio.css';

// Redux
import {
    fetchLogs
} from '../actions/UserDataActions';


// Components
import Ribbon from '../components/Ribbon';
import DataTable from '../components/DataTable';

class Portfolio extends Component{

    // this.props.<redux>

    constructor(props){
        super(props);

        this.state = {
            currentTab: "Log"
        }

        this.getLogs = this.getLogs.bind(this);
        this.updateCurrentTab = this.updateCurrentTab.bind(this);
    }

    componentDidMount(){
        this.props.updateScreenName("portfolio"); // Hacky
        // this.props.fetchLogs(this.props.portfolio); // Use for BEE app // FEE app uses local redux manipulation
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("portfolio"); // todo1: create constants
    }

    updateCurrentTab(tab){
        this.setState({currentTab: tab});
    }

    // TODO Globalize this function
    getBrokerId(brokerName){
        switch(brokerName){
            case 'Interactive Brokers':
                return 'b1';
            case 'Hatch':
                return 'b2';
            case 'Sharsies':
                return 'b3';
            default:
                console.log('> Broker does not exist: ' + brokerName);
                return null;
        }
    }

    // FEE function to determine which logs we want
    getLogs(){
        for(let i = 0; i < this.props.listOfProfileData.listOfProfileData.length; i++){
            if(this.props.listOfProfileData.listOfProfileData[i].id === this.getBrokerId(this.props.portfolio)){
                return this.props.listOfProfileData.listOfProfileData[i].data.log;
            }
            else{
                console.log('>> Portfolio does not exist for user');
            }
        }
    }

    render(){
        return(
            <div className="Portfolio Screen"> 
                <div className="BrokerName"> {this.props.portfolio} </div>
                <Ribbon 
                currentTab={this.state.currentTab}
                updateCurrentTab={this.updateCurrentTab} 
                />

                <DataTable 
                portfolio={this.props.portfolio}
                currentTab={this.state.currentTab}
                data={this.getLogs()}
                />
            </div>
        );
    }
}

export default connect(
    (state) => ({ 
        portfolio: state.portfolioNameToShow.name,
        
        // BEE logs
        // logs: state.logs.logs

        // FEE logs
        listOfProfileData: state.listOfProfileData
    }),
    {
        fetchLogs
    }
)(Portfolio);
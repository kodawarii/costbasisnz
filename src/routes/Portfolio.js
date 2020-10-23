// Packages
import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/Portfolio.css';

// Redux
import {
    
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

        this.getData = this.getData.bind(this);
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

    getData(typeOfData){
        for(let i = 0; i < this.props.profileData.listOfProfileData.length; i++){
            if(this.props.profileData.listOfProfileData[i].id === this.props.portfolioId){
                if(typeOfData === 'logs') return this.props.profileData.listOfProfileData[i].data.log;
                else if(typeOfData === 'holdings') return this.props.profileData.listOfProfileData[i].data.holdings;
            }
        }
        return;
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
                logs={this.getData("logs")}
                holdings={this.getData("holdings")}
                />
            </div>
        );
    }
}

export default connect(
    (state) => ({ 
        portfolioId: state.portfolioIdInUse.id,
        portfolio: state.portfolioNameToShow.name,
        brokers: state.brokers.brokers,
        
        // BEE logs
        // logs: state.logs.logs

        // FEE logs
        profileData: state.listOfProfileData
    }),
    {
        //fetchLogs
    }
)(Portfolio);
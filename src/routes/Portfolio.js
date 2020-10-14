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
            currentTab: "Topup / Withdraw"
        }
    }

    updateCurrentTab(tab){
        this.setState({currentTab: tab});
    }

    componentDidMount(){
        this.props.updateScreenName("portfolio"); // Hacky
        this.props.fetchLogs(this.props.portfolio);
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("portfolio"); // todo1: create constants
    }

    render(){
        return(
            <div className="Portfolio Screen"> 
                <div className="BrokerName"> {this.props.portfolio} </div>
                <Ribbon 
                currentTab={this.state.currentTab}
                updateCurrentTab={this.updateCurrentTab.bind(this)} 
                />

                <DataTable 
                portfolio={this.props.portfolio}
                currentTab={this.state.currentTab}
                data={this.props.logs}
                />
            </div>
        );
    }
}

export default connect(
    (state) => ({ 
        portfolio: state.portfolioNameToShow.name,
        logs: state.logs.logs
    }),
    {
        fetchLogs
    }
)(Portfolio);
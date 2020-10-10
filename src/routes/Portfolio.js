// Packages
import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/Portfolio.css';

// Components
import Ribbon from '../components/Ribbon';
import DataTable from '../components/DataTable';

class Portfolio extends Component{

    // props
    // this.props.<redux-store>
        // this.props.portfolio

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
                currentTab={this.state.currentTab}
                data={this.props.logs}
                />
            </div>
        );
    }
}

export default connect(
    (state) => ({ 
        portfolio: state.portfolioToShow.portfolioName,
        logs: state.logs.logs
    }),
    {
        
    }
)(Portfolio);
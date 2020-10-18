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

    // FEE function to determine which logs we want
    getLogs(){
        console.log(this.props.portfolio);
        console.log(this.props.b1);
        console.log(this.props.b2);
        console.log(this.props.b3);
        if(this.props.portfolio === 'Interactive Brokers'){
            return this.props.b1.log;
        }
        else if(this.props.portfolio === 'Hatch'){
            return this.props.b2.log;
        }
        else if(this.props.portfolio === 'Sharsies'){
            return this.props.b3.log;
        }
        else{
            console.log('>> Portfolio does not exist');
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
        b1: state.logs.b1,
        b2: state.logs.b2,
        b3: state.logs.b3
    }),
    {
        fetchLogs
    }
)(Portfolio);
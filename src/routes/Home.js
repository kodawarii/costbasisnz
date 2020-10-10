// Packages
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Home.css';

// Redux
import { 
    fetchBrokers, 
    addToBrokers,
    fetchLogs
} from '../actions/UserDataActions';

import { 
    fetchPortfolioNameToShow, 
    updatePortfolioNameToShow 
} from '../actions/ProgramActions';

// Components


class Home extends Component{

    // this.props.<redux>
    // this.props.updateScreenName()
    // this.props.brokers
    // this.props.setBrokers()

    componentDidMount(){
        this.props.fetchBrokers();
        this.props.fetchPortfolioNameToShow();
        this.props.fetchLogs();
        this.props.updateScreenName("home");
    }

    componentDidUpdate(){
        this.props.updateScreenName("home"); // todo1: create constants
    }

    renderBrokers(){
        if(this.props.brokers === undefined) return "Loading Brokers";
        
        return this.props.brokers.map( (broker, i) => {
            return <ul key={i} className="Brokers">
                <Link to={'/Portfolio'}>
                    <li onClick={ () => this.props.updatePortfolioNameToShow(broker.name)} className="Broker">{broker.name}</li>
                </Link>
            </ul>
        });
    }

    render(){
        return(
            <div className="Home Screen">
                <div className="Brokers">
                    {this.renderBrokers()}
                </div>
                <div className="AddBroker-outer">
                    <Link to={'/AddBroker'}>
                        <button className="Add-broker-btn">+</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({ 
        brokers: state.brokers.items
    }),
    {
        fetchPortfolioNameToShow, updatePortfolioNameToShow,
        fetchBrokers, addToBrokers, fetchLogs
    }
)(Home);
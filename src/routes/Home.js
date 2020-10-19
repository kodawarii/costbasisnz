// Packages
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Home.css';

// Redux
import { 
    fetchBrokers,
    // fetchLogs
} from '../actions/UserDataActions';

import { 
    updatePortfolioNameToShow 
} from '../actions/ProgramActions';

class Home extends Component{

    // this.props.<redux>
    // this.props.updateScreenName()

    componentDidMount(){
        // this.props.fetchBrokers(); // To use when we have backend API implemented
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
                <div className="AddBrokerBtn-wrapper">
                    <Link to={'/AddBroker'}>
                        <button className="AddBtn">+</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({ 
        brokers: state.brokers.brokers
    }),
    {
        updatePortfolioNameToShow,
        fetchBrokers
    }
)(Home);
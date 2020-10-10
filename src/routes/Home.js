// Packages
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Home.css';

// Redux
import { fetchBrokers } from '../actions/brokerActions';
import { fetchPortfolioNameToShow, updatePortfolioNameToShow } from '../actions/ProgramActions';
import { fetchLogs } from '../actions/DataTableActions';

// Components


class Home extends Component{

    // props
    // this.props.<redux-store>
        // this.props.fetchBrokers()
        // this.props.updatePortfolio()
        // this.props.fetchLogs();
    // this.props.updateScreenName()
    // this.props.currentScreenName

    constructor(props){
        super(props);
        this.state={
            brokers: []
        }
    }

    componentDidMount(){
        this.props.fetchBrokers();
        this.props.fetchPortfolioNameToShow();
        this.props.fetchLogs();
        this.props.updateScreenName("home");
    }

    componentDidUpdate(){
        this.props.updateScreenName("home"); // todo1: create constants
    }

    setBrokers = (brokers) => {
        this.setState({brokers});
    }

    renderBrokers(){
        return this.state.brokers.map( (broker, i) => {
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
                <div className="Activator">
                    <button onClick={() => this.setBrokers(this.props.brokers)} className="Activator-btn"> Fetch </button>
                </div>
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
        brokers: state.brokers.brokers,
    }),
    {
        fetchBrokers, 
        fetchPortfolioNameToShow, updatePortfolioNameToShow,
        fetchLogs
    }
)(Home);
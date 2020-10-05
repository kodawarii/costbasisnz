// Packages
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Home.css';

// Redux
import { fetchBrokers } from '../actions/brokerActions';

// Components


class Home extends Component{

    // props
    // this.props.<redux-store>
    // this.props.fetchBrokers()
    // this.props.updateScreenName()
    // this.props.currentScreenName
    // this.props.updatePortfolio()

    constructor(props){
        super(props);
        this.state={
            brokers: []
        }
    }

    componentDidMount(){
        console.log("home-mounted");
        this.props.fetchBrokers();
        this.props.updateScreenName("home");
    }

    componentDidUpdate(){
        console.log("home-updated");
        this.props.updateScreenName("home"); // todo1: create constants
    }

    setBrokers = (brokers) => {
        this.setState({brokers});
    }

    renderBrokers(){
        return this.state.brokers.map( (broker, i) => {
            console.log(broker);
            return <ul key={i} className="Brokers">
                <Link to={'/Portfolio'}>
                    <li onClick={this.props.updatePortfolio} className="Broker">{broker.name}</li>
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
                <div className="Add">
                    <Link to={'/Add'}>
                        <button className="Add-btn">+</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({ brokers: state.brokers.items}),
    {
        fetchBrokers
    }
)(Home);
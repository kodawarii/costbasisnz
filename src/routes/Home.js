// Packages
import React, {Component} from 'react';
import { connect } from 'react-redux';
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

    constructor(props){
        super(props);
        this.state={
            brokers: []
        }
    }

    componentDidMount(){
        console.log("home-mounted");
        this.props.fetchBrokers();
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
            return <ul key={i}>
                <li>{broker.name}</li>
            </ul>
        });
    }

    render(){
        return(
            <div className="Home">
                <div className="Brokers">
                    {this.renderBrokers()}
                </div>
                <div className="Add">
                    +
                </div>
                <button onClick={() => this.setBrokers(this.props.brokers)}> click </button>
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
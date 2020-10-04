// Packages
import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/Home.css';

// Redux
import { fetchBrokers } from '../actions/brokerActions';

// Components
import TestComponent from '../components/testcomponent';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            brokers: []
        }
    }

    componentDidMount(){
        this.props.fetchBrokers();
    }

    setBrokers = (brokers) => {
        this.setState({brokers});
    }

    render(){
        return(
            <div className="Home">
                Home works
                Brokers: {this.state.brokers.toString()}
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
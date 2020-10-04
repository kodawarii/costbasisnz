import React, {Component} from 'react';
import { connect } from 'react-redux';

import {fetchBrokers} from '../actions/brokerActions'

class TestComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
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
            <div>
                redux test
                <p>the brokers: {this.state.brokers.toString()}</p>

                <button onClick={() => this.setBrokers(this.props.brokers)}> click </button>
            </div>
        );
    }
}

export default connect(
    (state) => ({brokers: state.brokers.items}), 
    {
        fetchBrokers
    }
)(TestComponent);
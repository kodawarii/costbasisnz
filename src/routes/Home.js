// Packages
import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/Home.css';

// Redux
import { fetchBrokers } from '../actions/brokerActions';

// Components


class Home extends Component{

    // props
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

    render(){
        return(
            <div className="Home">
                <div className="Brokers">
                    <ul>
                        <li>
                            Interactive Brokers
                        </li>
                        <li>
                            Hatch
                        </li>
                    </ul>
                </div>
                <div className="Add">
                    +
                </div>
                <div className="Footer">
                    Copyright
                </div>

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
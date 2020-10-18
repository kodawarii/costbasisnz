import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/AddDataScreens.css';

// Redux
import { 
    addToBrokers
} from '../actions/UserDataActions';

class AddBroker extends Component{

    // this.props.addBroker()

    constructor(props){
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        function uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
              var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
              return v.toString(16);
            });
        }

        let brokerToAdd = {
            name: this.state.value,
            id: uuidv4().substring(0, 8)
        };
        
        this.props.addToBrokers(this.props.brokers, brokerToAdd);
        
        event.preventDefault();
    }

    componentDidMount(){
        this.props.updateScreenName("addBroker"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("addBroker"); // todo1: create constants
    }

    render(){
        return(
            <div className="AddData AddBroker Screen">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter Broker <br/><br/>
                        <input type="text" name="name" value={this.state.value} onChange={this.handleChange} className="AddDataTextBox"/>
                    </label>
                    <br/><br/>
                    <input type="submit" value="Add" className="submit-btn" />
                </form> 
            </div>
        );
    }
}

export default connect(
    (state) => ({ 
        brokers: state.brokers.brokers
    }),
    {
        addToBrokers
    }
)(AddBroker);
import React, {Component} from 'react';
import '../styles/AddBroker.css';

class AddBroker extends Component{

    // this.props
    
    constructor(props){
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        console.log(this.state.value);
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        console.log("SUBMIT: " +this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <div className="AddBroker Screen">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter Broker <br/><br/>
                        <input type="text" name="name" value={this.state.value} onChange={this.handleChange} className="AddBrokerTextBox"/>
                    </label>
                    <br/><br/>
                    <p className="msg"> Broker Portfolio Deletion in Settings (Todo: 1. Delete All Data, or 2. Hide from Home) </p>
                    <input type="submit" value="Add" className="AddBroker-submit" />
                </form> 
            </div>
        );
    }
}

export default AddBroker;
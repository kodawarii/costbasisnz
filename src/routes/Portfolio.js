// Packages
import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/Portfolio.css';

class Portfolio extends Component{

    // props
    // this.props.<redux-store>
        // this.props.portfolio

    componentDidMount(){
        this.props.updateScreenName("portfolio"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("portfolio"); // todo1: create constants
    }

    render(){
        //console.log("fucking: " + this.props.brokers[0].name);
        

        return(
            <div className="Portfolio Screen"> 
                {this.props.portfolio}
            </div>
        );
    }
}

export default connect(
    (state) => ({ 
        brokers: state.brokers.brokers,
        portfolio: state.portfolio.portfolio
    }),
    {
        
    }
)(Portfolio);
// Packages
import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/Portfolio.css';

// Components
import Ribbon from '../components/Ribbon';
import DataTable from '../components/DataTable';

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
                <Ribbon />
                <DataTable />
            </div>
        );
    }
}

export default connect(
    (state) => ({ 
        portfolio: state.portfolio.portfolio
    }),
    {
        
    }
)(Portfolio);
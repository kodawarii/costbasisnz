import React, {Component} from 'react';
import '../styles/Portfolio.css';

class Portfolio extends Component{

    // props
    // this.props.<redux-store>
    // this.props.updateScreenName()
    // this.props.portfolio

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("portfolio-mounted");
        this.props.updateScreenName("portfolio"); // Hacky
    }

    componentDidUpdate(){
        console.log("portfolio-updated");
        this.props.updateScreenName("portfolio"); // todo1: create constants
    }

    render(){
        return(
            <div className="Portfolio Screen"> 
                {this.props.portfolio}
            </div>
        );
    }
}

export default Portfolio;
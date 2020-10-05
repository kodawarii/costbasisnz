import React, {Component} from 'react';

class Portfolio extends Component{

    // props
    // this.props.updateScreenName()

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
            <div className="Portfolio"> 
                Portfolio works
            </div>
        );
    }
}

export default Portfolio;
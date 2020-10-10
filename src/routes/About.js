import React, {Component} from 'react';

class About extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.updateScreenName("about"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("about"); // todo1: create constants
    }

    render(){
        return(
            <div className="About Screen">
                About works
            </div>
        );
    }
}

export default About;
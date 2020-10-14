import React, {Component} from 'react';

class SelectAddType extends Component{
    componentDidMount(){
        this.props.updateScreenName("SelectAddType"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("SelectAddType"); // todo1: create constants
    }

    render(){
        return(
            <div className="SelectAddType Screen">
                SelectAddType works
            </div>
        );
    }
}

export default SelectAddType;
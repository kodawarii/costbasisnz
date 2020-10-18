import React, {Component} from 'react';
import '../styles/AddDataScreens.css';

class AddItemModal extends Component{

    // this.props.show
    // this.props.prompt

    render(){
        if(this.props.show){
            return(
                <div className="AddItemModal">
                    {this.props.prompt}
                </div>
            );
        }
        else{
            return(
                <div className="AddItemModal-hide" />
            );
        }
    }
}

export default AddItemModal;
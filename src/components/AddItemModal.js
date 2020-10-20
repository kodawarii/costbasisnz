import React, {Component} from 'react';
import '../styles/AddDataScreens.css';

class AddItemModal extends Component{

    // this.props.show
    // this.props.prompt
    // this.closeModal

    render(){
        if(this.props.show){
            return(
                <div className="AddItemModal">
                    {this.props.prompt}
                    <button onClick={this.props.closeModal} className="closeBtn">Close</button>
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
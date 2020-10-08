import React, {Component} from 'react';
import '../styles/Notes.css';

export default class Notes extends Component {
    
    // this.props.notes
    // this.props.show

    render(){
        let show = this.props.show ? "Notes " : "Notes-hide ";

        return(
            <div className={show}>
                {this.props.notes}
            </div>
        );
    }
}
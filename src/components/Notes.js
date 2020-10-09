import React, {Component} from 'react';
import '../styles/Notes.css';

export default class Notes extends Component {
    
    // this.props.notes
    // this.props.isVisible
    // this.props.closeNotes

    render(){
        console.log(">> " + this.props.isVisible);
        let isModalVisibleClass = this.props.isVisible ? " Notes " : " Notes-hide ";

        return(
            <div className={isModalVisibleClass}>
                <div className=" Notes-exit " onClick={this.props.closeNotes}>
                    x
                </div>
                <div className="Notes-content">
                    {this.props.notes}
                </div>
            </div>
        );
    }
}
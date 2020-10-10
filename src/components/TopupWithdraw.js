import React, {Component} from 'react';
import '../styles/DataTable.css';

import Notes from './Notes';

class TopupWithdraw extends Component{

    // this.props.data

    constructor(props){
        super(props);

        this.state = {
            showNotes: false,
            notes: ""
        }
    }

    closeNotes(){
        this.setState({showNotes: false});
    }

    openNotes(notes){
        this.setState({showNotes: true, notes});
    }

    getData(){
        if(this.props.data === undefined) return <tr>
                <td>Must</td>
                <td>Fetch</td>
                <td>First</td>
                <td>From</td>
                <td>The</td>
                <td>User</td>
                <td>ok</td>
            </tr>
    }

    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Ref</th>
                            <th>Date</th>
                            <th>Action</th>
                            <th>AUD</th>
                            <th>Rate</th>
                            <th>USD</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getData()}
                    </tbody>
                </table>
                <div className="AddLog">
                    ADD +
                </div>
                
                <Notes notes={this.state.notes} isVisible={this.state.showNotes} closeNotes={this.closeNotes.bind(this)}/>
            </div>
        );
    }
}

export default TopupWithdraw;
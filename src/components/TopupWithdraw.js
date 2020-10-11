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

        return this.props.data.map ((entry, i) => {
            if(entry.type === "end1" || entry.type === "end2") {
                // Continue;
            }
            else if(entry.type === "start"){ // TODO: REFACTOR START ROWS
                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td><b>{entry.period}</b></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                <td className="OpenNotes" onClick={ () => this.openNotes(entry.notes1)}> x </td>
            </tr>
            }
            else if(entry.action.includes("Topup") ||
            entry.action.includes("Withdraw") ||
            entry.action.includes("FX")){ // TODO: KEEP CONSTANTS AND SCHEMA AS CASE SENSITIVE
                let actionStringClassName = " "; // TODO: REFACTOR ACROSS ALL SCREENS

                if(entry.action.includes("Topup")){
                    actionStringClassName = " Topup ";
                }
                else if(entry.action.includes("Withdraw")){
                    actionStringClassName = " Withdraw ";
                }
                else if(entry.action.includes("FX")){
                    actionStringClassName = " FX ";
                }

                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td>{entry.date}</td>
                    <td className={actionStringClassName}>{entry.action}</td>
                    <td>{entry.amountAUD}</td>
                    <td>{entry.rate}</td>
                    <td>{entry.amountUSD}</td>
                    <td className="OpenNotes" onClick={ () => this.openNotes(entry.notes2)}> x </td>
                </tr>
            }

            // return something
        });
    }

    render(){
        return(
            <div>
                <div>
                    <p>Total AUD= </p>
                    <p>Total USD= </p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Ref</th>
                            <th className="Date-topup-withdraw">Date</th>
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
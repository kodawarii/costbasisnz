import React, {Component} from 'react';
import '../styles/DataTable.css';

// components 
import Note from './Note';

class Log extends Component {
    
    // this.props.data

    constructor(props){
        super(props);
        this.state = {
            showNote: false,
            notes: ""
        }
    }

    closeNote(){
        this.setState({showNote: false, notes: ""});
    }

    openNotes(notes){
        this.setState({showNote: true, notes});
    }

    getData(){
        if(this.props.data === undefined) return <tr><td>must fetch first</td></tr>;

        return this.props.data.map( (entry, i) => {
            if(entry.type === "start"){
                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td><b>{entry.period}</b></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            }
            else if(entry.type === "reg"){
                let actionStringClassName = " ";

                if(entry.action.includes("Topup")){
                    actionStringClassName = " Topup ";
                }
                else if(entry.action.includes("BUY")){
                    actionStringClassName = " Buy ";
                }
                else if(entry.action.includes("SELL")){
                    actionStringClassName = " Sell ";
                }
                else if(entry.action.includes("Withdraw")){
                    actionStringClassName = " Withdraw ";
                }
                else if(entry.action.includes("Dividend")){
                    actionStringClassName = " Dividend ";
                }
                else if(entry.action.includes("Fee")){
                    actionStringClassName = " Fee ";
                }

                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td>{entry.date}</td>
                    
                    <td className={actionStringClassName}>{entry.action}</td>
                    
                    <td>{entry.ticker}</td>
                    <td className="OpenNotes" onClick={ () => this.openNotes(entry.notes)}> x </td>
                </tr>
            }
            else if(entry.type === "end1"){
                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td></td>
                    <td><b>BOUGHT</b></td>
                    <td>{entry.bought}</td>
                    <td></td>
                </tr>
            }
            else if(entry.type === "end2"){
                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td></td>
                    <td><b>SOLD</b></td>
                    <td>{entry.sold}</td>
                    <td></td>
                </tr>
            }
        });
    }

    render(){
        let note = this.state.showNote ? <Note /> : "";

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Ref</th>
                            <th>Date</th>
                            <th>Action</th>
                            <th>Symbol</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getData()}
                    </tbody>
                </table>
                <div className="Note">
                    {note}
                </div>
                <div className="AddLog">
                    ADD +
                </div>
            </div>
        );
    }
}

export default Log;
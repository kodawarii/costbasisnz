import React, {Component} from 'react';
import '../styles/DataTable.css';

// components 
import Notes from './Notes';

class Log extends Component {
    
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
        if(this.props.data === undefined) return <tr><td>must fetch first</td></tr>;

        return this.props.data.map( (entry, i) => {
            if(entry.type === "start"){
                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td><b>{entry.period}</b></td>
                    <td></td>
                    <td></td>
                    <td className="OpenNotes" onClick={ () => this.openNotes(entry.notes1)}> x </td>
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
                else if(entry.action.includes("FX")){
                    actionStringClassName = " FX ";
                }

                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td>{entry.date}</td>
                    
                    <td className={actionStringClassName}>{entry.action}</td>
                    
                    <td>{entry.ticker}</td>
                    <td className="OpenNotes" onClick={ () => this.openNotes(entry.notes1)}> x </td>
                </tr>
            }
            else if(entry.type === "end1"){
                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td></td>
                    <td><b>BOUGHT</b></td>
                    <td>{entry.bought}</td>
                    <td className="OpenNotes" onClick={ () => this.openNotes(entry.notes1)}> x </td>
                </tr>
            }
            else if(entry.type === "end2"){
                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td></td>
                    <td><b>SOLD</b></td>
                    <td>{entry.sold}</td>
                    <td className="OpenNotes" onClick={ () => this.openNotes(entry.notes1)}> x </td>
                </tr>
            }
        });
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
                            <th>Symbol</th>
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

export default Log;
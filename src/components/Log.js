// Packages
import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import '../styles/DataTable.css';

// Redux
import {connect} from 'react-redux';

// Components 
import Notes from './Notes';

class Log extends Component {
    
    // this.props.logs
    // this.props.portfolio

    constructor(props){
        super(props);
        this.state = {
            showNotes: false,
            notes: ''
        }
    }

    closeNotes(){
        this.setState({showNotes: false});
    }

    openNotes(notes){
        this.setState({showNotes: true, notes});
    }

    getRows(){
        return this.props.logs.map( (entry, i) => {
            let notesArrow1 = entry.notes1 === '' ? '' : '⭦';

            if(entry.type === "start"){
                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td><b>{entry.period}</b></td>
                    <td></td>
                    <td></td>
                    <td className="OpenNotes" onClick={ () => this.openNotes(entry.notes1)}> {notesArrow1} </td>
                    <td className="Edit-row">⚙</td>
                </tr>
            }
            else if(entry.type === "reg"){
                let actionStringClassName = " "; // TODO: REFACTOR ACROSS ALL SCREENS

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
                    <td className="OpenNotes" onClick={ () => this.openNotes(entry.notes1)}> {notesArrow1} </td>
                    <td className="Edit-row">⚙</td>
                </tr>
            }
            else if(entry.type === "end1"){
                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td></td>
                    <td><b>BOUGHT</b></td>
                    <td>{entry.bought}</td>
                    <td className="OpenNotes" onClick={ () => this.openNotes(entry.notes1)}> {notesArrow1} </td>
                    <td className="Edit-row">⚙</td>
                </tr>
            }
            else if(entry.type === "end2"){
                return <tr key={i} className="dataTable-row log-row">
                    <td>{entry.pkey}</td>
                    <td></td>
                    <td><b>SOLD</b></td>
                    <td>{entry.sold}</td>
                    <td className="OpenNotes" onClick={ () => this.openNotes(entry.notes1)}> {notesArrow1} </td>
                    <td className="Edit-row">⚙</td>
                </tr>
            }
            else{
                // This can be here since log captures ALL types of activity
                console.log("> ERROR: LOG TYPE DOES NOT EXIST: " + entry.type);
                return <tr><td>ERROR</td></tr>;
            }
        });
    }

    render(){
        if(this.props.brokerData === undefined) return <div>No Data to show / Broker not selected</div>;
        if(this.props.logs === undefined) return <div>No Data to show / Broker not selected</div>;

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
                            <th className="Edit-row">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getRows()}
                    </tbody>
                </table>

                <Link to={'/SelectAddType'}>
                    <div className="AddLogBtn-wrapper">
                        <button className="AddBtn">+</button>
                    </div>
                </Link>
                
                <Notes notes={this.state.notes} isVisible={this.state.showNotes} closeNotes={this.closeNotes.bind(this)}/>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        brokerData: state.brokerData.brokerData
    }),
    {

    }
)(Log);
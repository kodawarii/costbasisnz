import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import '../styles/DataTable.css';

// Redux
import {connect} from 'react-redux';

// Components
import Notes from './Notes';

class TopupWithdraw extends Component{

    // this.props.logs

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
        // TODO: have config file, setState in componentDidMount for these class names
        let _CLASSNAME_DATAROW="topupwithdraw-row";

        return this.props.logs.map ((entry, i) => {
            let notesArrow1 = entry.notes1 === '' ? '' : '⭦';
            let notesArrow2 = entry.notes2 === '' ? '' : '⭦';

            if(entry.type === "end1" || entry.type === "end2") {
                // Continue;
            }

            else if(entry.type === "start"){ // TODO: REFACTOR START ROWS
                return <tr key={i} className={_CLASSNAME_DATAROW}>
                    <td>{entry.pkey}</td>
                    <td><b>{entry.period}</b></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="OpenNotes" onClick={ () => this.openNotes(entry.notes1)}> {notesArrow1} </td>
                    <td className="Edit-row">⚙</td>
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
            
                return <tr key={i} className={_CLASSNAME_DATAROW}>
                    <td>{entry.pkey}</td>
                    <td>{entry.date}</td>
                    <td className={actionStringClassName}>{entry.action}</td>
                    <td>{entry.amountSent === undefined || isNaN(parseInt(entry.amountSent)) ? '' : entry.amountSent.toLocaleString()}</td>
                    <td>{entry.rate === undefined || isNaN(parseFloat(entry.rate)) ? '' : parseFloat(entry.rate).toFixed(4)}</td>
                    <td>{entry.amountLanded === undefined || isNaN(parseInt(entry.amountLanded)) ? '' : entry.amountLanded.toLocaleString()}</td>
                    <td className="OpenNotes" onClick={ () => this.openNotes(entry.notes2)}> {notesArrow2} </td>
                    <td className="Edit-row">⚙</td>
                </tr>
            }
            
            return;
        });
    }

    render(){
        if(this.props.brokerData === undefined) return <div>No Data to show / Broker not selected</div>;
        
        return(
            <div>
                <div>
                    <p>Total {this.props.brokerData.baseCurrency}: </p>
                    <p>Total {this.props.brokerData.targetCurrency}: </p>
                </div>
                <table className="log-table">
                    <thead>
                    <tr className="table-headers">
                        <th>REF</th>
                        <th>DATE</th>
                        <th>ACTION</th>
                        <th>{this.props.brokerData.baseCurrency}</th>
                        <th>RATE</th>
                        <th>{this.props.brokerData.targetCurrency}</th>
                        <th>NOTES</th>
                        <th className="Edit-row">EDIT</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.getRows()}
                    </tbody>
                </table>

                <Link to={'/SelectAddTypeTopupWithdrawFX'}>
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
)(TopupWithdraw);
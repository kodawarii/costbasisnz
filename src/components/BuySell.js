import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import '../styles/DataTable.css';

// Redux
import {connect} from 'react-redux';

// Components
import Notes from './Notes';

class BuySell extends Component{

    // this.props.data

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

    getData(){
        return this.props.data.map ((entry, i) => {
            let notesArrow1 = entry.notes1 === '' ? '' : '⭦';
            let notesArrow2 = entry.notes2 === '' ? '' : '⭦';

            if(entry.type === "end1" || entry.type === "end2" || entry.type === 'start') {
                // Continue;
            }
            
            else if(entry.action.includes('BUY') ||
            entry.action.includes('SELL')){ // TODO: KEEP CONSTANTS AND SCHEMA AS CASE SENSITIVE
                let actionStringClassName = " "; // TODO: REFACTOR ACROSS ALL SCREENS

                if(entry.action.includes("BUY")){
                    actionStringClassName = " Buy ";
                }
                else if(entry.action.includes("SELL")){
                    actionStringClassName = " Sell ";
                }
            
                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td>{entry.date}</td>
                    <td className={actionStringClassName}>{entry.action}</td>
                    <td>{entry.ticker}</td>
                    <td>{entry.shares.toFixed(4)}</td>
                    <td>{entry.price.toLocaleString()}</td>
                    <td>{entry.total.toLocaleString()}</td>
                    <td className="OpenNotes" onClick={ () => this.openNotes(entry.notes2)}> {notesArrow2} </td>
                    <td className="Edit-row">⚙</td>
                </tr>
            }
            
            // return something
        });
    }

    render(){
        if(this.props.data === undefined) return <div>No Data to show / Broker not selected</div>;

        return(
            <div>
                <div>
                    <p>Total NZD Est. Invested= </p>
                    <p>Total USD Invested= </p>
                    <p> seed= </p>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Ref</th>
                        <th>Date</th>
                        <th>Action</th>
                        <th>Ticker</th>
                        <th>Shares</th>
                        <th>Price</th>
                        <th>Total Price</th>
                        <th>Notes</th>
                        <th className="Edit-row">Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.getData()}
                    </tbody>
                </table>

                <Link to={'/SelectAddTypeBuySell'}>
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
)(BuySell);
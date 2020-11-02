import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import '../styles/DataTable.css';

// Redux
import {connect} from 'react-redux';

// Components
import Notes from './Notes';

class BuySell extends Component{

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

    // Notes
    // foreach (stock in holdings)
    //      foreach (buy in logs)
    //      foreach (sell in logs)
    //    Cost Basis Info: << Add this as a <td> element
    //      Show Average Price
    //      Show total Invested
    // <empty tr/>
    getRows(){
        // TODO: have config file, setState in componentDidMount for these class names
        let _CLASSNAME_DATAROW="buysell-row";

        return this.props.logs.map ((entry, i) => {
            let notesArrow1 = entry.notes1 === '' ? '' : '⭦';
            let notesArrow2 = entry.notes2 === '' ? '' : '⭦';

            if(entry.type === "end1" || entry.type === "end2" || entry.type === 'start') {
                // Continue;
            }
            
            else if(entry.action.includes('BUY') ||
            entry.action.includes('SELL')){ // TODO: KEEP CONSTANTS AND SCHEMA AS CASE SENSITIVE
                let actionStringClassName = " "; // TODO: REFACTOR ACROSS ALL SCREENS

                if(entry.action.includes("BUY")){
                    actionStringClassName = "Buy";
                }
                else if(entry.action.includes("SELL")){
                    actionStringClassName = "Sell";
                }
            
                return <tr key={i} className={_CLASSNAME_DATAROW}>
                    <td>{entry.pkey}</td>
                    <td>{entry.date}</td>
                    <td className={actionStringClassName + "-outer"}><span className={actionStringClassName}>{entry.action}</span></td>
                    <td>{entry.ticker}</td>
                    <td className="shares"><b>{parseFloat(entry.shares).toFixed(0).toLocaleString()}</b></td>
                    <td className="price1">{parseFloat(entry.price).toFixed(2).toLocaleString()}</td>
                    <td className="price1">{parseFloat(entry.total).toFixed(2).toLocaleString()}</td>
                    <td className="price2">899.45</td>
                    <td className="price2">2,450.33</td>
                    <td className="gains-dollars"><span className="">+ 55.67</span></td>
                    <td className="percentOfLosses"><span className="percentOfLosses-wrapper">- 19.20%</span></td>
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
                    <h5> CostBasisNZ </h5>
                    <p>Total NZD Est. Invested= </p>
                    <p>Total USD Invested= </p>
                    <p> seed= </p>
                </div>
                <table className="log-table">
                    <thead>
                        <tr className="table-headers">
                            <th>REF</th>
                            <th>DATE</th>
                            <th>ACTION</th>
                            <th>TICKER</th>
                            <th>SHARES</th>
                            <th>PRICE</th>
                            <th>TOT PRICE</th>
                            <th>CURR PRICE</th>
                            <th>MKT VAL</th>
                            <th>$ P/L</th>
                            <th>% P/L</th>
                            <th>NOTES</th>
                            <th className="Edit-row">EDIT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getRows()}
                    </tbody>
                </table>

                <Link to={'/AddBuySell'}>
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
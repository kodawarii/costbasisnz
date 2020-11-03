import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import '../styles/DataTable.css';

// Redux
import {connect} from 'react-redux';

// Components
import Notes from './Notes';

class BuySell extends Component{

    // this.props.logs
    // this.props.holdings

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

    processLog(){
        let processedLog = [];

        for(let i = 0; i < this.props.holdings.length; i++){
            let stockName = this.props.holdings[i].ticker;
            let summarizer = {
                type: 'stockEnd',
                action: 'none',
                ticker: stockName,
                totalShares: 0,
                totalSpent: 0,
                totalCurrVal: 0,
                totalDollarGains: 0,
                avgPercentGains: 0
            };

            // Get all BUYS
            for(let j = 0; j < this.props.logs.length; j++){
                if(this.props.logs[j].action === 'BUY' && this.props.logs[j].ticker === stockName){
                    processedLog.push(this.props.logs[j]);

                    summarizer.totalShares += this.props.logs[j].shares;
                    summarizer.totalSpent += this.props.logs[j].total;
                    summarizer.totalCurrVal += 200;
                    summarizer.totalDollarGains += 33;
                    summarizer.avgPercentGains = 17.8;
                }
            }

            // Get all SELLS
            for(let j = 0; j < this.props.logs.length; j++){
                if(this.props.logs[j].action === 'SELL' && this.props.logs[j].ticker === stockName){
                    processedLog.push(this.props.logs[j]);
                }
            }

            processedLog.push(summarizer);
        }

        return processedLog;
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
        
        let processedLog = this.processLog();

        return processedLog.map ((entry, i) => {
            let notesArrow1 = entry.notes1 === '' ? '' : '⭦';
            let notesArrow2 = entry.notes2 === '' ? '' : '⭦';
            
            if(entry.action.includes('BUY') || entry.action.includes('SELL')){ // TODO: KEEP CONSTANTS AND SCHEMA AS CASE SENSITIVE
                let _CLASSNAME_ACTION_COL = " "; // TODO: REFACTOR ACROSS ALL SCREENS
                let _CLASSNAME_SELL_FONTCOLOR = " ";
                let _CLASSNAME_PRICE1_FONTCOLOR = " ";
                let _CLASSNAME_PERCENT_PL = " ";
                let _CLASSNAME_PERCENT_PL_WRAPPER = " ";

                let currPrice = "-";
                let mktVal = "-";
                let dollarPL = "-";
                let percentPL = "-";

                if(entry.action.includes("BUY")){
                    _CLASSNAME_ACTION_COL = "Buy";
                    _CLASSNAME_PRICE1_FONTCOLOR = "price1";

                    currPrice = 350;
                    mktVal = 4556.23; // = (shares - sold ) * currPrice
                    dollarPL = "+25.60";
                    percentPL = -24.01;

                    if(percentPL < 0){
                        percentPL += "%";
                        _CLASSNAME_PERCENT_PL = " percentOfLosses ";
                        _CLASSNAME_PERCENT_PL_WRAPPER = " percentOfLosses-wrapper ";
                    }
                    else{
                        // TODO: gains css styles
                    }
                }
                else if(entry.action.includes("SELL")){
                    _CLASSNAME_ACTION_COL = "Sell";
                    _CLASSNAME_SELL_FONTCOLOR = " sell-font ";
                    _CLASSNAME_PRICE1_FONTCOLOR = " sell-font ";
                }
            
                return <tr key={i} className={_CLASSNAME_DATAROW}>
                    <td className={"REF_COL "}>
                        {entry.pkey}
                    </td>
                    <td className={"DATE_COL "}>
                        {entry.date}
                    </td>
                    <td className={"ACTION_COL" + _CLASSNAME_ACTION_COL + "-outer"}>
                        <span className={_CLASSNAME_ACTION_COL}>{entry.action}</span>
                    </td>
                    <td className={"TICKER_COL " + _CLASSNAME_SELL_FONTCOLOR}>
                        {entry.ticker}
                    </td>
                    <td className={"SHARES_COL shares " + _CLASSNAME_SELL_FONTCOLOR}>
                        <b>{parseFloat(entry.shares).toFixed(0).toLocaleString()}</b> {entry.sold === undefined ? "" : "("+entry.sold+")"}
                    </td>
                    <td className={"PRICE_COL " + _CLASSNAME_PRICE1_FONTCOLOR}>
                        {parseFloat(entry.price).toFixed(2).toLocaleString()}
                    </td>
                    <td className={"TOT_PRICE_COL " + _CLASSNAME_PRICE1_FONTCOLOR}>
                        {parseFloat(entry.total).toFixed(2).toLocaleString()}
                    </td>
                    <td className={"CURR_PRICE_COL price2"}>
                        {currPrice}
                    </td>
                    <td className={"MTK_VAL_COL price2"}>
                        {mktVal}
                    </td>
                    <td className={"DOLLAR_PL_COL gains-dollars"}>
                        <span className="">{dollarPL}</span>
                    </td>
                    <td className={"PERCENT_PL_COL " + _CLASSNAME_PERCENT_PL}>
                        <span className={_CLASSNAME_PERCENT_PL_WRAPPER}>{percentPL}</span>
                    </td>
                    <td className={"SEED_COL "}>
                        {entry.seed === undefined ? '' : entry.seed}
                    </td>
                    <td className={"NOTES_COL OpenNotes"} 
                        onClick={ () => this.openNotes(entry.notes2)}>
                        {notesArrow2}
                    </td>
                    <td className={"EDIT_COL Edit-row"}>
                        {"⚙"}
                    </td>
                </tr>
            }
            else if(entry.type.includes('stockEnd')){
                return <tr className="buysell-summarizer-row">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><b>{entry.ticker}</b></td>
                    <td><b>{parseFloat(entry.totalShares).toLocaleString()}</b></td>
                    <td></td>
                    <td><b>{parseFloat(entry.totalSpent).toFixed(2).toLocaleString()}</b></td>
                    <td></td>
                    <td><b>{parseFloat(entry.totalCurrVal).toFixed(2).toLocaleString()}</b></td>
                    <td><b>{parseFloat(entry.totalDollarGains).toFixed(2).toLocaleString()}</b></td>
                    <td><b>{parseFloat(entry.avgPercentGains).toFixed(2)}</b></td>
                    <td></td>
                    <td></td>
                    <td><br/><br/></td>
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
                            <th>SHARES (SOLD)</th>
                            <th>PRICE</th>
                            <th>TOT PRICE</th>
                            <th>CURR PRICE</th>
                            <th>MKT VAL</th>
                            <th>$ P/L</th>
                            <th>% P/L</th>
                            <th>SEED</th>
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
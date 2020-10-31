// Packages
import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import '../styles/DataTable.css';

// Redux
import {connect} from 'react-redux';

// Components 
import Notes from './Notes';

class Holdings extends Component {

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

    getRows(){
        return this.props.holdings.map( (entry, i) => {
            let totalCurrValue = (entry.shares * entry.currentPrice).toFixed(0);
            let totalGainsDollars = (totalCurrValue - entry.totalInvested).toFixed(2);
            let totalGainsPercent = ((totalGainsDollars/entry.totalInvested)*100).toFixed(2);

            let notesArrow1 = entry.notes1 === '' ? '' : '⭦';

            return <tr key={i} className="holdings-row">
                <td className="holdings-firstCol">{entry.ticker}</td>
                <td className="holdings-distribution"><span className="holdings-distribution-wrapper">22%</span></td>
                <td><b>{entry.shares.toFixed(0)}</b></td>
                <td>{entry.totalInvested.toFixed(0)}</td>
                <td>{entry.currentPrice.toFixed(2)}</td>
                <td>{totalCurrValue}</td>
                <td className="gains-dollars">+ {totalGainsDollars}</td>
                <td className="percentOfGains"><span className="percentOfGains-wrapper"><b>{totalGainsPercent}%</b></span></td>
                <td>12.54%</td>
                <td className="OpenNotes" onClick={ () => this.openNotes(entry.notes1)}> {notesArrow1} </td>
            </tr>
        });
    }

    render(){
        if(this.props.holdings === undefined) return <div>No Holdings to show / Broker not selected</div>;

        // TODO: Paramertize classNames - redux store (for dynamic capabilities)?
        return(
            <div>
                <h4>Portfolio</h4>
                <table>
                    <thead>
                        <tr className="table-headers">
                            <th>TICKER ⯅</th>
                            <th>% DISTRIBUTION ⯆</th>
                            <th>POSITION ⯆</th>
                            <th>INVESTED ⯆</th>
                            <th>CURRENT PRICE ⯅</th>
                            <th>MARKET VALUE⯅</th>
                            <th>$ P/L ⯅</th>
                            <th>% P/L ⯅</th>
                            <th>% OF GAINS ⯅</th>
                            <th>NOTES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="holdings-row holdings-cash-row">
                            <td> AUD Bank</td>
                            <td>-</td>
                            <td>-</td>
                            <td>2,000</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        
                        {this.getRows()}

                        <tr className="holdings-row holdings-cash-row">
                            <td> USD Cash </td>
                            <td className="holdings-distribution"><span className="holdings-distribution-wrapper">15%</span></td>
                            <td>-</td>
                            <td>3,450</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                        <tr className="holdings-row holdings-cash-row">
                            <td> AUD Cash </td>
                            <td className="holdings-distribution"><span className="holdings-distribution-wrapper">15%</span></td>
                            <td>-</td>
                            <td>2,332</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        
                        <tr className="holdings-final-row">
                            <td>Totals</td>
                            <td></td>
                            <td></td>
                            <td>20,000</td>
                            <td></td>
                            <td>34,000</td>
                            <td>+ 14,000</td>
                            <td className="percentOfLosses"><span className="percentOfLosses-wrapper">- 3.66%</span></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                
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
)(Holdings);
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
            let notesArrow1 = entry.notes1 === '' ? '' : '⭦';

            return <tr key={i}>
                <td>{entry.ticker}</td>
                <td>//DIST</td>
                <td>{entry.shares.toFixed(4)}</td>
                <td>{entry.totalInvested.toFixed(4)}</td>
                <td>{entry.currentPrice.toFixed(4)}</td>
                <td>{(entry.shares * entry.currentPrice).toFixed(4)}</td>
                <td>{(entry.shares * entry.currentPrice - entry.totalInvested).toFixed(4)}</td>
                <td>{(((entry.shares * entry.currentPrice - entry.totalInvested)/entry.totalInvested)*100).toFixed(2)}%</td>
                <td>//GAIN%</td>
                <td className="OpenNotes" onClick={ () => this.openNotes(entry.notes1)}> {notesArrow1} </td>
            </tr>
        });
    }

    render(){
        if(this.props.holdings === undefined) return <div>No Holdings to show / Broker not selected</div>;

        return(
            <div>
                <h4>Current Holdings Summary</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Ticker Symbol</th>
                            <th>% Distribution</th>
                            <th>Shares</th>
                            <th>Total Invested</th>
                            <th>Curr Price</th>
                            <th>Total Book</th>
                            <th>$ G/L</th>
                            <th>% G/L</th>
                            <th>% of Gains</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getRows()}
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
// Packages
import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import '../styles/DataTable.css';

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

    getData(){
        return this.props.holdings.map( (entry, i) => {
            let notesArrow1 = entry.notes1 === '' ? '' : '⭦';

            return <tr key={i}>
                <td>{entry.ticker}</td>
                <td>{entry.shares}</td>
                <td>{entry.totalInvested}</td>
                <td>{entry.portfolioPercentage}</td>
                <td className="OpenNotes" onClick={ () => this.openNotes(entry.notes1)}> {notesArrow1} </td>
            </tr>
        });
    }

    render(){
        if(this.props.holdings === undefined) return <div>No Holdings to show / Broker not selected</div>;

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Ticker Symbol</th>
                            <th>Shares</th>
                            <th>Total Invested</th>
                            <th>% of Portfolio</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getData()}
                    </tbody>
                </table>
                
                <Notes notes={this.state.notes} isVisible={this.state.showNotes} closeNotes={this.closeNotes.bind(this)}/>
            </div>
        );
    }
}

export default Holdings;
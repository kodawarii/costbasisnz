import React, {Component} from 'react';
import '../styles/DataTable.css';

class Log extends Component {
    
    // this.props.data

    constructor(props){
        super(props);
        this.state = {
            a: 1
        }
    }

    getData(){
        if(this.props.data === undefined) return <tr><td>must fetch first</td></tr>;

        return this.props.data.map( (entry, i) => {
            if(entry.type === "start"){
                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td>{entry.period}</td>
                </tr>
            }
            else if(entry.type === "reg"){
                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td>{entry.date}</td>
                    <td>{entry.action}</td>
                    <td>{entry.ticker}</td>
                </tr>
            }
            else if(entry.type === "end1"){
                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td></td>
                    <td>BOUGHT</td>
                    <td>{entry.bought}</td>
                </tr>
            }
            else if(entry.type === "end2"){
                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td></td>
                    <td>SOLD</td>
                    <td>{entry.sold}</td>
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
                            <th>pk</th>
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
            </div>
        );
    }
}

export default Log;
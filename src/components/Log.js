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
            let class_topup = " Topup ";
            
            if(entry.type === "start"){
                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td><b>{entry.period}</b></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            }
            else if(entry.type === "reg"){
                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td>{entry.date}</td>
                    <td>{entry.action}</td>
                    <td>{entry.ticker}</td>
                    <td> x </td>
                </tr>
            }
            else if(entry.type === "end1"){
                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td></td>
                    <td><b>BOUGHT</b></td>
                    <td>{entry.bought}</td>
                    <td></td>
                </tr>
            }
            else if(entry.type === "end2"){
                return <tr key={i}>
                    <td>{entry.pkey}</td>
                    <td></td>
                    <td><b>SOLD</b></td>
                    <td>{entry.sold}</td>
                    <td></td>
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
            </div>
        );
    }
}

export default Log;
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
        if(this.props.data === undefined) return "need to fetch data";
        
        return this.props.data.map( (entry, i) => {
            return <div key={i}>
                <div>{entry.type}</div>
                <div>{entry.pkey}</div>
            </div>
        });
    }

    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>test</th>
                            <th>test</th>
                            <th>test</th>
                            <th>test</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>bodytest</td>
                            <td>bodytest</td>
                            <td>bodytest</td>
                            <td>bodytest</td>
                        </tr>
                    </tbody>
                </table>

                {this.getData()}
            </div>
        );
    }
}

export default Log;
import React, {Component} from 'react';
import '../styles/DataTable.css';

class Log extends Component {
    
    // this.props.

    constructor(props){
        super(props);
        this.state = {
            a: 1
        }
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
            </div>
        );
    }
}

export default Log;
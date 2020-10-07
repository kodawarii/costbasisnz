import React, {Component} from 'react';
import '../styles/DataTable.css';

// Components
import Log from './Log';

class DataTable extends Component {

    // this.props.currentTab
    // this.props.data

    constructor(props){
        super(props);
        this.state = {
            a: 1
        }
    }

    render(){
        let showTable = () => { return "n/a" };
        
        switch(this.props.currentTab){
            case "Log":
                showTable = () => { return <Log data={this.props.data}/> }
                break;
            default:
                showTable = () => { return "Invalid Choice" }
                break;
        }

        return(
            <div className="DataTable">
                {showTable()}
            </div>
        );
    }
}

export default DataTable;
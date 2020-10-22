import React, {Component} from 'react';
import '../styles/DataTable.css';

// Components
import Log from './Log';
import TopupWithdraw from './TopupWithdraw';
import BuySell from './BuySell';

class DataTable extends Component {

    // this.props.currentTab
    // this.props.data // ---------------- TODO: USE REDUX BROKERDATA NOT THIS LOCAL COPY

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
            case "Topup / Withdraw":
                showTable = () => { return <TopupWithdraw data={this.props.data}/> }
                break;
            case "Buy / Sell":
                showTable = () => {return <BuySell data={this.props.data} />}
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
import React, {Component} from 'react';
import '../styles/DataTable.css';

// Components
import Holdings from './Holdings';
import Log from './Log';
import TopupWithdraw from './TopupWithdraw';
import BuySell from './BuySell';

class DataTable extends Component {

    // this.props.currentTab
    // this.props.logs
    // this.props.holdings

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
                showTable = () => { return <Log logs={this.props.logs}/> }
                break;
            case "Topup / Withdraw":
                showTable = () => { return <TopupWithdraw logs={this.props.logs}/> }
                break;
            case "Buy / Sell":
                showTable = () => {return <BuySell logs={this.props.logs} holdings={this.props.holdings} />}
                break;
            case "Holdings":
                showTable = () => {return <Holdings holdings={this.props.holdings}/>}
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
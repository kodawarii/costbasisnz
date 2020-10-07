import React, {Component} from 'react';
import '../styles/Ribbon.css';

class Ribbon extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentTab: "Log",
            tabs: [
                "Master",
                "Holdings",
                "Log",
                "Topup / Withdraw",
                "Buy",
                "Fees",
                "Dividends"
            ]
        }
    }

    updateTab(s){
        console.log(s);
    }

    getTabs(){
        return this.state.tabs.map((tabName, i) => {
            return <li onClick={ () => this.updateTab(tabName)} className="Tab" key={i}>
                {tabName}
            </li>
        });
    }

    render(){
        return(
            <div className="Ribbon">
                <ul className="Tabs">
                    {this.getTabs()}
                </ul>
            </div>
        );
    }
}

export default Ribbon;
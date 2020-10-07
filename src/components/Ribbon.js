import React, {Component} from 'react';
import '../styles/Ribbon.css';

class Ribbon extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentTab: "Log",
            tabs: [ // todo: Get from user data
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

    updateTab(tab){
        this.setState({currentTab: tab});
    }

    getTabs(){
        let defaultClass = "Tab-inner ";
        let highlightedClass = " Tab-inner-highlighted";
        return this.state.tabs.map((tabName, i) => {
            return <li onClick={ () => this.updateTab(tabName)} className="Tab" key={i}>
                <span className={defaultClass + (tabName === this.state.currentTab ? highlightedClass : "")}>{tabName}</span>
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
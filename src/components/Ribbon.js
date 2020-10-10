import React, {Component} from 'react';
import '../styles/Ribbon.css';

class Ribbon extends Component {

    // this.props.updateCurrentTab()
    // this.props.currentTab

    constructor(props){
        super(props);
        this.state = {
            currentTab: "",
            tabs: [ // todo: Get from user data
                "Master",
                "Holdings",
                "Log",
                "Topup / Withdraw",
                "Buy / Sell",
                "Fees",
                "Dividends"
            ]
        }
    }

    componentDidMount(){
        if(this.state.currentTab !== this.props.currentTab) this.setState({currentTab: this.props.currentTab});
    }

    updateCurrentTab(tab){
        this.setState({currentTab: tab});
        this.props.updateCurrentTab(tab);
    }

    getTabs(){
        let defaultClass = "Tab-inner ";
        let highlightedClass = " Tab-inner-highlighted";
        return this.state.tabs.map((tabName, i) => {
            return <li onClick={ () => this.updateCurrentTab(tabName)} className="Tab" key={i}>
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
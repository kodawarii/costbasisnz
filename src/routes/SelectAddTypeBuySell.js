import React, {Component} from 'react';
import '../styles/SelectAddType.css';

import {HashLink as Link} from 'react-router-hash-link';

class SelectAddTypeBuySell extends Component{
    componentDidMount(){
        this.props.updateScreenName("selectaddtype"); // Hacky
    }
    
    componentDidUpdate(){
        this.props.updateScreenName("selectaddtype"); // todo1: create constants
    }

    // TODO: Enumerate in external constants file
    render(){
        let liClassName = "SelectAddType-li";
        return(
            <div className="SelectAddType Screen">
                <h4> Select Type to Add </h4>
                <ul className="SelectAddType-ul">
                    <Link to={'/AddBuy'}><li className={liClassName+" AddTopup-li"}> 1. Buy </li></Link>
                    <Link to={'/AddSell'}><li className={liClassName+" AddWithdraw-li"}> 2. Sell </li></Link>
                </ul>
            </div>
        );
    }
}

export default SelectAddTypeBuySell;
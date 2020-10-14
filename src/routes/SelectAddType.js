import React, {Component} from 'react';
import '../styles/SelectAddType.css';

import {HashLink as Link} from 'react-router-hash-link';

class SelectAddType extends Component{
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
                <h4> Select Type of Log </h4>
                <ul className="SelectAddType-ul">
                    <Link to={'/AddTopup'}><li className={liClassName+" AddTopup"}> Topup </li></Link>
                    <Link to={'/AddWithdraw'}><li className={liClassName+" AddWithdraw"}> Withdraw </li></Link>
                    <Link to={'/AddFX'}><li className={liClassName+" AddFX"}> FX </li></Link>
                    <Link to={'/AddBuy'}><li className={liClassName+" AddBuy"}> Buy </li></Link>
                    <Link to={'/AddSell'}><li className={liClassName+" AddSell"}> Sell </li></Link>
                    <Link to={'/AddDividend'}><li className={liClassName+" AddDividend"}> Dividend </li></Link>
                    <Link to={'/AddFee'}><li className={liClassName+" AddFee"}> Fee </li></Link>
                </ul>
            </div>
        );
    }
}

export default SelectAddType;
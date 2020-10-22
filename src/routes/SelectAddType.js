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
                    <Link to={'/AddTopup'}><li className={liClassName+" AddTopup-li"}> 1. Topup </li></Link>
                    <Link to={'/AddWithdraw'}><li className={liClassName+" AddWithdraw-li"}> 2. Withdraw </li></Link>
                    <Link to={'/AddFX'}><li className={liClassName+" AddFX-li"}> 3. FX </li></Link>
                    <Link to={'/AddBuySell'}><li className={liClassName+" AddBuySell-li"}> 4. Buy or Sell</li></Link>
                    <Link to={'/AddDividend'}><li className={liClassName+" AddDividend-li"}> 6. Dividend </li></Link>
                    <Link to={'/AddFee'}><li className={liClassName+" AddFee-li"}> 7. Fee </li></Link>

                    <Link to={'/'}><li className={liClassName+" "}> 8. New Period </li></Link>
                    <Link to={'/'}><li className={liClassName+" "}> 9. End Period </li></Link>
                    <Link to={'/'}><li className={liClassName+" "}> 10. Period Bought </li></Link>
                    <Link to={'/'}><li className={liClassName+" "}> 11. Period Sold </li></Link>
                </ul>
            </div>
        );
    }
}

export default SelectAddType;
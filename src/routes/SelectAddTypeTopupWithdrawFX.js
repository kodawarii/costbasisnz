import React, {Component} from 'react';
import '../styles/SelectAddType.css';

import {HashLink as Link} from 'react-router-hash-link';

class SelectAddTypeTopupWithdrawFX extends Component{
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
                    <Link to={'/AddTopup'}><li className={liClassName+" AddTopup-li"}> 1. Topup </li></Link>
                    <Link to={'/AddWithdraw'}><li className={liClassName+" AddWithdraw-li"}> 2. Withdraw </li></Link>
                    <Link to={'/AddFX'}><li className={liClassName+" AddFX-li"}> 3. FX </li></Link>
                </ul>
            </div>
        );
    }
}

export default SelectAddTypeTopupWithdrawFX;
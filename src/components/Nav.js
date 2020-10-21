// Packages
import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import '../styles/Nav.css';

// Components
import Menu from './Menu';

class Nav extends Component{
    
    // props
    // this.props.screen
    // this.props.isMenuHidden
    // this.props.toggleMenu

    render(){
        let title;
        let backBtnClassName = " back-btn ";
        let menuClassName = this.props.isMenuHidden ? " menu-outer-hidden " : " menu-outer ";

        if(this.props.screen === "home"){
            title = "Select Portfolio";
            backBtnClassName = " back-btn-hide ";
        }
        else if(this.props.screen === "portfolio"){
            title = "Portfolio";
        }
        else if(this.props.screen === "addBroker"){
            title = "Add Broker";
        }
        else if(this.props.screen === "login"){
            title = "Login";
        }
        else if(this.props.screen === "logout"){
            title = "Logout";
        }
        else if(this.props.screen === "settings"){
            title = "Settings";
        }
        else if(this.props.screen === "register"){
            title = "Register";
        }
        else if(this.props.screen === "about"){
            title = "About";
        }
        else if(this.props.screen === "selectaddtype"){
            title = "Add a Log item";
        }
        else if(this.props.screen === "AddTopup"){
            title = "Add Topup Event";
        }
        else if(this.props.screen === "AddWithdraw"){
            title = "Add Withdraw Event";
        }

        return(
            <div className="Nav">
                <div className="wrapper">
                    <div className="col Padding">
                        <div className={backBtnClassName}>
                            <Link to={'/'}>
                                <div className="back-btn-btn"> ↶ </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col Title">
                        {title}
                    </div>
                    <div className="col MenuBtn">
                        <div className="hamburger" onClick={this.props.toggleMenu}> ☰ </div>
                    </div>
                    <div className={menuClassName}>
                        <Menu
                        toggleMenu={this.props.toggleMenu}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
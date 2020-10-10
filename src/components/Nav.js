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

    constructor(props){
        super(props);
    }

    render(){
        let title;
        let backBtnClassName = " back-btn ";
        let menuClassName = this.props.isMenuHidden ? " menu-outer-hidden " : " menu-outer ";

        if(this.props.screen === "home"){
            title = "Select Portfolio";
            backBtnClassName = " back-btn-hide ";
        }
        if(this.props.screen === "portfolio"){
            title = "Portfolio";
        }

        return(
            <div className="Nav">
                <div className="wrapper">
                    <div className="col Padding">
                        <div className={backBtnClassName}>
                            <Link to={'/'}>
                                <div> ↶ </div>
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
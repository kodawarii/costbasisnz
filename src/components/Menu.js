import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Nav.css';

class Menu extends Component{

    // this.props.toggleMenu

    render(){
        let linkClassName = "settings-link";
        return(
            <div className="menu">
                <div onClick={this.props.toggleMenu} className="menu-exit-btn"> x </div>
                
                <Link to={'/'}><div onClick={this.props.toggleMenu} className={linkClassName}> Home </div></Link>
                <Link to={'/Settings'}><div onClick={this.props.toggleMenu} className={linkClassName}> Settings </div></Link>
                <Link to={'/Login'}><div onClick={this.props.toggleMenu} className={linkClassName}> Login </div></Link>
                <Link to={'/Logout'}><div onClick={this.props.toggleMenu} className={linkClassName}> Logout </div></Link>
                <Link to={'/Register'}><div onClick={this.props.toggleMenu} className={linkClassName}> Register </div></Link>
                <Link to={'/About'}><div onClick={this.props.toggleMenu} className={linkClassName}> About </div></Link>
            </div>
        );
    }
}

export default Menu;
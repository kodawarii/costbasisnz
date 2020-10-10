import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Nav.css';

class Menu extends Component{

    // this.props.toggleMenu

    render(){
        return(
            <div className="menu">
                <div onClick={this.props.toggleMenu} className="menu-exit-btn"> x </div>
                
                <Link to={'/'}><div onClick={this.props.toggleMenu}> Home </div></Link>
                <Link to={'/Settings'}><div onClick={this.props.toggleMenu}> Settings </div></Link>
                <Link to={'/Login'}><div onClick={this.props.toggleMenu}> Login </div></Link>
                <Link to={'/Logout'}><div onClick={this.props.toggleMenu}> Logout </div></Link>
                <Link to={'/Register'}><div onClick={this.props.toggleMenu}> Register </div></Link>
                <Link to={'/About'}><div onClick={this.props.toggleMenu}> About </div></Link>
            </div>
        );
    }
}

export default Menu;
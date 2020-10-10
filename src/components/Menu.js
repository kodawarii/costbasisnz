import React, {Component} from 'react';
import '../styles/Nav.css';

class Menu extends Component{

    // this.props.toggleMenu

    render(){
        return(
            <div className="menu">
                <div onClick={this.props.toggleMenu} className="menu-exit-btn"> x </div>
                <div> Settings </div>
                <div> Login </div>
                <div> Logout </div>
                <div> Register </div>
                <div> About </div>
            </div>
        );
    }
}

export default Menu;
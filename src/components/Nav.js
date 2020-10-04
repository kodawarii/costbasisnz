import React, {Component} from 'react';
import '../styles/Nav.css';

class Nav extends Component{
    
    // props
    // this.props.screen
    //

    constructor(props){
        super(props);
    }

    render(){
        let title;
        if(this.props.screen === "home"){
            title = "Select Portfolio";
        }
        if(this.props.screen === "portfolio"){
            title = "Portfolio";
        }

        return(
            <div className="Nav">
                <div className="wrapper">
                    <div className="col Padding">
                        <div></div>
                    </div>
                    <div className="col Title">
                        {title}
                    </div>
                    <div className="col MenuBtn">
                        <div className="hamburger"> ☰ </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
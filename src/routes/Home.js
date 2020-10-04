import React, {Component} from 'react';

import TestComponent from '../components/testcomponent';

class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                Home works
                <TestComponent/>
            </div>
        );
    }
}

export default Home;
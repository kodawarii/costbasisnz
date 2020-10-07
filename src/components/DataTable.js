import React, {Component} from 'react';

class DataTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            a: 1
        }
    }

    render(){
        return(
            <div className="DataTable">
                data table works
            </div>
        );
    }
}

export default DataTable;
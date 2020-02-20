
import React from 'react';

export default class NextPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
           
        };
      }

    render(){
        return(
            <div>
                <button onClick={this.collapse.bind(this)}>Prev page </button>
                <button onClick={this.collapse.bind(this)}>Next page </button>
            </div>
        )
    }

}
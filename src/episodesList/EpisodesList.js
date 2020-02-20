
import React from 'react';
import EpisodeRow from './EpisodeRow';

/**
 * List component for episodes
 */
export default class EpisodesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            collapsed : false,
        };
    }
    /**
     * Collapse method
     */
    collapse(e){
        this.setState({collapsed : !this.state.collapsed});
    }
    render(){
        return(
        <div>
            <div className="">Episodes                    
                <button onClick={this.collapse.bind(this)}>[{this.state.collapsed ? "-" : "+"}]</button>
            </div>
            {this.state.collapsed ? 
                <ul>
                    {this.props.episodesList.map((episode,index)=>{
                            return (
                                <EpisodeRow episode={episode}/>
                            )
                        })
                    }
                </ul>
                :
                null
            }
        </div>
        )
    }

}
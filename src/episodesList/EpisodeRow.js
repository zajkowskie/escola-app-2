
import React from 'react';
import EpisodeDetails from './EpisodeDetails';

export default class EpisodeRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            collapsed : false
        };
      }

    collapse(){
        this.setState({collapsed : !this.state.collapsed});

    }
    render(){
        return(
            <div>
                <div> Episode {this.props.episode.id}
                    <button onClick={this.collapse.bind(this)}>[{this.state.collapsed ? "-" : "+"}]</button>
                </div>
                {this.state.collapsed ? 
                    <EpisodeDetails episodeDetail={this.props.episode} />
                    : 
                    null 
                }
            </div>
        )
    }

}
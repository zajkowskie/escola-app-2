
import React from 'react';

export default class EpisodeDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            characters: true ,
            collapsed : false
        };
      }


    componentDidMount(){

        const characters = [];

        this.props.episodeDetail.characters.map((item)=>{
            const positionOfId = item.split('/').length - 1 ;
            const id = item.split('/')[positionOfId];
            characters.push(id);
        })

        fetch(" https://rickandmortyapi.com/api/character/" + characters)
        .then(res => res.json())
        .then((json)=>{
            this.setState({characters : json})
        });
      
    }
    collapse(){
        this.setState({collapsed : !this.state.collapsed});

    }
    render(){
        return(
            
            <ul>
                <li>id: {this.props.episodeDetail.id}</li>
                <li>name: {this.props.episodeDetail.name}</li>
                <li>air_date: {this.props.episodeDetail.air_date}</li>
                <li>episode: {this.props.episodeDetail.episode}</li>
                <li>characters: 
                    <button onClick={this.collapse.bind(this)}>[{this.state.collapsed ? "-" : "+"}]</button>
                    {this.state.collapsed ? 
                        <ul >
                        
                        {this.props.episodeDetail.characters.map((item,index)=>{
                                if(this.state.characters[index]){
                                    return(
                                        <li>{this.state.characters[index].name}</li>
                                    )
                                }
                            })
                        }
                        </ul>
                    : 
                        null
                    }
                </li>
                <li>url:{this.props.episodeDetail.url}</li>
                <li>created:{this.props.episodeDetail.created}</li>
            </ul>
        )
    }
}
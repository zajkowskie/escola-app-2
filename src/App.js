import React from "react";
import { connect } from "react-redux";
import "./App.css";
import EpisodesList from "./episodesList/EpisodesList";
import NextPage from "./nextPage";
import { rickAndMortyFetch } from "./actions/episodes";
import { updatePageInfo } from "./actions/page";

export class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading : true
    }
  }
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/episode")
      .then(res => res.json())
      .then(json => {
        this.props.rickAndMortyFetch(json.results);
        this.props.updatePageInfo(json.info);
      })
      .then(this.setState({ isLoading : false}))
  }

  changePage(page){
    this.setState({isLoading : true})
    fetch(page)
    .then(res => res.json())
    .then(json => {
      this.props.rickAndMortyFetch(json.results);
      this.props.updatePageInfo(json.info);
    })
    .then(this.setState({ isLoading : false }))
  }

  render() {
    return (
        <main className="">
          {this.state.isLoading ? <div>LOADING</div> : ""}
          <EpisodesList episodesList={this.props.rickAndMortyEpisodes}/>
          <button onClick={() => this.changePage(this.props.pageInfo.prev)}>PrevPage</button>
          <button onClick={() => this.changePage(this.props.pageInfo.next)}>NextPage</button>
        </main>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    rickAndMortyEpisodes: state.rickAndMortyEpisodes,
    pageInfo: state.pageInfo,
  }
};
const mapDispatchToProps = { 
  rickAndMortyFetch, 
  updatePageInfo 
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App); 

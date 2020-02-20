import { combineReducers } from "redux";
import { rickAndMortyEpisodes } from "./rickAndMortyEpisodes";
import { pageInfo } from "./pageInfo";

export default combineReducers({
    rickAndMortyEpisodes : rickAndMortyEpisodes,
    pageInfo : pageInfo
});
import { combineReducers } from "redux";
import { rickAndMortyEpisodes } from "./rickAndMortyEpisodes";
import { pageInfo } from "./pageInfo";

  /**
   * Combine two reducers
   */
export default combineReducers({
    rickAndMortyEpisodes : rickAndMortyEpisodes,
    pageInfo : pageInfo
});
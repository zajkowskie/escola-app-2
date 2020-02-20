/**
 * Reducer storing rick and morty episodes array
 */
export const rickAndMortyEpisodes = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_RICK_AND_MORTY_DATA':
        return [
          ...action.rickAndMortyEpisodes
        ]
      default:
        return state
    }
  }
export const pageInfo = (state = {}, action) => {
    switch (action.type) {
      case 'UPDATE_PAGE_INFO':
        return {
          ...action.pageInfo
        }
      default:
        return state
    }
  }
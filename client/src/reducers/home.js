export default (state={articles: []}, action) => {
  switch(action.type) {
    case 'HOME_PAGE_LOADED':
      return {
        ...state,
        articles: action.data.articles,
      };
    default:
      return state;
  }
};
const initialState = {
    top: [],
    new: [],
    ask: [],
    show: [],
    job: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    
  case 'ADD_STORY':
  // some stories are null (only happen with jobs),
  // and we don't want to include those already stored
  let newStories = action.story === null || state[action.route].find(item => item.id === action.story.id)
                  ? state[action.route]
                  : [...state[action.route], action.story];
  
    return {
        ...state,
        [action.route]: newStories 
    }

  default:
    return state
  }
}

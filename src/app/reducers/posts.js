// A reducer tales 2 things
// 1. Action - info about what happen
// 2. copy of current state

function posts(state=[], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      return Object.assign([], state, state[i].likes++);
    default:
    return state;
  }
  
}

export default posts;
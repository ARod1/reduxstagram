
//only has the state for tha specify post
function postComments(state = [], action) {
    const i = action.index;
    switch(action.type) {
        case 'ADD_COMMENT':
        //return the new state with the new comment
        return [...state, {
            user: action.author,
            text:action.comment
        }];
        case 'REMOVE_COMMENT':
        return [
            //start from the start to the one we want to delete
            ...state.slice(0, i),
            //skip over the one we want to delete and return everything else
            ...state.slice(i + 1)
        ];  
        default:
            return state;    
    }
    return state;
}



function comments(state = [], action) {
    if(typeof action.postId !== 'undefined') {
        return {
            //takes the current state
            ...state,
            //overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;
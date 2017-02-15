//actions are like event thats happen in the browser
//we use reducers which handle the event



//increment 

export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

//add comments

export function addComment(postId, author, comment) {
    console.log('dispatching');
    console.log(postId, author, comment);
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}


//remove comment

export function removeComment(postId, index) {
    return {
        type: 'REMOVE_COMMENT',
        index,
        postId
    }
}
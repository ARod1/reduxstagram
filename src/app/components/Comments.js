import React from 'react';

export default class Comments extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderComment = this.renderComment.bind(this);
    }
    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>comment.user</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.productId, i)}>&times;</button>      
                </p>
            </div>
        );
    }

    handleSubmit(e) {
        //takes the data the user submits using the form
        e.preventDefault();
        const postId = this.props.params.productId;
        const author = this.refs.author.value;
        const comment = this.refs.message.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();//reset form
    }

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="message" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
}
import React from "react";
import IndexCommentItem from './index_comment_item';

class IndexComment extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   loading: true
    // }
    // this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchCommentsByTaskId(this.props.taskId);
  }

  // handleDelete(e) {
  //   e.preventDefault();
  //   // debugger
  //   let pathArray = this.props.location.pathname.split("/")
  //   let commentId = parseInt(pathArray[pathArray.length - 1])
  //   this.props.deleteList(commentId)
  //   .then( this.props.history.push("/"))
  // }


  render() {
    // if (this.state.loading) {
    //   return <div></div>
    // }
    return (
        <div >
          {this.props.comments.map((comment, idx) => {
            return <IndexCommentItem comment={comment} key={idx} openModal={this.props.openModal} deleteComment={this.props.deleteComment} /> 
            // return (<div>
            //   <li>{comment.body} {idx}</li>
            //   <button className="review-but" onClick={this.handleDelete}>Delete</button>
            //   <button className="review-but" onClick={() => this.props.openModal({ "modal-type": "edit-comment", "comment": comment.id })}>Edit</button>
            // </div>)
          })
          }
        </div>
    )};

};


export default IndexComment;
import React from "react";
import IndexCommentItem from './index_comment_item';

class IndexComment extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchCommentsByTaskId(this.props.taskId);
  }

  componentDidUpdate(prevState) {
    if (this.props.comments.length !== prevState.comments.length) {
      this.props.fetchCommentsByTaskId(this.props.taskId);
    }
  }

  render() {

    return (
        <div>
          {this.props.comments.map((comment, idx) => {
            return <IndexCommentItem comment={comment} key={idx} openModal={this.props.openModal} deleteComment={this.props.deleteComment} /> 
          })
          }
        </div>
    )};

};


export default IndexComment;
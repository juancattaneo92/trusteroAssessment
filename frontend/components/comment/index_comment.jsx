import React from "react";
import IndexCommentItem from './index_comment_item';

class IndexComment extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCommentsByTaskId(this.props.taskId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.taskId !== prevProps.taskId) {
      this.props.fetchCommentsByTaskId(this.props.taskId)
    }
  }

  render() {
    // if (this.state.loading) {
    //   return <div></div>
    // }
    return (
        <div className="" >
          {this.props.comments.map((comment, idx) => {
            return <IndexCommentItem comment={comment} key={idx} openModal={this.props.openModal} deleteComment={this.props.deleteComment} /> 
          })
          }
        </div>
    )};

};


export default IndexComment;
import React from 'react';
import IndexCommentContainer from "../comment/index_comment_container";

class ShowTask extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      loading: true
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    // debugger
    // this.props.fetchTasks()
    this.props.fetchTask(this.props.match.params.taskId)
    this.props.fetchCommentsByTaskId(this.props.match.params.taskId)
      .then( () => this.setState( {loading: false} ))
  }

  handleDelete(e) {
    e.preventDefault();
    // debugger
    let pathArray = this.props.location.pathname.split("/")
    let taskId = parseInt(pathArray[pathArray.length - 1])
    this.props.deleteTask(taskId).then(
      this.props.history.push("/")
    )
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.taskId !== prevProps.match.params.taskId) {
      this.props.fetchCommentsByTaskId(this.props.match.params.taskId)
        .then(() => this.setState({ loading: false }))
    }
  }

  render() {
    if(this.state.loading || !this.props.task){
      return <div></div>
    }
    let pathArray = this.props.location.pathname.split("/")
    let taskId = parseInt(pathArray[pathArray.length - 1])
    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="inner-container">
            <div className="title-container">
              <div className="show-title">{this.props.task.title}</div>
              <button className="edit-delete-button" onClick={this.handleDelete}>Delete</button>
              <button className="edit-delete-button" onClick={() => this.props.openModal({ "modal-type": "edit-task", "task": taskId, })}>Edit</button>
            </div>
            <div className="description-container">
              <div className="inner-text">
                {this.props.task.description}
              </div>
            </div>
            {/* <div>{this.props.task.status}</div> */}
            <div>
              <button className="add-button" onClick={() => this.props.openModal("create-comment")}>Add Comment</button>
            </div>
          </div>
          <div className="inner-container2">
            <div className="comment-container">
              <IndexCommentContainer comments={this.props.comments} openModal={this.props.openModal} />
            </div>
          </div>
        </div>
      </div>

    )
  }

}

export default ShowTask;
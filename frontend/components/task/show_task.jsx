import React from 'react';
import TaskIndexItem from "../task/index_task_item";

class ShowTask extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks(this.props.match.params.taskId)
    this.props.fetchComments(this.props.match.params.taskId)
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

  render() {
    if (this.state.loading || !this.props.comments) {
      return <div></div>
    }
    let pathArray = this.props.location.pathname.split("/")
    let taskId = parseInt(pathArray[pathArray.length - 1])
    return (
      <div className="task-container">
        <div>
          <button className="review-but" onClick={this.handleDelete}>Delete</button>
          <button className="review-but" onClick={() => this.props.openModal({ "modal-type": "edit-task", "task": taskId, })}>Edit</button>;
        </div>
        <div className="task-box">
            <div>{this.props.task.title}</div>
            <div>{this.props.task.description}</div>
            {/* <div>{this.props.task.status}</div> */}
        </div>
        <div>
          <button className="review-but" onClick={() => this.props.openModal("create-task")}>Add New Task</button>
        </div>
        <div>
          <IndexCommentContainer comments={this.props.comments} openModal={this.props.openModal}/>
        </div>
      </div>

    )
  }

}

export default ShowTask;
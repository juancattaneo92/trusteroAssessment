import React from 'react';
import TaskIndexItem from "../task/index_task_item";

class ShowList extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  handleDelete(e) {
    e.preventDefault();
    // debugger
    let pathArray = this.props.location.pathname.split("/")
    let listId = parseInt(pathArray[pathArray.length - 1])
    this.props.deleteList(listId).then(
      this.props.history.push("/")
    )
  }

  render() {
    let pathArray = this.props.location.pathname.split("/")
    let listId = parseInt(pathArray[pathArray.length - 1])
    // debugger
    return (
      <div className="task-container">
        {/* {this.props.list.name} */}
        <div>
          <button className="review-but" onClick={this.handleDelete}>Delete</button>
          <button className="review-but" onClick={() => this.props.openModal({ "modal-type": "edit-list", "list": listId, })}>Edit</button>;
        </div>
        <div className="task-box">
          {this.props.tasks.map((task) => {
            return <TaskIndexItem task={task} key={task.id} />
          })}
        </div>
        <div>
          <button className="review-but" onClick={() => this.props.openModal("create-task")}>Add New Task</button>
        </div>
      </div>

    )
  }

}

export default ShowList;


// componentDidMount() {
//   // debugger
//   this.props.fetchList(this.props.match.params.listId);
//   this.props.fetchTasks();
// }

// componentDidUpdate(prevProps){
//   if (this.props.match.params.listId !== prevProps.match.params.listId) {

//   }
// }
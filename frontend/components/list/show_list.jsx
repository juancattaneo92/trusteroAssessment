import React from 'react';
import TaskIndexItem from "../task/index_task_item";

class ShowList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
  
    this.props.fetchTasksByListId(this.props.listId)
    this.props.fetchList(this.props.match.params.listId)
      .then(() => this.setState({ loading: false }))
  }

  // componentDidUpdate(prevProps){
  //   if (this.props.match.params.listId !== prevProps.match.params.listId) {
  //       this.props.fetchList(this.props.match.params.listId)  
  //   }
  // }


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
    if (this.state.loading || this.props.list.name === null) {
      return <div></div>
    }
    let pathArray = this.props.location.pathname.split("/")
    let listId = parseInt(pathArray[pathArray.length - 1])
    // debugger
    return (
      <div className="task-container">
        <div>
          {this.props.list.name}
          <button className="review-but" onClick={this.handleDelete}>Delete</button>
          <button className="review-but" onClick={() => this.props.openModal({ "modal-type": "edit-list", "list": listId, })}>Edit</button>
        </div>
        <div className="task-box">
          {this.props.tasks.map((task, idx) => {
            return <TaskIndexItem task={task} key={idx} />
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
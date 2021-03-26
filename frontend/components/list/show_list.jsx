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
    // debugger
    // this.props.fetchList(this.props.currentList.id)
    this.props.fetchList(this.props.match.params.listId)
    this.props.fetchTasksByListId(this.props.match.params.listId)
      .then(() => this.setState({ loading: false }))
  }

  handleDelete(e) {
    e.preventDefault();
    let pathArray = this.props.location.pathname.split("/")
    let listId = parseInt(pathArray[pathArray.length - 1])
    this.props.deleteList(listId).then(
      this.props.history.push("/")
    )
  }

  render() {
    if (this.state.loading || !this.props.currentList )  {
      return <div></div>
    }
    let pathArray = this.props.location.pathname.split("/")
    let listId = parseInt(pathArray[pathArray.length - 1])
    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="title-container">
            <div className="show-title">{this.props.currentList.name}</div>
            <button className="edit-delete-button" onClick={() => this.props.openModal({ "modal-type": "edit-list", "list": listId, })}><i className="far fa-edit"></i></button>
            <button className="edit-delete-button" onClick={this.handleDelete}><i className="far fa-trash-alt"></i></button>
          </div>
          <div className="button-container">
            <button className="add-button" onClick={() => this.props.openModal("create-task")}><i className="fas fa-plus-circle"></i> Task</button>
          </div>
          <div className="task-container">
            {this.props.tasks.map((task, idx) => {
              return <TaskIndexItem task={task} key={idx} />
            })}
          </div>
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
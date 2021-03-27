import React from "react";

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let task = Object.assign({}, this.state)
    task.list_id = this.props.listId
    this.props.createTask(this.props.listId, task)
      .then(this.props.closeModal)
  }

  handleInput(inputType) {
    return e => this.setState({ [inputType]: e.target.value })
  }

  render() {

    return (
      <div className="modal-container">
        <div onClick={this.props.closeModal} className='close-x' id="">×</div>

        <form className="list-form" onSubmit={this.handleSubmit}>
          <div className="list-title"><i className="fas fa-tasks"></i> Create Task </div>
          <div className="list-body">
            <div className="list-title2">
              <textarea
                type="text"
                placeholder="title"
                value={this.state.title}
                onChange={this.handleInput("title")} />
            </div>
            <textarea
              type="text"
              placeholder="description"
              value={this.state.description}
              onChange={this.handleInput("description")} />
          </div>

          <div >
            <button className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateTask;
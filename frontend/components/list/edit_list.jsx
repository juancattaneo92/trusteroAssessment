import React from "react";

class EditList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.list.name,
      id: this.props.list.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateList(this.state)
      .then( () => this.props.closeModal())
  }

  handleInput(inputType) {
    return e => this.setState({ [inputType]: e.target.value })
  }

  componentDidMount() {
    this.props.fetchList(this.props.list.id)
  }

  render() {
    if (this.props.list === null) {
      return null
    }
    return (
      <div className="modal-container">
        <div onClick={this.props.closeModal} className='close-x' id="">×</div>

        <form className="list-form" onSubmit={this.handleSubmit}>
          <div className="list-title">Edit List</div>
          <div className="list-body">
            <textarea
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleInput("name")} />
          </div>
          <div >
            <button className="submit-button">Edit</button>
          </div>
        </form>
      </div>

    )

  }

}

export default EditList;
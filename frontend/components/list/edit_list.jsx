import React from "react";

class EditList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list.name,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let list = Object.assign({}, this.state)
    this.props.updateList(list)
      .then(() => this.props.closeModal())
  }

  handleInput(inputType) {
    return e => this.setState({ [inputType]: e.target.value })
  }

  componentDidMount() {
    this.props.fetchList(this.props.list.id)
  }

  render() {
    if (this.props.reviews === undefined) {
      return null
    }
    return (
      <div className="modal-container">
        <div onClick={this.props.closeModal} className='close-X' id="">×</div>

        <form className="list-form" onSubmit={this.handleSubmit}>
          <div className="List-title">Edit List</div>
          <div className="body-div">
            <textarea
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleInput("name")} />
          </div>
          <div className="submit-but-div">
            <button>Add to List</button>
          </div>
        </form>
      </div>

    )

  }

}

export default EditList;
import React from 'react';

class IndexTask extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchLists();
  }


  render() {

    return (
      <div className="list-container">
        <div className="list-box">
          {this.props.lists.map((list) => {
            return <ListIndexItem list={list} key={list.id} />
          })}
        </div>
        <div>
          <button className="review-but" onClick={() => this.props.openModal("create-list")}>Add New List</button>
        </div>
      </div>

    )
  }

}

export default IndexTask;
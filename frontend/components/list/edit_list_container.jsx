import { connect } from "react-redux";
import { fetchList, updateList } from "../../actions/list_actions";
import EditList from "./edit_list";
import { closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
  return {
    lists: Object.values(state.entities.lists),
    list: state.entities.lists[state.ui.modal.list]
  }
}

const mDTP = dispatch => {
  return ({
    fetchList: (listId) => dispatch(fetchList(listId)),
    updateList: (list) => dispatch(updateList(list)),
    closeModal: () => dispatch(closeModal()),
  })
}

export default withRouter(connect(mSTP, mDTP)(EditList))
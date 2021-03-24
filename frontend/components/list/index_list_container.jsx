import { connect } from 'react-redux';
import IndexList from "./index_list";
import { fetchLists } from "../../actions/list_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state) => {
  return ({
    lists: Object.values(state.entities.lists),
  })
}


const mDTP = dispatch => {
  return ({
    fetchLists: () => dispatch(fetchLists()),
    openModal: (payload) => { dispatch(openModal(payload))}
  })
}
export default connect(mSTP, mDTP)(IndexList)
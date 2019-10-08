import { connect } from 'react-redux';
import MyChoiceAction from './MyChoiceAction';
// 数据綁定
function mapStateToProps(state) {
  return {
    text: state.text,
    name: state.name,
  };
}
// 数据变动
function mapDispatchToProps(dispatch) {
  return {
    pushMyChoiceAction: e => {
      return dispatch({
        type: 'INCREMENT',
        input: e.target.value,
      });
    },
  };
}

// connect
const MyChoiceActionRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyChoiceAction);

export default MyChoiceActionRedux;

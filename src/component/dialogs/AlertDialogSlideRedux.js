import { connect } from 'react-redux';
import AlertDialogSlide from './AlertDialogSlide';
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
    pushMyChoiceActionObj: (numGroup, kilo, actionObj) => {
      console.log('click');
      console.log(actionObj);
      return dispatch({
        type: 'PUSHOBJ',
        playoutNumGroup: numGroup,
        playoutKilo: kilo,
        playAction: actionObj,
      });
    },
  };
}

// connect
const AlertDialogSlideRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlertDialogSlide);

export default AlertDialogSlideRedux;

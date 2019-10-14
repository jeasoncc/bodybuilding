import { connect } from 'react-redux';
import MediaCard from './MediaCard';
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
    pushMediaCard: e => {
      return dispatch({
        type: 'INCREMENT',
        input: e.target.value,
      });
    },
    deleteAction: (...rest) => {
      console.log(...rest);
    },
  };
}

// connect
const MediaCardRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MediaCard);

export default MediaCardRedux;

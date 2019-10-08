const ADD = 'INCREMENT';
const REMOVE = 'DECREMENT';
const PUSHOBJ = 'PUSHOBJ';
export default function MyChoiceActionReducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return {
        name: action.input,
        text: 'hello jeason',
      };

    case PUSHOBJ:
      state.push({
        numGroup: action.playoutNumGroup,
        kilo: action.playoutKilo,
        actionObj: action.playAction,
      });

    default:
      return state;
  }
}

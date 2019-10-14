const ADD = 'INCREMENT';
const REMOVE = 'DECREMENT';
const PUSHOBJ = 'PUSHOBJ';
export default function MyChoiceActionReducer(
  state = {
    actionGroup: [],
    userInfo: {},
  },
  action,
) {
  switch (action.type) {
    case ADD:
      return {
        name: action.input,
        text: 'hello jeason',
      };

    case PUSHOBJ:
      state.actionGroup.push({
        numGroup: action.playoutNumGroup,
        kilo: action.playoutKilo,
        actionObj: action.playAction,
      });

    default:
      return state;
  }
}

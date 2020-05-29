export default function (state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.elem];
    case "delete":
      const newState = state.filter((obj, i) => action.index !== i);
      return newState;
    default:
      return state;
  }
}

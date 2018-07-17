export function manageFriends(state, action, friend){
  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      const getOut = state.friends.findIndex(friend => friend.id === action.id)
      return {friends: [
        ...state.friends.slice(0, getOut),
        ...state.friends.slice(getOut + 1)
      ]}
    default:
      return state;
  }
}

export function manageFriends(state={friends: []}, action){
  switch (action.type){
    case "ADD_FRIEND":
      return {...state, friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      const removeFriendIndex = state.friends.findIndex(friend => friend.id === action.id)
      let newFriends = [...state.friends]
      newFriends.splice(removeFriendIndex, 1)
      return {...state, friends: newFriends}
    default:
      return state;
  }
}

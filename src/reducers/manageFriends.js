export function manageFriends(state, action){
  switch(action.type){
    case "ADD_FRIEND":
      return Object.assign(state, state.friends.push(action.friend))
    case "REMOVE_FRIEND":
      let removed = {friends: state.friends.filter(el => {
        return el.id !== action.id
      })}
      return removed
    default:
      return state
  }
}

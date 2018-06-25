export function manageFriends(state={friends: []}, action){
    switch(action.type){
        case 'ADD_FRIEND':
            return {...state, friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            let exFriendIndex = state.friends.findIndex(friend => friend.id === action.id)
            let newFriends = [...state.friends]
            newFriends.splice(exFriendIndex, 1)
            return {...state, friends: newFriends}
        default:
            return state
    }
}

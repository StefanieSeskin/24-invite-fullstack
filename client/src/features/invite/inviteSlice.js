import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const inviteSlice = createSlice({
  name: 'invite',
  initialState: {
    // value: 0,
    going: [],
    notgoing: []
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },

    wasInvited: (state, action) => {
      state.invited.push(action.payload);
    },

    addToGoing: (state, action) => {
      console.log(action.payload)
      state.going.push(action.payload);
    },
    addToNotGoing: (state, action) => {
      state.notgoing.push(action.payload)
    }
  },
});

export const { increment, wasInvited, addToGoing, addToNotGoing } = inviteSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const add = guest => dispatch => {
    axios.post('/mark-invitee', guest )
    .then(resp => {
        console.log(resp)
    })
  
  }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the islce file. For example: `useSelector((state) => state.invite.value)`
export const selectCount = state => state.invite.value;

export const getIsGoing = function(state) {
    return state.going
}

// export const addToNotGoing = function(state) {
//   return state.invite.notGoing
// }

// export const addToGoing = function(state) {
//   return state.invite.going
// }

export default inviteSlice.reducer;

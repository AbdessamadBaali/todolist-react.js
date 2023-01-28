import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialstate = [ ]

const taskSlice = createSlice({
    name : "todotask",
    reducers : {
      add_task : ( state,action) => {
          state.push(action.payload);
      },
      update_task  : ( state,action)  => {
        
        console.log(action.payload.newtask)
        console.log(action.payload.id)

        const index = state.findIndex((elem) => elem.id === action.payload.id);
        if(index!== -1) {
          state[index].task = action.payload.newtask
          return state
        } else return state
      },
      delete_task : ( state) => {
        state = state.filter(elem => elem.etat !== 1);
        return state;
      },
      all_task : ( state)  => {
        state = [];
        return state;
      } ,
      update_etat : ( state, action) => {
        const index = state.findIndex((elem) => elem.id === action.payload.id);
        if(index!== -1) {
          (action.payload.etat === 0) ? state[index].etat = 1
          :  state[index].etat = 0;
          return state
        } else return state
        
      }
  }
})


export const  { update_etat , all_task , delete_task , add_task ,  update_task } = taskSlice.actions

export const store = configureStore({
    reducer : taskSlice.reducer,
    preloadedState : initialstate
})

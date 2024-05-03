import {createSlice} from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({

    name: 'fetchStatus',
    initialState:{
        fetchDone: false,
        CurrentlyFetching: false,

    },
    reducers: {
        markFetchDone: (state) => {
            return state.fetchDone = true;
        },
        markFetchingStart:(state)=>{
            return state.CurrentlyFetching = true;
        },
        markFetchingFinished:(state)=>{
            return state.CurrentlyFetching = false;
        }
    }
});


export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;
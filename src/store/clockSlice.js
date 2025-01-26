import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    breakLength: 5,
    sessionLength: 25,
    timer: 1500,
    play: false,
    isSession: true,
};

const clockSlice = createSlice({
    name: 'clock',
    initialState,
    reducers: {
        breakIncrement: state => {
            if (!state.play && state.breakLength < 60) {
                state.breakLength++;
            }
        },
        breakDecrement: state => {
            if (!state.play && state.breakLength > 1) {
                state.breakLength--;
            }
        },
        sessionIncrement: state => {
            if(!state.play && state.sessionLength < 60){
                state.sessionLength++;
            }
        },
        sessionDecrement: state => {
            if(!state.play && state.sessionLength > 1){
                state.sessionLength--;
            }
        },
        timer: (state, action) => {
            state.timer = action.payload;
        },
        playPause: state => {
            state.play = !state.play;
        },
        reset: state => {
            state.breakLength = 5;
            state.sessionLength = 25;
            state.timer = 1500;
            state.play = false;
            state.isSession = true;
        },
        toggleSession: state => {
            state.isSession = !state.isSession;
        }
    }
});

export const { breakIncrement, breakDecrement, sessionIncrement, sessionDecrement, playPause, reset, timer, toggleSession } = clockSlice.actions;

export default clockSlice.reducer;
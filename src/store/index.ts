import {configureStore} from "@reduxjs/toolkit";
import {scheduleReducer} from "../app/model";

export const store = configureStore({
    reducer: {
        schedule: scheduleReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type TypedDispatch = typeof store.dispatch
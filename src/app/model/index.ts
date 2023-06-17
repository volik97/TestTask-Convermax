import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Schedule} from "./typed";

const initialState: Schedule = {
    result: {
        minutes: "*",
        hours: "*",
        dayOfMonth: "*",
        months: "*",
        dayOfWeek: "*",
        years: "*",
    },
    settings: {
        custom: false,
        valid: true,
    }
}

// const validateStartPayload = (payload: string) => {
//     const matched = payload.match(/^((\*|\?)([0-9*?]))$/);
//     if(matched?.[3]) return matched[3];
// }

const slice = createSlice({
    name: "schedule",
    initialState,
    reducers: {
        setMinutes (store, {payload}: PayloadAction<string>) {
            store.result.minutes = payload;
        },
        setHour(store, { payload }: PayloadAction<string>) {
            store.result.hours = payload;
        },
        setDayOfWeeks(store, {payload}: PayloadAction<string>){
            store.result.dayOfWeek = payload;
        },
        setMonths(store, {payload}: PayloadAction<string>){
            store.result.months = payload;
        },
        setYears(store, {payload}: PayloadAction<string>){
            store.result.years = payload;
        },
        setDaysOfMonth(store, {payload}: PayloadAction<string>) {
            store.result.dayOfMonth = payload;
        },
        setValid(store, {payload}: PayloadAction<boolean>){
            store.settings.valid = payload;
        }
    },
})

export const scheduleActions = slice.actions;
export const scheduleReducer = slice.reducer;


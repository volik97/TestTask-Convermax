import {useTypedDispatch} from "../../../../../../../hooks/useTypedDispatch.ts";
import {scheduleActions} from "../../../../../../model";
import {ChangeEvent} from "react";

export const useViewModel = () => {
    const dispatch = useTypedDispatch();

    return {
        setDate(e: ChangeEvent<HTMLInputElement>) {
            const date = new Date(e.target.value);
            if(!isNaN(date.getTime())) {
                dispatch(scheduleActions.setMinutes(`${date.getMinutes()}`));
                dispatch(scheduleActions.setHour(`${date.getHours()}`));
                dispatch(scheduleActions.setMonths(`${date.getMonth() + 1}`))
                dispatch(scheduleActions.setDaysOfMonth(`${date.getDate()}`))
                dispatch(scheduleActions.setYears(`${date.getFullYear()}`))
            }
        }
    }
}
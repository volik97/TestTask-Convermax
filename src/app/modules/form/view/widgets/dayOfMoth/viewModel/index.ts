import {useTypedSelector} from "../../../../../../../hooks/useTypedSelector.ts";
import {useTypedDispatch} from "../../../../../../../hooks/useTypedDispatch.ts";
import {ChangeEvent} from "react";
import {scheduleActions} from "../../../../../../model";

export const useViewModel = () => {
    const daysOfMonth = useTypedSelector((state) => state.schedule.result.dayOfMonth);

    const dispatch = useTypedDispatch()

    return {
        daysOfMonth,
        setDaysOfMonth(e: ChangeEvent<HTMLInputElement>) {
            dispatch(scheduleActions.setDaysOfMonth(e.target.value))
        }
    }
}
import {useTypedSelector} from "../../../../../../../hooks/useTypedSelector.ts";
import {useTypedDispatch} from "../../../../../../../hooks/useTypedDispatch.ts";
import {ChangeEvent} from "react";
import {scheduleActions} from "../../../../../../model";

export const useViewModel = () => {
    const hours = useTypedSelector((state) => state.schedule.result.hours);

    const dispatch = useTypedDispatch()

    return {
        hours,
        setHour(e: ChangeEvent<HTMLInputElement>) {
            dispatch(scheduleActions.setHour(e.target.value))
        }
    }
}
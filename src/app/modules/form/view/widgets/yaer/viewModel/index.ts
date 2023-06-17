import {useTypedSelector} from "../../../../../../../hooks/useTypedSelector.ts";
import {useTypedDispatch} from "../../../../../../../hooks/useTypedDispatch.ts";
import {ChangeEvent} from "react";
import {scheduleActions} from "../../../../../../model";

export const useViewModel = () => {
    const years = useTypedSelector((state) => state.schedule.result.years);

    const dispatch = useTypedDispatch()

    return {
        years,
        setYears(e: ChangeEvent<HTMLInputElement>) {
            dispatch(scheduleActions.setYears(e.target.value))
        }
    }
}
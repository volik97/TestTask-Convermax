import {useTypedSelector} from "../../../../../../../hooks/useTypedSelector.ts";
import {useTypedDispatch} from "../../../../../../../hooks/useTypedDispatch.ts";
import {ChangeEvent} from "react";
import {scheduleActions} from "../../../../../../model";
import {Format} from "../../../../../../model/typed";

export const useViewModel = () => {
    const minutes = useTypedSelector((state) => state.schedule.result.minutes);

    const dispatch = useTypedDispatch()

    return {
        minutes,
        setMinutes(e: ChangeEvent<HTMLInputElement>) {
            dispatch(scheduleActions.setMinutes(e.target.value as Format))
        }
    }
}
import {useTypedDispatch} from "../../../../../../../hooks/useTypedDispatch.ts";
import {scheduleActions} from "../../../../../../model";
import {ChangeEvent} from "react";

export const useViewModel = () => {
    const dispatch = useTypedDispatch();

    return {
        setDayOfWeeks(e: ChangeEvent<HTMLSelectElement>) {
            const value = Array.from(e.target.options).filter((item) => item.selected).map((item) => item.value).join(",");
            dispatch(scheduleActions.setDayOfWeeks(value || "*"))
        }
    }
}
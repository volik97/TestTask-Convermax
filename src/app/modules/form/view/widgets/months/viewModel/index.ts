import {useTypedDispatch} from "../../../../../../../hooks/useTypedDispatch.ts";
import {scheduleActions} from "../../../../../../model";
import {ChangeEvent, useEffect, useRef} from "react";
import {useTypedSelector} from "../../../../../../../hooks/useTypedSelector.ts";

export const useViewModel = () => {
    const months = useTypedSelector(state => state.schedule.result.months);
    const ref = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        if (ref.current && ref.current.options) {
            const options = Array.from(ref.current!.options);

            options.forEach((item) => item.selected = false)

            months.split(",").forEach((value) => {
                const option = options.find((item) => `${item.value}` === value);
                if(option) option.selected = true;
            });
        }
    }, [months])

    const dispatch = useTypedDispatch();

    return {
        ref,
        setMonths(e: ChangeEvent<HTMLSelectElement>) {
            const value = Array.from(e.target.options).filter((item) => item.selected).map((item) => item.value).join(",");
            dispatch(scheduleActions.setMonths(value || "*"))
        }
    }
}
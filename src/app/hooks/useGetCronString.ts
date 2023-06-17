import {useMemo} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";

export const useGetCronString = () => {
    const schedule = useTypedSelector((state) => state.schedule);

    return useMemo(() =>
            schedule.result.minutes + " " +
            schedule.result.hours + " " +
            schedule.result.dayOfMonth + " " +
            schedule.result.months + " " +
            schedule.result.dayOfWeek + " " +
            schedule.result.years
        , [schedule]);
}
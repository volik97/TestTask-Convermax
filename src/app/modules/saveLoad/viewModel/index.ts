import {useTypedSelector} from "../../../../hooks/useTypedSelector.ts";
import {useGetCronString} from "../../../hooks/useGetCronString.ts";
import {ChangeEvent, useCallback, useEffect, useRef, useState} from "react";
import {useTypedDispatch} from "../../../../hooks/useTypedDispatch.ts";
import {scheduleActions} from "../../../model";
import {cronRegExp} from "../../../../utils/cronRegExp";

export const useViewModel = () => {
    const schedule = useTypedSelector((state) => state.schedule);
    const dispatch = useTypedDispatch();

    const cronString = useGetCronString();

    const saveCron = useCallback(() => {
        const file = new Blob([cronString], { type: "text/plain" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(file);
        a.download = "cron";
        a.click();
    }, [cronString]);

    
    const [loadError, setLoadError] = useState(false);
    const loadCron = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(file){
            try {
                const text = await file.text();
                console.log(text.match(cronRegExp))
                if(text.match(cronRegExp)){
                    const [min, hour, daysOfMonth, months, daysOfWeek, year] = text.split(" ");
                    dispatch(scheduleActions.setMinutes(min));
                    dispatch(scheduleActions.setHour(hour));
                    dispatch(scheduleActions.setDaysOfMonth(daysOfMonth));
                    dispatch(scheduleActions.setMonths(months));
                    dispatch(scheduleActions.setDayOfWeeks(daysOfWeek))
                    dispatch(scheduleActions.setYears(year));
                } else throw new Error();
            } catch (e) {
                setLoadError(true);
            }
        }
    }, [dispatch]);

    const timerId = useRef<any>();
    useEffect(() => {
        if(loadError){
            clearTimeout(timerId.current);
            timerId.current = setTimeout(() => {
                setLoadError(false);
            }, 3000);
        }
    }, [loadError])

    return  {
        valid: !schedule.settings.valid,
        saveCron,
        loadCron,
        loadError,
    }
}
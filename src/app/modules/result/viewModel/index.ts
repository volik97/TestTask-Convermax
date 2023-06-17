import {useTypedSelector} from "../../../../hooks/useTypedSelector.ts";
import { useEffect} from "react";
import {useTypedDispatch} from "../../../../hooks/useTypedDispatch.ts";
import {scheduleActions} from "../../../model";
import {useGetCronString} from "../../../hooks/useGetCronString.ts";
import {cronRegExp} from "../../../../utils/cronRegExp";

export const useViewModel = () =>  {
    const schedule = useTypedSelector((state) => state.schedule);
    const dispatch = useTypedDispatch();

    const cronString = useGetCronString();

    // const getRegExp = useCallback(() => new RegExp(``), []);

    useEffect(() => {
        if(cronString.match(cronRegExp)) dispatch(scheduleActions.setValid(true));
        else dispatch(scheduleActions.setValid(false));
    }, [dispatch, cronString])
    
    return {result: cronString, disabled: !schedule.settings.custom, valid: schedule.settings.valid};
}
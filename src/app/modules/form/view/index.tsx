import {DaysOfWeek} from "./widgets/dayOfWeek/view";
import {Minutes} from "./widgets/minutes/view";
import {Hour} from "./widgets/hour/view";
import {Calendar} from "./widgets/calendar/view";
import {Months} from "./widgets/months/view";
import {Year} from "./widgets/yaer/view";
import {DayOfMonth} from "./widgets/dayOfMoth/view";

export const Form = () => {

    return (
        <>
            <Calendar />
            <Year />
            <DaysOfWeek />
            <Months />
            <DayOfMonth />
            <Hour />
            <Minutes />
        </>
    )
};
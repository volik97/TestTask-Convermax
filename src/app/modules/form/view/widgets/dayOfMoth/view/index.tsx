import {Style} from "./style.ts";
import {useViewModel} from "../viewModel";

export const DayOfMonth = () => {
    const { daysOfMonth, setDaysOfMonth } = useViewModel();
    return (
        <Style>
            <input onChange={setDaysOfMonth} value={daysOfMonth} className="eachMinutes_input" />
            Days of month
        </Style>
    )
}
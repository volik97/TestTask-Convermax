import {Style} from "./style.ts";
import {useViewModel} from "../viewModel";

export const Hour = () => {
    const { hours, setHour } = useViewModel();
    return (
        <Style>
            <input onChange={setHour} value={hours} className="eachMinutes_input" />
            Hours
        </Style>
    )
}
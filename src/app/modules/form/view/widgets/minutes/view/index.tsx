import {Style} from "./style.ts";
import {useViewModel} from "../viewModel";

export const Minutes = () => {
    const { minutes, setMinutes } = useViewModel();
    return (
        <Style>
            <input onChange={setMinutes} value={minutes} className="eachMinutes_input" />
            Minutes
        </Style>
    )
}
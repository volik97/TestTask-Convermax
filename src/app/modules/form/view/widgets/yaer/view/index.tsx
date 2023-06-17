import {Style} from "./style.ts";
import {useViewModel} from "../viewModel";

export const Year = () => {
    const { years, setYears } = useViewModel();
    return (
        <Style>
            <input onChange={setYears} value={years} className="eachMinutes_input" />
            Years
        </Style>
    )
}
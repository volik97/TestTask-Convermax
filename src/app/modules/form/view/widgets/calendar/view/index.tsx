import {Style} from "./style.ts";
import {useViewModel} from "../viewModel";

export const Calendar = () => {
    const { setDate } = useViewModel();

    return (
        <Style>
            <input multiple onChange={setDate} type="datetime-local" />
        </Style>
    )
}
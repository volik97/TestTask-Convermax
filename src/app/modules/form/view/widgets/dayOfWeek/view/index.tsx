import {useViewModel} from "../viewModel";
import {Style} from "./style.ts";

export const DaysOfWeek = () => {
    const { setDayOfWeeks } = useViewModel();

    return (
        <Style>
            <select className="weekSelect" multiple onChange={setDayOfWeeks}>
                <option value={1}>Monday</option>
                <option value={2}>Tuesday</option>
                <option value={3}>Wednesday</option>
                <option value={4}>Thursday</option>
                <option value={5}>Friday</option>
                <option value={6}>Saturday</option>
                <option value={7}>Sunday</option>
            </select>
        </Style>
    )
}
import {Button} from "../../../../ui/button";
import {Style} from "./style.ts";
import {useViewModel} from "../viewModel";

export const SaveLoad = () => {
    const { valid, saveCron, loadCron, loadError } = useViewModel();

    return (
        <Style>
            <Button disabled={valid} onClick={saveCron}>Save</Button>
            <label>
                <input onChange={loadCron} accept="txt" type="file" />
                Load
            </label>

            {loadError && <div className="error">Ошибка загрузки файла, проверьте формат</div>}
        </Style>
    )
}
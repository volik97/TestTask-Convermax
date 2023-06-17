import {useViewModel} from "../viewModel";
import {StyledInput} from "./style.ts";

export const Result = () => {
    const { result, disabled, valid } = useViewModel();

    return <StyledInput disabled={disabled} $valid={valid} value={result} />
};

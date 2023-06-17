import {TypedDispatch} from "../store";
import {useDispatch} from "react-redux";

export const useTypedDispatch: () => TypedDispatch = useDispatch
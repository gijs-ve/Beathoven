import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { T_RootState } from "../../store";

export const useAppSelector: TypedUseSelectorHook<T_RootState> = useSelector;

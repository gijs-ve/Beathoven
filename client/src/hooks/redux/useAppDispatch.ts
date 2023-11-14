import { useDispatch } from "react-redux";
import type { T_AppDispatch } from "../../store";

export const useAppDispatch: () => T_AppDispatch = useDispatch;

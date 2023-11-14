import { T_Output } from "./Sound";

export type T_Profile = {
  id: string;
  name: string;
  hotkeys: T_Hotkey<T_HotkeyTypes>[];
};
export type T_HotkeyTypes =
  | "swap"
  | "output"
  | "play"
  | "stop"
  | "record"
  | "loop";

export type T_Hotkey<TG_HotkeyTypes extends T_HotkeyTypes> = {
  id: string;
  name: string;
  key: string;
  type: TG_HotkeyTypes;
  output?: TG_HotkeyTypes extends "output" ? T_Output : undefined;
  swap?: TG_HotkeyTypes extends "swap" ? string : undefined;
};

import { T_Instrument } from ".";

export type T_Sound = {
  src: string;
  name: string;
};

export type T_Output = `${
  | "A"
  | "A#"
  | "B"
  | "C"
  | "C#"
  | "D"
  | "D#"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "G#"}${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`;
export type T_PlayingOutput = {
  output: T_Output;
  instrument: T_Instrument;
};

import { T_Instrument, T_Output } from ".";

export type T_Recording = {
  id: string;
  name: string;
  outputs: string[];
};

export type T_RecordedOutput = {
  instrument: T_Instrument;
  output: T_Output;
  start: number;
  end: number;
  recordingId: string;
};

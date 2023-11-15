import * as Tone from "tone";
import { T_Instrument, T_Output } from "../../../types";

export const enableTone = async () => {
  await Tone.start();
};
export const playSound = ({
  sound,
  instrument,
}: {
  sound: T_Output;
  instrument: T_Instrument;
}) => {
  const synth = new Tone.Synth().toDestination();
  const now = Tone.now();
  synth.triggerAttack(sound, now);
};

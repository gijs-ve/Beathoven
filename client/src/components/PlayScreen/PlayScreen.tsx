"use client";
import { onPractiseClick } from "@/functions/buttons/onPractiseClick";
import { enableTone } from "@/functions/tone";
import { BigButton } from "../Buttons/BigButton";

export const PlayScreen = () => {
  return (
    <>
      <BigButton
        onClick={() => onPractiseClick()}
        text="Practise"
        className="text-2xl bg-orange-700 hover:bg-orange-800"
      />
      <BigButton
        onClick={() => enableTone()}
        text="Play"
        className="text-2xl bg-orange-700 hover:bg-orange-800"
      />
    </>
  );
};

import { BigButton } from "@/components/Buttons/BigButton";

export default function Play() {
  return (
    <div className="flex justify-center sw-full">
      <BigButton
        text="Practise"
        className="text-2xl bg-orange-700 hover:bg-orange-800"
      />
      <BigButton
        text="Play"
        className="text-2xl bg-orange-700 hover:bg-orange-800"
      />
    </div>
  );
}

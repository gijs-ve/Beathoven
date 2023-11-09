import Link from "next/link";

export const Logo = () => {
  return (
    <div className="flex flex-row items-center bg-gray-800">
      <div className="flex flex-col py-4">
        <Link
          href="/"
          className="text-4xl font-bold text-blueish-300 drop-shadow-2xl pl-8 "
        >
          Beathoven
        </Link>
      </div>
    </div>
  );
};

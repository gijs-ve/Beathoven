"use client";
import classNames from "classnames";
export type T_BigButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;
export const BigButton = ({
  text,
  onClick,
  className,
  ...props
}: T_BigButtonProps) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={classNames(
        "flex items-center justify-center px-16 py-8 text-xl border-xl border-2 rounded-xl mx-4 bg-blueish-700 border-blueish-800 w-[250px] h-[250px] hover:bg-blueish-800 hover:drop-shadow-xl",
        className
      )}
    >
      {text}
    </button>
  );
};

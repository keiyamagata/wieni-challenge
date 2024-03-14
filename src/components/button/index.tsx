import clsx from "clsx";

type ButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

export const Button = ({
  children,
  onClick,
  className,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "textColor group flex items-center gap-1 rounded-full px-3 py-1.5 ring-pink-500 hover:ring-2 focus:outline-none focus:ring-2",
        disabled && "opacity-25 hover:bg-transparent hover:ring-0",
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

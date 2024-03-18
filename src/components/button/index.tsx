import clsx from "clsx";

type ButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
  ariaHaspopup?:
    | boolean
    | "false"
    | "true"
    | "menu"
    | "listbox"
    | "tree"
    | "grid"
    | "dialog"
    | undefined;
  ariaControls?: string;
  ariaExpanded?: boolean;
  dataCollapseToggle?: string;
  primary?: boolean;
};

export const Button = ({
  children,
  onClick,
  className,
  disabled,
  ariaLabel,
  ariaHaspopup,
  ariaControls,
  ariaExpanded,
  dataCollapseToggle,
  primary,
}: ButtonProps) => {
  return (
    <button
      data-collapse-toggle={dataCollapseToggle}
      aria-label={ariaLabel}
      aria-haspopup={ariaHaspopup}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        className,
        "textColor group z-10 inline-flex items-center gap-1 p-2 hover:bg-indigo-100 hover:ring-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:hover:bg-indigo-700",
        primary ? "z-10 rounded-lg" : "z-0 rounded-full",
        disabled
          ? "opacity-25 hover:bg-transparent dark:hover:bg-transparent"
          : "hover:bg-indigo-200 dark:hover:bg-indigo-700"
      )}
    >
      {children}
    </button>
  );
};

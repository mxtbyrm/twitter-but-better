import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode | undefined;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex flex-row bg-secondary gap-4 px-4 py-3 rounded-sm hover:bg-secondary/90 items-center justify-center relative",
          className,
        )}
      >
        <div className={"w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2"}>
          {props.icon != undefined && props.icon}
        </div>
        <input
          type={type}
          className={cn(
            "flex h-fit w-full rounded-sm bg-transparent text-base placeholder:font-bold px-2 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            props.icon && "ml-6",
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };

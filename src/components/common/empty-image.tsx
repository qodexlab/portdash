import { JSX, SVGProps } from "react";
import { cn } from "@/utils/cn";

export const EmptyImage = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center border border-dashed border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-800",
        className,
      )}
    >
      <ImageIcon className="h-6 w-6 text-gray-400 dark:text-gray-600" />
    </div>
  );
};

function ImageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

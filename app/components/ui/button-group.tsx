import { cn } from "~/utils/cn"

export function ButtonGroup({
  className,
  children,
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-wrap gap-2 sm:gap-4", className)}>
      {children}
    </div>
  )
}

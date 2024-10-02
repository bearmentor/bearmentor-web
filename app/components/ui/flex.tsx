import { cn } from "~/utils/cn"

export function Flex({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex gap-2", className)} {...props} />
}

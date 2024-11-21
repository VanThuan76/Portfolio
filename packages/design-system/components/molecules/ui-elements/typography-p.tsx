import { cn } from "@repo/design-system/utils/tw";

interface Props {
  title: string;
  className?: string;
}
export function TypographyP({ title, className }: Props) {
  return <p className={cn("leading-7", className)}>{title}</p>;
}

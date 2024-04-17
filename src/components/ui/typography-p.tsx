interface Props {
  title: string;
  className?: string;
}
export function TypographyP({ title, className }: Props) {
  return <p className={`leading-7 ${className}`}>{title}</p>;
}
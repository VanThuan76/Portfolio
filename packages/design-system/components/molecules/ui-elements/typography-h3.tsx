interface Props {
  title: string;
  className?: string;
}
export function TypographyH3({ title, className }: Props) {
  return (
    <h3
      className={`scroll-m-20 text-lg md:text-2xl font-semibold tracking-tight ${className}`}
    >
      {title}
    </h3>
  );
}

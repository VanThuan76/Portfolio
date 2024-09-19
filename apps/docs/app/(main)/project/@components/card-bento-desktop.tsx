import { cn } from "@utils/tw";
import MovingGradient from "@ui/molecules/frame/moving-gradient";

export function BentoCard({
  title,
  icon,
  description,
  children,
  gradient,
  className,
}: {
  children?: React.ReactNode;
  title: React.ReactNode;
  icon: React.ReactNode;
  gradient?: string;
  description: React.ReactNode;
  className?: string;
}) {
  return (
    <MovingGradient
      animated={false}
      className={cn(className)}
      gradientClassName={cn("opacity-10", gradient)}
    >
      <section className="flex flex-col h-full gap-2 p-4">
        <header>
          <div className="flex items-center gap-2 mb-2">
            {icon}
            <p className="font-bold text-md line-clamp-1">{title}</p>
          </div>
        </header>
        <div className="flex-1 text-sm font-medium text-opacity-80">
          {description}
        </div>
        {children}
      </section>
    </MovingGradient>
  );
}

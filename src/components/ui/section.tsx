import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("px-6 py-24 md:px-12 lg:px-24", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-16", className)}>
      {label && (
        <span className="mb-3 block text-sm font-medium uppercase tracking-widest text-neutral-500">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-neutral-100 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
}

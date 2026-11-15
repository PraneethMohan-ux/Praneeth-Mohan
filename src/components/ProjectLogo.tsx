import type { Project } from '../data/portfolio';

type ProjectLogoProps = {
  project: Pick<Project, 'logo' | 'title'>;
  size?: 'card' | 'featured' | 'modal';
  className?: string;
};

export default function ProjectLogo({ project, size = 'card', className = '' }: ProjectLogoProps) {
  if (!project.logo) return null;

  const isWide = /(?:vitacode|msme|bah\.jfif)/i.test(project.logo);
  const dimensions = {
    card: isWide ? 'h-16 w-32 sm:h-20 sm:w-40' : 'h-24 w-24 sm:h-28 sm:w-28',
    featured: isWide ? 'h-14 w-28 sm:h-16 sm:w-32' : 'h-16 w-16 sm:h-20 sm:w-20',
    modal: isWide ? 'h-24 w-44 sm:h-32 sm:w-56' : 'h-36 w-36 sm:h-52 sm:w-52',
  }[size];

  return (
    <div className={`flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-xl ring-1 ring-white/70 ${dimensions} ${className}`}>
      <img src={project.logo} alt={`${project.title} logo`} className="max-h-full max-w-full object-contain" loading="lazy" />
    </div>
  );
}

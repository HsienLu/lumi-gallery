export default function SectionTitle({ overline, title, subtitle }){
    return (
      <div className="mb-8">
{overline && <div className="mb-2 text-sm text-black/80">{overline}</div>}
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-2 text-black/70 max-w-prose">{subtitle}</p>}
      </div>
    )
  }
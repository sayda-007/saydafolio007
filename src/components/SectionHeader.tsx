type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

function SectionHeader({ eyebrow, title, description, className = '' }: SectionHeaderProps) {
  return (
    <div className={`section-header ${className}`.trim()}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}

export default SectionHeader

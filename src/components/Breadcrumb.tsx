// src/components/Breadcrumb.tsx
import { Link } from 'react-router-dom'

interface BreadcrumbProps {
  items: { label: string; href?: string }[]
}

const Breadcrumb = ({ items }: BreadcrumbProps) => (
  <nav className="mt-4 text-sm md:text-base breadcrumbs mb-4">
    <ol className="flex gap-2">
      {items.map((item, idx) => (
        <li key={idx}>
          {item.href ? (
            <Link to={item.href} className="text-white/80 hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold">{item.label}</span>
          )}
          {idx < items.length - 1 && <span className="mx-2">/</span>}
        </li>
      ))}
    </ol>
  </nav>
)

export default Breadcrumb

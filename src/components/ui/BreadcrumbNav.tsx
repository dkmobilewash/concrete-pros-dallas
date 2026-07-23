import Link from 'next/link'

interface BreadcrumbNavProps {
  items: { label: string; href?: string }[]
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-brand-gray-mid">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              {isLast || !item.href ? (
                <span className="text-white">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-brand-orange transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

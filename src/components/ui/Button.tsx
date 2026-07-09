import Link from 'next/link'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  children: React.ReactNode
  className?: string
}

export function Button({ variant = 'primary', href, children, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold transition-colors duration-200'
  const variants = {
    primary: 'bg-brand-orange hover:bg-brand-orange-dark text-white px-6 py-3 rounded-md',
    secondary: 'border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-6 py-3 rounded-md',
    ghost: 'text-white underline underline-offset-4',
  }
  const classes = `${base} ${variants[variant]} ${className}`

  if (href?.startsWith('tel:') || href?.startsWith('mailto:')) {
    return <a href={href} className={classes}>{children}</a>
  }
  if (href) {
    return <Link href={href} className={classes}>{children}</Link>
  }
  return <button className={classes}>{children}</button>
}

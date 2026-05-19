import Link from 'next/link'

export default function Button({ href, onClick, variant = 'primary', size = '', children, className = '', type = 'button', ...props }) {
  const cls = `btn btn-${variant}${size ? ` btn-${size}` : ''} ${className}`.trim()

  if (href) {
    return <Link href={href} className={cls} {...props}>{children}</Link>
  }

  return (
    <button type={type} className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

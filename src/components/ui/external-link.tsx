import React from 'react'

function ExternalLink({
  children,
  ...rest
}: React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) {
  return (
    <a {...rest} target="_blank" rel="noopener">
      {children}
    </a>
  )
}

export { ExternalLink }

import { FunctionComponent, ReactNode } from 'react'
import classnames from 'classnames'
import './style.scss'

export interface ButtonProps {
  prepend?: ReactNode
  btnStyle?: 'accent' | 'default' | 'clear'
  size?: 'md' | 'sm' | 'xs'
  href?: string
  onClick?: () => void
}

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const { children, prepend, btnStyle, size, href, onClick } = props
  const rootClasses = classnames({
    button: true,
    'button--accent': btnStyle === 'accent',
    'button--clear': btnStyle === 'clear',
    'button--prepended': !!prepend,
    'button--sm': size === 'sm',
    'button--xs': size === 'xs',
  })

  const Tag = href ? 'a' : 'button'

  return (
    <Tag className={rootClasses} href={href || undefined} onClick={onClick}>
      {prepend && <div className="button__prepend">{prepend}</div>}

      <div className="button__content">{children}</div>
    </Tag>
  )
}

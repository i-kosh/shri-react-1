import { FunctionComponent, ReactNode, ButtonHTMLAttributes } from 'react'
import classnames from 'classnames'
import './style.scss'

type NativeAttributes = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  keyof ButtonProps
>

export interface ButtonProps {
  prepend?: ReactNode
  btnStyle?: 'accent' | 'default' | 'clear'
  size?: 'md' | 'sm' | 'xs'
  attributes?: NativeAttributes
}

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const { children, prepend, btnStyle, size, attributes } = props
  const rootClasses = classnames({
    button: true,
    'button--accent': btnStyle === 'accent',
    'button--clear': btnStyle === 'clear',
    'button--prepended': !!prepend,
    'button--sm': size === 'sm',
    'button--xs': size === 'xs',
  })

  return (
    <button className={rootClasses} {...attributes}>
      {prepend && <div className="button__prepend">{prepend}</div>}

      <div className="button__content">{children}</div>
    </button>
  )
}

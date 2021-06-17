import { FunctionComponent, InputHTMLAttributes, useRef, useState } from 'react'
import classnames from 'classnames'
import './style.scss'

type NativeAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  keyof InputProps
>

export interface InputProps {
  attributes?: NativeAttributes
  clearable?: boolean
}

export const Input: FunctionComponent<InputProps> = (props) => {
  const { attributes, clearable } = props
  const rootClasses = classnames({
    input: true,
    'input--clearable': clearable,
  })

  const inputRef = useRef<null | HTMLInputElement>(null)

  const [isClearable, setIsClearable] = useState(
    !!(clearable && inputRef.current?.value)
  )

  const onClearClick = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
      setIsClearable(false)
    }
  }

  const onInput = () => {
    if (inputRef.current?.value && clearable) {
      setIsClearable(true)
    }
  }

  return (
    <div className={rootClasses}>
      <input
        ref={inputRef}
        onInput={onInput}
        className="input__elem"
        {...attributes}
      />

      {isClearable && (
        <button
          onClick={onClearClick}
          className="input__clear"
          title="Clear"
        ></button>
      )}
    </div>
  )
}

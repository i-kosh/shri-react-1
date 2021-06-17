import { FormEventHandler, FunctionComponent, useRef, useState } from 'react'
import classnames from 'classnames'
import './style.scss'

export interface InputProps {
  defaultValue?: string
  clearable?: boolean
  onInput?: (val: string) => unknown
  disabled?: boolean
  placeholder?: string
  type?: string
}

export const Input: FunctionComponent<InputProps> = (props) => {
  const rootClasses = classnames({
    input: true,
    'input--clearable': props.clearable,
  })

  const inputRef = useRef<null | HTMLInputElement>(null)
  const [isClearable, setIsClearable] = useState(
    !!(props.clearable && props.defaultValue && !props.disabled)
  )

  const onClearClick = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
      props.onInput && props.onInput('')
      setIsClearable(false)
    }
  }
  const onInputHandler: FormEventHandler<HTMLInputElement> = (evt) => {
    props.onInput && props.onInput(evt.currentTarget.value)

    if (inputRef.current?.value && props.clearable) {
      setIsClearable(true)
    }
  }

  return (
    <div className={rootClasses}>
      <input
        disabled={props.disabled}
        defaultValue={props.defaultValue}
        ref={inputRef}
        onInput={onInputHandler}
        className="input__elem"
        type={props.type}
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

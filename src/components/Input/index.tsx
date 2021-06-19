import { FormEventHandler, FunctionComponent, useRef, useState } from 'react'
import classnames from 'classnames'
import './style.scss'
import { InputHTMLAttributes } from 'react'

type NativeAttrs = Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputProps>

export interface InputProps {
  defaultValue?: string
  clearable?: boolean
  onInput?: (val: string) => unknown
  nativeAttrs?: NativeAttrs
  hideNumberArrows?: boolean
}

export const Input: FunctionComponent<InputProps> = (props) => {
  const rootClasses = classnames({
    input: true,
    'input--clearable': props.clearable,
    'input--hide-arrows': props.hideNumberArrows,
  })

  const inputRef = useRef<null | HTMLInputElement>(null)
  const [isClearable, setIsClearable] = useState(
    !!(props.clearable && props.defaultValue && !props.nativeAttrs?.disabled)
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
        {...props.nativeAttrs}
        defaultValue={props.defaultValue}
        ref={inputRef}
        onInput={onInputHandler}
        className="input__elem"
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

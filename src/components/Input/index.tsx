import {
  FormEventHandler,
  FunctionComponent,
  useRef,
  useState,
  InputHTMLAttributes,
} from 'react'
import classnames from 'classnames'
import './style.scss'

type NativeAttrs = Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputProps>

export interface InputProps {
  nativeAttrs?: NativeAttrs
  className?: string
  clearable?: boolean
  hideNumberArrows?: boolean
  onInput?: FormEventHandler<HTMLInputElement>
}

export const Input: FunctionComponent<InputProps> = (props) => {
  const { className, nativeAttrs, clearable, hideNumberArrows } = props
  const rootClasses =
    classnames({
      input: true,
      'input--clearable': clearable,
      'input--hide-arrows': hideNumberArrows,
    }) + ` ${className || ''}`

  const inputRef = useRef<null | HTMLInputElement>(null)

  const [isClearable, setIsClearable] = useState(
    !!(clearable && nativeAttrs?.defaultValue && !nativeAttrs?.disabled)
  )

  const onClearClick = () => {
    if (inputRef.current && !inputRef.current.disabled) {
      inputRef.current.value = ''
      inputRef.current.dispatchEvent(
        new Event('input', {
          bubbles: true,
          cancelable: true,
        })
      )
      setIsClearable(false)
    }
  }

  const onInputHandler: FormEventHandler<HTMLInputElement> = (evt) => {
    if (inputRef.current?.value && clearable) {
      setIsClearable(true)
    } else if (clearable) {
      setIsClearable(false)
    }

    props.onInput && props.onInput(evt)
  }

  return (
    <div className={rootClasses}>
      <input
        className="input__elem"
        defaultValue={nativeAttrs?.defaultValue}
        ref={inputRef}
        onInput={onInputHandler}
        {...nativeAttrs}
      />

      {isClearable && (
        <button
          onClick={onClearClick}
          className="input__clear"
          title="Clear"
          type="button"
        ></button>
      )}
    </div>
  )
}

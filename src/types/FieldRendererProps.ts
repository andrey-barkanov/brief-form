import { ReactNode, ReactElement, MutableRefObject } from 'react'
import { FormInputProps } from './FormInputProps'

/**
 * Props type which should be implemented by UI field component
 * (which will draw label, errors, input component (a-ka children)),
 * Don't confuse it with FieldProps form "component/Field". It's
 * slightly different interface, Field component call field renderer
 * under the hood. For example Field expects input in "input" property
 * while field rendeder gets this input as a child.
 */
export type FieldRendererProps<ValueType, InputProps> = {
  children: ReactElement<FormInputProps<ValueType, InputProps>>
  readonly name: string
  containerRef: MutableRefObject<any>
  label?: ReactNode
  error?: string
  required?: boolean
  inputProps: InputProps
  triggerValidatorBy?: (keyof ValueType)[]
}
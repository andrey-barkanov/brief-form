import { FC } from 'react'
import { FormConfig, FieldRendererProps } from '../../types'

export interface FormProps<FormShape> {
  config: FormConfig<FormShape>
  fieldRenderer?: FC<FieldRendererProps<any, any, any>>
  children?: any
  name?: string
}

import { createContext } from 'react'
import { FormConfigContextShape } from '../types'

function fieldStub() {
  return null
}

export const FormConfigContext = createContext<FormConfigContextShape>({
  fieldRenderer: fieldStub
})
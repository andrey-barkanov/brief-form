import * as React from 'react';
import isEqual from 'lodash.isequal';
import { FormOptions, RegisteredField } from '../types';

type ReturnType<T, E> = {
  formValue: T;
  formErrors: E;
  onChange: (value: T, errors: E) => void;
  isDirty: boolean;
  isValid: boolean;
  registeredFields: React.RefObject<{ [key: string]: RegisteredField }>;
  validate: (withFormUpdate?: boolean) => ({ [key: string]: any });
}

export const useFormData = <T, E>(initial: T, errors?: E, opts?: FormOptions): ReturnType<T, E> => {
  const [formValue, setFormValue] = React.useState<T>(initial);
  const [formErrors, setFormErrors] = React.useState(errors || {} as any);
  const [isDirty, setDirty] = React.useState(false);
  const registeredFields = React.useRef<{ [key: string]: RegisteredField }>({});

  const onChange = React.useCallback((value: T, errors: E) => {
    setFormValue(value);
    setFormErrors(errors);

    if (!isEqual(initial, value)){
      setDirty(true);
    }
  }, [setFormValue, setFormErrors, setDirty, formValue, formErrors, initial]);

  const validate = React.useCallback((withFormUpdate?: boolean) => {
    const result: { [key: string]: any } = {};

    if (registeredFields.current) {
      Object.keys(registeredFields.current).forEach((key) => {
        const meta = registeredFields.current[key];
        const fieldValue = (formValue as any)[key];
        const inputError = meta.required && (fieldValue === '' || fieldValue === null || fieldValue === undefined)
          ? opts?.requiredLabel || 'Required'
          : undefined;
        const validatorError = meta.validator ? meta.validator(fieldValue, formValue) : undefined;
        const error = validatorError || inputError || formErrors[key];

        if (error) {
          result[key] = error;
        } else {
          delete result[key];
        }
      });
    }

    if (withFormUpdate) {
      setFormErrors({ ...formErrors, ...result });
    }

    return result;
  }, [registeredFields, formValue, setFormErrors, formErrors, opts]);

  const isValid = !Object.keys(validate()).length;

  return { formValue, formErrors, onChange, isDirty, isValid, registeredFields, validate };
};

import * as React from 'react';
import { BriefFormContext } from '../../context';
import { FormInputProps, FormValuesShape } from '../../types';

export interface FieldProps {
  name: string;
  type?: string;
  label?: React.ReactNode;
  component?: React.ComponentType<FormInputProps>;
  debounced?: boolean;
  required?: boolean;
  validator?: (v: any, f: FormValuesShape) => string | undefined;
  inputProps?: { [key: string]: any };
}

export const Field = React.memo((props: FieldProps) => {
  const { name, type, component, debounced, required, label, inputProps, validator } = props;
  const context = React.useContext(BriefFormContext);
  const { value, errors, onChange, components, field: Field } = context;
  const FormInput = component || components[type || ''];
  const safeErrors = errors || {};

  console.log(`Field: [${name}], form value: ${value}`);

  if (Object.keys(value).indexOf(name) === -1) {
    throw new Error(`Field name "${name}" doesn't present in form value object.`);
  }

  const onFormInputChange = (v: any, e?: string) => {
    console.log(`OnChange: [${name}], value: ${v}, form: ${value}`);
    const validatorError = validator ? validator(v, value) : undefined;
    onChange({ ...value, [name]: v }, { ...safeErrors, [name]: e || validatorError });
  };

  if (!type && !component) {
    throw new Error('Either "type" or "component" props should be passed to render proper form input control.');
  }

  return (<Field required={required} error={safeErrors[name]} label={label}>
    <FormInput
      {...inputProps}
      value={value[name]}
      error={safeErrors[name]}
      onChange={onFormInputChange}
      debounced={debounced}
      required={required}
    />
  </Field>);
});

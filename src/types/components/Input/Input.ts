import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

export type InputProps = {
  type?: 'text' | 'textarea';
  name: string;
  rows?: number;
  placeholder: string;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  validationSchema?: RegisterOptions<FieldValues>;
  children?: JSX.Element;
};

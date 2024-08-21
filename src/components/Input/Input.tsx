import { useTranslations } from 'next-intl';
import { InputProps } from '@/types/components/Input/Input';

function InputText(props: InputProps) {
  const t = useTranslations('inputValidation');

  const registrationOptions = {
    ...props.validationSchema,
    required:
      props.validationSchema?.required === true
        ? t('required')
        : props.validationSchema?.required,
  };

  return (
    <div
      className={`position-relative ${
        props.errors[props.name] ? 'mb-2' : 'mb-3'
      }`}
    >
      <input
        type={props.type}
        className={`form-control ${
          props.errors[props.name] ? 'is-invalid' : ''
        }`}
        placeholder={props.placeholder}
        {...props.register?.(
          props.name,
          props.validationSchema ? registrationOptions : undefined
        )}
      />
      <div className="invalid-feedback fw-medium">
        {props.errors && (props.errors[props.name]?.message as string)}
      </div>
      {props.children}
    </div>
  );
}

function InputTextarea(props: InputProps) {
  const t = useTranslations('inputValidation');

  const registrationOptions = {
    ...props.validationSchema,
    required:
      props.validationSchema?.required === true
        ? t('required')
        : props.validationSchema?.required,
  };

  return (
    <div
      className={`position-relative ${
        props.errors[props.name] ? 'mb-2' : 'mb-3'
      }`}
    >
      <textarea
        rows={props.rows}
        className={`form-control ${
          props.errors[props.name] ? 'is-invalid' : ''
        }`}
        placeholder={props.placeholder}
        {...props.register?.(
          props.name,
          props.validationSchema ? registrationOptions : undefined
        )}
      />
      <div className="invalid-feedback fw-medium">
        {props.errors && (props.errors[props.name]?.message as string)}
      </div>
      {props.children}
    </div>
  );
}

export default function Input({ type = 'text', ...props }: InputProps) {
  switch (type) {
    case 'textarea':
      return <InputTextarea {...props} />;
    default:
      return <InputText {...props} />;
  }
}

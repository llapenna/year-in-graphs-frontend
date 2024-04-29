import { input } from './styles';

interface InputProps {
  label: string;
  defaultValue?: string | number;
  disabled?: boolean;
}
export const Input = ({
  label,
  defaultValue,
  disabled = false,
}: InputProps) => {
  const id = `form_${label.toLowerCase().replace(' ', '-')}`;
  const classes = input({ disabled });

  return (
    <>
      <label htmlFor={id} className={classes.label}>
        {label}:
      </label>
      <input
        type="text"
        className={classes.input}
        {...{ defaultValue, id, disabled }}
      />
    </>
  );
};

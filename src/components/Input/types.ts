import type {Path, Control, FieldValues} from 'react-hook-form';

export type TextInputProps<T extends FieldValues> = {
  label: string;
  placeholder: string;
  name: Path<T>;
  control: Control<T>;
};

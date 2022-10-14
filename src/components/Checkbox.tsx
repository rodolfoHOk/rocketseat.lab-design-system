import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { UseFormRegister, UseFormSetValue, Path } from 'react-hook-form';
import { Check } from 'phosphor-react';

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  label: Path<any>;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
}

export function Checkbox({
  label,
  register,
  setValue,
  ...rest
}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className="h-6 w-6 p-[2px] bg-gray-800 rounded"
      {...register(label, { value: false })}
      {...rest}
      onCheckedChange={(value) => setValue(label, value)}
    >
      <CheckboxPrimitive.CheckboxIndicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxPrimitive.CheckboxIndicator>
    </CheckboxPrimitive.Root>
  );
}

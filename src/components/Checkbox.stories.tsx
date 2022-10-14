import { Meta } from '@storybook/react';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';
import { useForm } from 'react-hook-form';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from './Text';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {},
} as Meta<CheckboxProps>;

function Template(args: CheckboxProps): StoryFnReactReturnType {
  const { register, setValue } = useForm();
  const label = 'remember';

  return (
    <label className="flex items-center gap-2">
      <Checkbox label={label} register={register} setValue={setValue} />
      <Text size="sm">Lembrar de mim por 30 dias</Text>
    </label>
  );
}

export const Default = Template.bind({});

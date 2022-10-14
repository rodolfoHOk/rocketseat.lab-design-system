import { Meta } from '@storybook/react';
import { TextInput, TextInputRootProps } from './TextInput';
import { Envelope } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {},
  argTypes: {},
} as Meta<TextInputRootProps>;

function Template(): StoryFnReactReturnType {
  const { register } = useForm();
  const label = 'email';

  return (
    <TextInput.Root>
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>

      <TextInput.Input
        placeholder="Type your e-mail address"
        label={label}
        register={register}
      />
    </TextInput.Root>
  );
}

function TemplateWithoutIcon(): StoryFnReactReturnType {
  const { register } = useForm();
  const label = 'email';

  return (
    <TextInput.Root>
      <TextInput.Input
        placeholder="Type your e-mail address"
        label={label}
        register={register}
      />
    </TextInput.Root>
  );
}

export const Default = Template.bind({});

export const WithoutIcon = TemplateWithoutIcon.bind({});

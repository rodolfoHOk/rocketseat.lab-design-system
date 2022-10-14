var a=Object.defineProperty;var p=(o,e)=>a(o,"name",{value:e,configurable:!0});import{T as t,E as l}from"./TextInput.616dfd33.js";import{u as s}from"./IconBase.esm.30f969ff.js";import{a as i,j as n}from"./jsx-runtime.a076d6b1.js";import"./index.b27b574a.js";import"./iframe.feef593f.js";import"./index.module.239b08fc.js";const R={parameters:{storySource:{source:`import { Meta } from '@storybook/react';
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

function Template(args: TextInputRootProps): StoryFnReactReturnType {
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

function TemplateWithoutIcon(args: TextInputRootProps): StoryFnReactReturnType {
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
`,locationsMap:{default:{startLoc:{col:23,line:48},endLoc:{col:40,line:48},startBody:{col:23,line:48},endBody:{col:40,line:48}},"without-icon":{startLoc:{col:27,line:50},endLoc:{col:55,line:50},startBody:{col:27,line:50},endBody:{col:55,line:50}}}}},title:"Components/TextInput",component:t.Root,args:{},argTypes:{}};function c(o){const{register:e}=s(),r="email";return i(t.Root,{children:[n(t.Icon,{children:n(l,{})}),n(t.Input,{placeholder:"Type your e-mail address",label:r,register:e})]})}p(c,"Template");function u(o){const{register:e}=s(),r="email";return n(t.Root,{children:n(t.Input,{placeholder:"Type your e-mail address",label:r,register:e})})}p(u,"TemplateWithoutIcon");const h=c.bind({}),g=u.bind({}),b=["Default","WithoutIcon"];export{h as Default,g as WithoutIcon,b as __namedExportsOrder,R as default};
//# sourceMappingURL=TextInput.stories.267ed143.js.map

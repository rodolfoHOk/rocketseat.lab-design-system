var a=Object.defineProperty;var t=(o,e)=>a(o,"name",{value:e,configurable:!0});import{u as m}from"./IconBase.esm.30f969ff.js";import{C as n}from"./Checkbox.4bfc6582.js";import{T as l}from"./Text.b4ae042e.js";import{a as c,j as r}from"./jsx-runtime.a076d6b1.js";import"./index.b27b574a.js";import"./iframe.feef593f.js";import"./index.module.239b08fc.js";import"./index.c3e921a8.js";import"./clsx.m.256e9345.js";const g={parameters:{storySource:{source:`import { Meta } from '@storybook/react';
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
`,locationsMap:{default:{startLoc:{col:23,line:25},endLoc:{col:40,line:25},startBody:{col:23,line:25},endBody:{col:40,line:25}}}}},title:"Components/Checkbox",component:n,argTypes:{}};function i(o){const{register:e,setValue:s}=m();return c("label",{className:"flex items-center gap-2",children:[r(n,{label:"remember",register:e,setValue:s}),r(l,{size:"sm",children:"Lembrar de mim por 30 dias"})]})}t(i,"Template");const F=i.bind({}),L=["Default"];export{F as Default,L as __namedExportsOrder,g as default};
//# sourceMappingURL=Checkbox.stories.0e53e743.js.map

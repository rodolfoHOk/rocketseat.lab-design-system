import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Envelope, Lock } from 'phosphor-react';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Logo } from '../Logo';

export interface SignInFormData {
  email: string;
  password: string;
  remember: boolean;
}

export function SignIn() {
  const { register, handleSubmit, setValue } = useForm<SignInFormData>();

  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(data: SignInFormData) {
    await axios.post('/api/sessions', {
      email: data.email,
      password: data.password,
      remember: data.remember,
    });

    setIsUserSignedIn(true);
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text className="mt-2 text-gray-400" size="lg">
          Faça login e comece a usar!
        </Text>
      </header>

      <form
        className="w-full max-w-sm mt-10 flex flex-col gap-4 items-stretch"
        onSubmit={handleSubmit(handleSignIn)}
      >
        {isUserSignedIn && <Text>Login realizado!</Text>}

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              id="email"
              type="email"
              label="email"
              register={register}
              placeholder="johndoe@example.com"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              id="password"
              type="password"
              label="password"
              register={register}
              placeholder="********"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox
            id="remember"
            label="remember"
            register={register}
            setValue={setValue}
          />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>

        <Text asChild size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}

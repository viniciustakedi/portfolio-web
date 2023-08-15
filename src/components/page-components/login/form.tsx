import { SubmitHandler, useForm } from 'react-hook-form';
import { login } from '@/services/post';
import { enqueueSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MdNumbers, MdPassword } from 'react-icons/md';
import { isJwtValid } from '@/configs';
import { LoginValues } from '@/models/login';
import { useAtom } from 'jotai';
import { IsUserAuthorized } from '@/contexts/users';

export default function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginValues>();
  const router = useRouter()

  const [attempts, setAttempts] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [disabledButton, setDisabledButton] = useState<boolean>(false);
  const [_, setIsUserAuthorized] = useAtom(IsUserAuthorized);
  
  const onSubmit: SubmitHandler<LoginValues> = async (data) => {
    setAttempts(state => state + 1);

    if (attempts + 1 > 3) {
      setDisabledButton(true);
      return;
    }

    setIsLoading(true);

    const response = await login(data);

    if (response.statusCode === 200) {
      enqueueSnackbar('Login Realizado com sucesso!', { variant: 'success' });
      setDisabledButton(true);
      setIsLoading(false);

      if (await isJwtValid(response.data, true)) {
        setIsUserAuthorized(true);
        router.push('/dashboard');
      }
      return;
    }

    enqueueSnackbar(response.message, { variant: 'error' });
    setIsLoading(false);
  };

  return (
    <section id="form-login" className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} method="post" className='bg-dark-blue lg:w-2/6 md:w-4/6 w-5/6 p-6 rounded-md'>
        {/* <div className="flex w-full justify-center items-center">
          <Image src={LoginImage} alt="Login" className='w-2/5 h-2/5'/>
        </div> */}
        <div className="mb-4">
          <div className="flex">
            <label htmlFor="person-name">
              <MdNumbers size={32} className=" w-12 text-dark-blue bg-white p-3 rounded-l-lg h-12" />
            </label>
            <input
              type="text"
              id="code"
              placeholder="Código"
              spellCheck={false}
              {...register("code", {
                required: { value: true, message: "Campo obrigatório" },
                minLength: { value: 6, message: "Mínimo de 6 caracteres" },
                maxLength: { value: 6, message: "Máximo de 6 caracteres" },
              })}
              className="p-2 rounded-r-lg h-12 outline-none text-lg text-dark-blue w-full"
            />
          </div>
          {errors.code && <span className="text-red-500 text-sm">{errors.code.message}</span>}
        </div>
        <div className="mb-4">
          <div className="flex">
            <label htmlFor="person-name">
              <MdPassword size={32} className=" w-12 text-dark-blue bg-white p-3 rounded-l-lg h-12" />
            </label>
            <input
              type="password"
              id="password"
              placeholder="Senha"
              spellCheck={false}
              autoComplete='current-password'
              {...register("password", {
                required: { value: true, message: "Campo obrigatório" },
                minLength: { value: 8, message: "Mínimo de 8 caracteres" },
                maxLength: { value: 255, message: "Máximo de 255 caracteres" },
              })}
              className="p-2 rounded-r-lg h-12 outline-none text-lg text-dark-blue w-full"
            />
          </div>
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>
        <div>
          <button
            type='submit'
            className="bg-blue w-full p-2 rounded-md text-white font-medium text-lg outline-none hover:bg-soft-blue transition duration-300"
            disabled={disabledButton}
          >
            {isLoading ? 'Carregando...' : 'Entrar'}
          </button>
        </div>
      </form>
    </section >
  );
} 
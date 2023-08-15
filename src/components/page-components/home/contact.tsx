import { SendMailValues } from "@/models/send-mail";
import { sendMail } from "@/services/post";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoMailSharp, IoPersonSharp, IoSendSharp } from "react-icons/io5";

export default function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SendMailValues>();

  const [attempts, setAttempts] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [disabledButton, setDisabledButton] = useState<boolean>(false);

  const onSubmit: SubmitHandler<SendMailValues> = async (data) => {
    setAttempts(state => state + 1);

    if (attempts + 1 > 3) {
      setDisabledButton(true);
      return;
    }

    setIsLoading(true);

    const response = await sendMail(data);

    if (response.statusCode === 200) {
      enqueueSnackbar('Mensagem enviada com sucesso!', { variant: 'success' });
      setDisabledButton(true);
      setIsLoading(false);
      return;
    }

    enqueueSnackbar('Erro ou enviar mensagem!', { variant: 'error' });
    setIsLoading(false);
  };

  return (
    <section id="contact" className="flex flex-col justify-center items-center lg:px-24 md:px-10 px-5 py-8">
      <h1 className='text-7xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-soft-blue to-blue'>
        Contato
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-0 lg:p-4 md:p-4 lg:w-2/4 md:w-4/5 w-full">
        <div className="flex">
          <label htmlFor="person-name">
            <IoPersonSharp size={32} className=" w-12 text-dark-blue bg-white p-3 rounded-l-lg h-12" />
          </label>
          <input
            type="text"
            id="person-name"
            placeholder="Seu nome"
            spellCheck={false}
            {...register("name", {
              required: { value: true, message: "Campo obrigatório" },
              minLength: { value: 3, message: "Mínimo de 3 caracteres" },
              maxLength: { value: 77, message: "Máximo de 77 caracteres" },
            })}
            className="p-2 rounded-r-lg h-12 outline-none text-lg text-dark-blue w-full"
          />
        </div>
        {errors.name && <span className="mt-1 text-red font-semibold">{errors.name.message}</span>}

        <div className="flex mt-4">
          <label htmlFor="person-email">
            <IoMailSharp size={32} className=" w-12 text-dark-blue bg-white p-3 rounded-l-lg h-12" />
          </label>
          <input
            type="email"
            id="person-email"
            placeholder="Seu email"
            {...register("email", {
              required: { value: true, message: "Campo obrigatório" },
              minLength: { value: 4, message: "Mínimo de 4 caracteres" },
              maxLength: { value: 155, message: "Máximo de 155 caracteres" },
            })}
            className="p-2 rounded-r-lg h-12 outline-none text-lg text-dark-blue w-full"
          />
        </div>
        {errors.email && <span className="mt-1 text-red font-semibold">{errors.email.message}</span>}

        <textarea
          placeholder="Sua mensagem"
          {...register("message", {
            required: { value: true, message: "Campo obrigatório" },
            minLength: { value: 10, message: "Mínimo de 10 caracteres" },
            maxLength: { value: 425, message: "Máximo de 425 caracteres" },
          })}
          className="resize-none mt-4 p-4 h-48 outline-none rounded-lg text-lg text-dark-blue"
        />
        {errors.message && <span className="mt-1 text-red font-semibold">{errors.message.message}</span>}

        <button type="submit" disabled={disabledButton} name="submit-contact-form" className="flex justify-center items-center p-2 rounded-lg h-16 outline-none mt-6 text-lg text-white bg-blue hover:bg-dark-blue hover:scale-105 transition-all">
          {(
            isLoading
              ? <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin dark:blue"></div>
              : (
                <>
                  <IoSendSharp size={22} className="mr-2" />
                  Enviar
                </>
              )
          )}
        </button>
      </form>
    </section>
  );
}
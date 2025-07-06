"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaPhoneVolume, FaEnvelope } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import SendEmailController from "@/controllers/SendEmailController";
import { SendEmailDTO } from "@/dto/SendEmailDTO";

const contactSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  phone: yup.string().required("Campo obrigatório"),
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("Campo obrigatório"),
  message: yup.string().required("Campo obrigatório"),
});

export default function ContactSection() {
  const [sendFormEmail, setSendFormEmail] = React.useState(true);
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<SendEmailDTO>({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      phone: "",
    },
  });

  return (
    <section
      id="contact"
      className="bg-[#eff1f4] py-[2rem] xl:py-[7.5rem] px-2 xl:px-0 my-2"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-[100%] xl:w-[50%]">
            <h2 className="text-center xl:text-left w-full xl:w-auto rounded-md text-[1.5em] xl:text-[40px] font-semibold my-2">
              Tem um projeto em mente?
            </h2>
            <p className="text-center xl:text-left w-full xl:w-auto rounded-md text-[1.5em] xl:text-[30px] font-semibold mb-6">
              Fale comigo!
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-32">
              <div>
                <div className="mx-auto w-16 xl:mx-0 xl:w-auto mb-1">
                  <FaPhoneVolume className="icon_ text-[3rem] text-center" />
                </div>

                <span className="text-[1.5em] xl:text-[30px] font-semibold  my-2 block text-center xl:text-left">
                  telefone
                </span>
                <a
                  href="tel:+5527997813275"
                  className="block text-[1.5em] xl:text-[20px] font-semibold text-center xl:text-left"
                >
                  (27) 99781-3275
                </a>
              </div>
              <div>
                <div className="mx-auto w-16 xl:mx-0 xl:w-auto mb-1">
                  <FaEnvelope className="icon_ text-[3rem] text-center" />
                </div>
                <span className="text-[1.5em] xl:text-[30px] font-semibold my-2 block text-center xl:text-left">
                  email
                </span>
                <a
                  href="mailto:elcio.monico@gmail.com"
                  className="block text-[1.5em] xl:text-[20px] font-semibold text-center xl:text-left"
                >
                  elcio.monico@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="w-[100%] xl:w-[50%]">
            <div className="text-center my-4 md:my-0">
              <h2 className="inline md:flex xl:after:bg-[#1b2c40] relative items-center w-full xl:w-auto after:content-[''] after:absolute after:bottom-[-0.3em] after:left-0 after:w-[3rem] hover:after:w-[5rem] after:h-[0.3em] after:transition-all after:duration-[500ms] rounded-md after:bg-[#1b2c40] text-[1.5em] xl:text-[40px] font-semibold mb-10 mt-28 xl:mt-auto">
                Contato
              </h2>
            </div>
            {sendFormEmail ? (
              <form
                className="w-full flex flex-col gap-6 mt-16"
                onSubmit={handleSubmit((data) =>
                  SendEmailController.execute(data, { setSendFormEmail })
                )}
              >
                <div>
                  <Input
                    name="name"
                    register={register}
                    className="w-full h-[3.5rem] pl-6 bg-[#eff1f4] border-[2px] outline-none border-[#ddd] rounded-lg"
                    control={control}
                    error={errors.name}
                    placeholder="Nome"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <Input
                    name="email"
                    register={register}
                    className="w-full h-[3.5rem] pl-6 bg-[#eff1f4] border-[2px] outline-none border-[#ddd] rounded-lg"
                    control={control}
                    error={errors.email}
                    placeholder="E-mail"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    register={register}
                    className="w-full h-[3.5rem] pl-24 bg-[#eff1f4] border-[2px] outline-none border-[#ddd] rounded-lg"
                    placeholder="Celular"
                    control={control}
                    error={errors.phone}
                    mask="(99)99999-9999"
                  />
                  {errors.phone && (
                    <p className="text-red-500">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <TextArea
                    name="message"
                    register={register}
                    className="w-full pl-6 bg-[#eff1f4] border-[2px] outline-none  border-[#ddd] rounded-lg"
                    placeholder="Mensagem"
                    error={errors.message}
                  />
                  {errors.message && (
                    <p className="text-red-500">{errors.message.message}</p>
                  )}
                </div>
                <div className="w-full flex justify-center xl:justify-start">
                  <Button
                    icon={
                      <BiChevronRight
                        className="text-[2em] text-white"
                        type="submit"
                      />
                    }
                  >
                    Entre em contato
                  </Button>
                </div>
              </form>
            ) : (
              <div className="w-full flex justify-center xl:justify-start">
                <h1 className="relative flex justify-center items-center btn-primary max-w-[290px] p-3 w-full mt-5 bg-[#000] hover:bg-[#1F2740] text-white font-bold rounded-xl text-[16px] duration-700 text-center">
                  <AiOutlineCheckCircle className="mr-2" size={24} />
                  Email enviado com sucesso!!
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

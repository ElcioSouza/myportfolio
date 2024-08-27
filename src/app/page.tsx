"use client";
import React from "react";
import Button from "@/components/Button";
import { ItemBanner } from "@/constant/ItemBanner";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FaWhatsapp,
  FaLinkedin,
  FaWhatsappSquare,
  FaGithub,
  FaEdit,
  FaEye,
  FaEnvelope,
} from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import NavLinksController from "@/controllers/NavLinksController";
import SendEmailController from "@/controllers/SendEmailController";
import { SendEmailDTO } from "@/dto/SendEmailDTO";
import Link from "next/link";

const contactSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  phone: yup.string().required("Campo obrigatório"),
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("Campo obrigatório"),
  message: yup.string().required("Campo obrigatório"),
});

export default function Home() {
  const [currentDate, setCurrentDate] = React.useState(new Date());
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
    <>
      <section
        className="bg-[url('/img/banner.jpg')] bg-cover bg-center min-h-[500px]"
        id="home"
      >
        <div className="max-w-7xl mx-auto flex justify-center items-center min-h-[600px]">
          <div className="mt-[1.9rem]">
            <div>
              <div>
                <div className="mt-10 xl:mt-auto">
                  <div className="rounded-full bg-[url('/img/profile.jpg')] bg-cover bg-center w-[120px] h-[120px] mx-auto   border-white border-[1.4px] duration-700 hover:scale-110"></div>
                  <div>
                    <h1 className="text-center text-white font-bold text-3xl mt-3">
                      Elcio de Souza Monico
                    </h1>
                    <p className="text-center text-white mt-3 ">
                      Full Stack Developer
                    </p>
                  </div>
                  <div className="flex justify-center items-center mt-3 gap-3">
                    <div className="bg-black h-[40px] w-[40px] rounded-full flex justify-center items-center hover:bg-green-700 transition duration-700 hover:scale-125">
                      <Link target="_blank" href="https://api.whatsapp.com/send?phone=5527997813275&amp;text=Gostaria de falar com um atendente? Estou à disposição para ajudar.">
                        <FaWhatsapp className="text-white text-[20px]" />
                      </Link>
                    </div>
                    <div className="bg-black h-[40px] w-[40px] rounded-full flex justify-center items-center hover:bg-[#0a66c2] transition duration-700 hover:scale-125">
                      <Link target="_blank" href="https://www.linkedin.com/in/elciomonico">
                        <FaLinkedin className="text-[20px] text-white" />
                      </Link>
                    </div>
                    <div className="bg-black h-[40px] w-[40px] rounded-full flex justify-center items-center hover:bg-[#212556] transition duration-700 hover:scale-125">
                      <Link target="_blank" href="https://github.com/ElcioSouza">
                        <FaGithub className="text-[20px] text-white " />
                      </Link>
                    </div>
                  </div>
                  <div className="flex justify-center xl:justify-center items-center">
                    <Button
                      onClick={() => NavLinksController.execute("contact")}
                      className="md:mx-0 mt-8"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-item flex flex-col md:flex-row justify-center items-start flex-wrap gap-7 mt-[10px]  md:mt-[10px] xl:mt-[10px] px-2 md:px-0">
        {ItemBanner &&
          ItemBanner.map((item, index) => (
            <div
              key={index}
              className="item hover:bg-[#1b2c40] flex p-9 justify-start items-center w-full md:w-auto max-w-[100%] md:max-w-[292px] flex-col  h-[328px] min-h-[328px] bg-white shadow-[0px_0px_3px_#00000026] translate-y-[-50px] text-base leading-[1.4] transition-all duration-[0.6s] ease-[ease] mb-5 px-5 rounded-xl"
            >
              <div className="hovdder::text-white flex justify-center text-[60px]">
                {item.icon}
              </div>
              <div>
                <h2 className="text-[22px] text-center my-2 font-bold">
                  {item.title}
                </h2>
                <p className="text-xl leading-[30px] text-center">
                  {item.describe}
                </p>
              </div>
            </div>
          ))}
      </section>

      <section
        className="bg-[#eff1f4] my-[2rem] md:my-[0]  py-[2rem] xl:py-[7.5rem]"
        id="specialty"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-3 md:gap-32 ">
            <div>
              <div className="rounded-full bg-[url('/img/profile.jpg')] bg-cover bg-center w-[200px] h-[200px] md:w-[350px] md:h-[350px] mx-auto   border-white border-[1.4px] duration-700 hover:scale-110 mt-7"></div>
            </div>
            <div className="w-[100%] xl:w-[55%] text-center md:text-left">
              <div className="mb-5">
                <h2 className="inline md:flex xl:after:bg-[#1b2c40] relative items-center w-full xl:w-auto after:content-[''] after:absolute after:bottom-[-0.3em] after:left-0 after:w-[3rem] hover:after:w-[5rem] after:h-[0.3em] after:transition-all after:duration-[500ms] rounded-md after:bg-[#1b2c40] text-[1.5em] xl:text-[40px] font-semibold mb-10">
                  Especialidade
                </h2>
              </div>
              <div>
                <p className="mb-3 text-xl leading-[30px]">
                  Sou um apaixonado desenvolvedor fullstack, dedicado a criar
                  experiências online excepcionais. Com 4 anos e 10 meses de
                  experiência na indústria de desenvolvimento, estou empenhado
                  em construir aplicações web de alta qualidade que combinam a
                  beleza do design com a funcionalidade.
                </p>
                <p className="text-xl leading-[30px]">
                  Desde o início da minha carreira como desenvolvedor, fui
                  fascinado pela ideia de que a tecnologia pode moldar nosso
                  mundo de maneiras incríveis. Minha trajetória me permitiu
                  explorar uma ampla variedade de linguagens de programação e
                  frameworks, incluindo HTML, CSS, JavaScript, PHP, React,
                  Next.js, Laravel, Slim Framework, Node.js, entre outros.
                  Durante esse tempo, aprendi a valorizar os princípios de
                  design de software, como os princípios SOLID, CLEAN CODE e o
                  padrão de arquitetura MVC.
                </p>
              </div>
              <div className="flex justify-center md:justify-start text-center">
                <Button
                  onClick={() => NavLinksController.execute("contact")}
                  className="md:mx-0 mt-8"
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
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-[2rem] xl:py-[7.5rem] px-2 xl:px-0 my-[2rem]"
        id="differential"
      >
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="text-center mb-4 md:mb-0">
              <h2 className="inline md:flex xl:after:bg-[#1b2c40] relative items-center w-full xl:w-auto after:content-[''] after:absolute after:bottom-[-0.3em] after:left-0 after:w-[3rem] hover:after:w-[5rem] after:h-[0.3em] after:transition-all after:duration-[500ms] rounded-md after:bg-[#1b2c40] text-[1.5em] xl:text-[40px] font-semibold mb-10">
                Diferencial
              </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-3 md:gap-32">
              <div className="border-l-1 border-[#637788]">
                <div className="mx-auto w-16 xl:mx-0 xl:w-auto mb-1">
                  <FaEdit className="icon_ text-[4rem] text-center" />
                </div>
                <h2 className="text-center xl:text-left w-full xl:w-auto rounded-md text-[1.5em] xl:text-[40px] font-semibold">
                  MISSÃO
                </h2>
                <p className=" text-center xl:text-left text-xl leading-[30px]">
                  Promover o crescimento sustentável de micro e pequenas
                  empresas através do fornecimento de soluções tecnológicas
                  empreendedoras de fácil utilização.
                </p>
              </div>
              <div>
                <div className="mx-auto w-16 xl:mx-0 xl:w-auto mb-1">
                  <FaEye className="text-[4rem]" />
                </div>
                <h2 className="text-center xl:text-left w-full xl:w-auto rounded-md text-[1.5em] xl:text-[40px] font-semibold my-2">
                  VISÃO
                </h2>
                <p className=" text-center xl:text-left text-xl leading-[30px]">
                  Ser líder no fornecimento de software de alta qualidade, com
                  preços justos e soluções segmentadas.
                </p>
              </div>
              <div>
                <div className="mx-auto w-16 xl:mx-0 xl:w-auto mb-1">
                  <IoMdCheckboxOutline className="text-[4rem]" />
                </div>
                <h2 className="text-center xl:text-left w-full xl:w-auto rounded-md text-[1.5em] xl:text-[40px] font-semibold my-2">
                  VALORES
                </h2>
                <p className=" text-center xl:text-left text-xl leading-[30px]">
                  Ser líder no fornecimento de software de alta qualidade, com
                  preços justos e soluções segmentadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                      name="msg"
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
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=5527997813275&amp;text=Gostaria de falar com um atendente? Estou à disposição para ajudar."
          className="fixed  m-2 w-full max-w-[60px] h-[60px] text-center text-3xl shadow-[2px_2px_3px_#999] z-[100] animate-[sm-shake-animation_linear_1.5s_infinite] rounded-[50px] right-2.5 bottom-2.5
    -webkit-animation: sm-shake-animation linear 1.5s infinite"
          target="_blank"
        >
          <div
            className="w-full max-w-[60px] h-[60px] bg-contain"
            style={{ backgroundImage: `url('/img/whatsapp.gif')` }}
          ></div>
        </a>
      </div>
    </>
  );
}

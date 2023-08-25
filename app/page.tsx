"use client"

import { useEffect, useState } from "react";
import Header from "@/components/pages/header";
import Image from "next/image";

import image from "../assets/image40.png"
import { Button } from "@/components/ui/button";
import { ArrowDown, AtSign } from "lucide-react";

export default function IndexPage() {
  const [toggle, setToggle] = useState<boolean>(false)

  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="max-lg:p-4 p-8 max-w-[1450px] w-full m-auto">
        <div className="flex max-lg:flex-col-reverse items-center justify-center gap-3">
          <div className="max-lg:w-[100%] w-1/3 h-full flex items-center justify-center">
            <Image src={image} alt="Imagem" className="w-[70%] max-lg:w-[80%]"/>
          </div>
          <div className="flex flex-col gap-5 w-2/3 max-lg:w-[100%]">
            <h1 className="text-zinc-200 font-semibold text-4xl max-md:text-3xl max-sm:text-2xl">Sobre mim</h1>
            <p className="text-zinc-600 text-base">
              Sou o Pedro Lucas, tenho 21 anos e atualmente estou cursando Sistemas de Informação na UEMG/Frutal.
              <br></br><br></br>Sou estagiário em desenvolvimento web. Minha experiência abrange a colaboração em projetos abrangentes, onde pude contribuir para a criação e manutenção de páginas web e móveis. Minha abordagem se concentra em combinar minha criatividade com soluções funcionais, visando agregar valor a cada projeto.
              <br></br><br></br>Estou sempre ansioso para aprender e dominar novas tecnologias, aplicando-as em desafios reais para expandir minhas habilidades. Se você está em busca de um profissional comprometido em impulsionar a inovação e entregar resultados excepcionais, adoraria me conectar!</p>
              {!toggle && (
                <span className="max-sm:mr-auto flex gap-2 mt-4">                  
                  <Button variant="default" className="rounded-[12px] flex items-center gap-2">Curriculo <ArrowDown size={20} /></Button>
                  <Button variant="outline" className="rounded-[12px] flex items-center gap-2">E-mail <AtSign size={20} /></Button>
                </span>
              )}
          </div>
        </div>
      </div>
          {toggle && (
            <span className="w-full items-center justify-center flex gap-2 mt-8">                  
              <Button variant="default" className="rounded-[12px] flex items-center gap-2">Curriculo <ArrowDown size={20} /></Button>
              <Button variant="outline" className="rounded-[12px] flex items-center gap-2">E-mail <AtSign size={20} /></Button>
            </span>
          )}
    </div>
  )
}

"use client"

import { useEffect, useState } from "react";
import Header from "@/components/pages/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Skills, { Props } from "@/components/pages/skills";
import Image from "next/image";
import { ArrowDown, AtSign } from "lucide-react";

import image from "../assets/image40.png"
import JS from '../assets/javascript.png'
import ND from '../assets/nodejs_logo.png'
import RJS from '../assets/React-icon.png'
import VJS from '../assets/logo-with-shadow.png'
import NJS from '../assets/next.png'
import PHP from '../assets/php.png'
import SQL from '../assets/mysql.png'
import UI from '../assets/figma.png'
import Project from "@/components/pages/projetc";

export default function IndexPage() {
  const [toggle, setToggle] = useState<boolean>(false)
  const [data, setData] = useState<Props[]>([
    {
      name: "JavaScript",
      url: JS,
      stack: "JavaScript",
    },
    {
      name: "Node JS",
      url: ND,
      stack: "JavaScript",
    },
    {
      name: "React JS",
      url: RJS,
      stack: "JavaScript",
    },
    {
      name: "Vite JS",
      url: VJS,
      stack: "JavaScript",
    },
    {
      name: "Next JS",
      url: NJS,
      stack: "JavaScript",
    },
    {
      name: "PHP",
      url: PHP,
      stack: "Backend",
    },
    {
      name: "MySQL",
      url: SQL,
      stack: "Banco de Dados",
    },
    {
      name: "Figma",
      url: UI,
      stack: "UI Desing",
    },
  ]);
  const [filteredData, setFilteredData] = useState<Props[]>(data);

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

  const handleSearch = (search: string) => {
    const filteredItems = data.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filteredItems);
  }

  return (
    <div>
      <Header />
      <div className="max-lg:p-4 p-8 max-w-[1450px] w-full m-auto flex flex-col gap-28">
        <section id="about" className="p-2 mt-9">
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
                    <Button size="xl" variant="default">Curriculo <ArrowDown size={24} /></Button>
                    <Button size="xl" variant="outline">E-mail <AtSign size={24} /></Button>
                  </span>
                )}
            </div>
          </div>
            {toggle && (
              <span className="w-full items-center justify-center flex gap-2 mt-8">                  
                    <Button size="xl" variant="default">Curriculo <ArrowDown size={24} /></Button>
                    <Button size="xl" variant="outline">E-mail <AtSign size={24} /></Button>
              </span>
            )}
        </section>
        <section id="skills" className="p-2 mt-9">
          <h1 className="text-zinc-200 font-semibold text-4xl max-md:text-3xl max-sm:text-2xl">Skills</h1>
          <p className="text-zinc-600 text-base mt-4">Veja abaixo, algumas habilidades que adquiri vendo cursos, fazendo projetos e na universidade. Aqui estão algumas habilidades que desenvolvi através de cursos, projetos e minha trajetória universitária:</p>
          <Input type="search" onChange={(e)=>handleSearch(e.target.value)} className="mt-4 border-zinc-800 rounded-[4px] placeholder:text-zinc-700 text-zinc-400" placeholder="Pesquise alguma tecnologia"/>
          <div className="flex gap-5 flex-wrap my-16 max-md:justify-center">
            {filteredData.map((item) => (
                <Skills key={item.name} name={item.name} stack={item.stack} url={item.url} />
            ))}
          </div>

        </section>
        <section id="projects" className="p-2 mt-9">
          <h1 className="text-zinc-200 font-semibold text-4xl max-md:text-3xl max-sm:text-2xl">Projetos</h1>
          <p className="text-zinc-600 text-base mt-4">Existe alguns projetos que fazemos durante cursos, boostraps e projetos pessoais. Dentro desses estou listando alguns os quais fiz durante minha vida academica, há mais projetos e irei atualizando durante o tempo.</p>
          <div className="flex gap-5 flex-wrap my-16 max-md:justify-center">
          <Project /><Project /><Project /><Project /><Project /><Project />
          </div>
        </section>
        <section id="contact" className="p-2 mt-9">

        </section>
      </div>
    </div>
  )
}

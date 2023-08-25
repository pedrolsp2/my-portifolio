import React from "react"
import Image from "next/image"

import my from '../../assets/image.png';

import "./header.css"
import NavBar from "./navbar"

export default function Header() {
  return (
    <div id="header" className="h-screen">
      <div className="max-w-[1450px] w-full m-auto">
        <NavBar />
        <div className="grid grid-cols-[60%,40%] max-sm:flex max-sm:flex-col items-center max-sm:mt-8 " style={{height: 'calc(100vh - 80px)'}}>
          <div className="flex gap-3 flex-col p-4">
            <h1 className="text-zinc-400 font-semibold text-5xl
                            max-md:text-4xl
                            max-sm:text-3xl">Olá! Sou o</h1>

            <h1 className="text-zinc-200 font-bold text-7xl my-8 max-sm:my-2
                            max-md:text-6xl
                            max-sm:text-5xl">Pedro Lucas</h1>

            <h1 className="text-zinc-400 font-semibold text-3xl
                            max-md:text-2xl
                            max-sm:text-xl">Desenvolvedor Web e estudante entusiastas sobre tecnologia.</h1>

            <p className="text-zinc-600 text-[20px]
                            max-md:text-[16px]
                            max-sm:text-[14px]">Sinta-se à vontade para entrar em contato para networking, colaborações ou conversas sobre desenvolvimento web e tecnologia.</p>
          </div>
          <div className="grid max-sm:flex justify-center p-2">
            <Image src={my} alt="Pedro Lucas" className="w-[80%] max-sm:w-[50%]"/>
          </div>
        </div>
      </div>
    </div>
  )
}

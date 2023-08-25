"use client"

import { useEffect, useState } from "react";
import logo from "@/assets/logo.png"
import { UserIcon, Flame, File, Smartphone, Menu } from "lucide-react"
import Image from "next/image"

export default function NavBar() {
  const [toggle, setToggle] = useState<boolean>(false)

  const handleResize = () => {
    if (window.innerWidth < 900) {
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
    <div className="px-8 py-3 flex items-center justify-between z-80">
      <Image src={logo} alt="Logo" />
      {toggle? (
        <nav className="flex items-center gap-10">
          <span className="cursor-pointer flex items-center gap-2 p-3 text-purple-500 hover:opacity-90">
            <UserIcon size={24} />
            <span className="cursor-pointer text-zinc-300 text-[14px]">Sobre mim</span>
          </span>
          <span className="cursor-pointer flex items-center gap-2 p-3 text-purple-500 hover:opacity-90">
            <Flame size={24} />
            <span className="cursor-pointer text-zinc-300 text-[14px]">Skills</span>
          </span>
          <span className="cursor-pointer flex items-center gap-2 p-3 text-purple-500 hover:opacity-90">
            <File size={24} />
            <span className="cursor-pointer text-zinc-300 text-[14px]">Projetos</span>
          </span>
          <span className="cursor-pointer flex items-center gap-2 p-3 text-purple-500 hover:opacity-90">
            <Smartphone size={24} />
            <span className="cursor-pointer text-zinc-300 text-[14px]">Contato</span>
          </span>
        </nav>
      ):(
        <Menu size={52} className="text-purple-500 cursor-pointer"/>
      )}
    </div>
  )
}

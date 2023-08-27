"use client"

import { useEffect, useState } from "react";
import logo from "@/assets/logo.png"
import { UserIcon, Flame, File, Smartphone, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link";

export default function NavBar() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [nav, setNav] = useState<boolean>(false);

  const handleResize = () => {
    if (window.innerWidth < 900) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const handleResizeNav = () => {
    if (window.innerHeight < 200) {
      setNav(false);
    } else {
      setNav(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResizeNav();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="px-8 py-3 flex items-center justify-between z-80">
        <Image src={logo} alt="Logo" />
        {toggle? (
          <nav className="flex items-center gap-10">
            <Link href="#about" className="cursor-pointer flex items-center gap-2 p-3 text-purple-500 hover:opacity-90">
              <UserIcon size={24} />
              <span className="cursor-pointer text-zinc-300 text-[14px]">Sobre mim</span>
            </Link>
            <Link href="#skills" className="cursor-pointer flex items-center gap-2 p-3 text-purple-500 hover:opacity-90">
              <Flame size={24} />
              <span className="cursor-pointer text-zinc-300 text-[14px]">Skills</span>
            </Link>
            <Link href="#projects" className="cursor-pointer flex items-center gap-2 p-3 text-purple-500 hover:opacity-90">
              <File size={24} />
              <span className="cursor-pointer text-zinc-300 text-[14px]">Projetos</span>
            </Link>
            <Link href="#contact" className="cursor-pointer flex items-center gap-2 p-3 text-purple-500 hover:opacity-90">
              <Smartphone size={24} />
              <span className="cursor-pointer text-zinc-300 text-[14px]">Contato</span>
            </Link>
          </nav>
        ):(
          <Menu size={32} className="text-purple-500 cursor-pointer"/>
        )}
      </div>
    </>
  )
}

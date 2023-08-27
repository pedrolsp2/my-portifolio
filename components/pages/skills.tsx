import Image, { StaticImageData } from "next/image"; 

import { Badge } from "../ui/badge";

export interface Props{
  name: string;
  url: StaticImageData;
  stack: string;
}

export default function Skills(props: Props){
  return(
      <article className="border border-zinc-800 w-[15rem] max-md:w-full h-[16rem] rounded-[4px] cursor-pointer hover:border-zinc-600 ease-in duration-200 p-5 flex flex-col items-center gap-3">
        <Image src={props.url} width={100} height={100} alt={props.name} />
        <span className="text-base font-bold text-zinc-200">{props.name}</span>
        <Badge variant="default" className="border-zinc-700 bg-zinc-800 text-zinc-500 mt-auto">{props.stack}</Badge>
      </article>
  )
}
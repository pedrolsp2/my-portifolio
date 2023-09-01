import { GithubIcon, LinkedinIcon } from "lucide-react"
import "./style.css"
import { Separator } from "../ui/separator"

export default function Footer(){
  return(
    <div id="footer" className="h-[450px] w-full">
      <div className="max-lg:p-4 p-8 max-w-[1450px] w-full m-auto">
        <div className="flex items-center justify-between">
          <span className="text-zinc-100 text-5xl font-bold">Siga Me!</span>
          <div className="flex gap-8">
            <span className="h-24 w-24 rounded-full bg-[#4C00AE] grid items-center justify-center cursor-pointer hover:opacity-80 transition-all">
              <GithubIcon size={52} className="text-zinc-100" />
            </span>
            <span className="h-24 w-24 rounded-full bg-[#4C00AE] grid items-center justify-center cursor-pointer hover:opacity-80 transition-all">
              <LinkedinIcon size={52} className="text-zinc-100" />
            </span>
          </div>
        </div>
        <Separator orientation="horizontal" className="w-full bg-zinc-300 mt-20 mb-8"/>
        <div className="flex p-8">
          <span className="text-zinc-200 font-bold text-xl">Pedro Lucas</span>
        </div>
      </div>
    </div>
  )
}
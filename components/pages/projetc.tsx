import { Folder, Github, Share2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";

export interface IProject {
  name: string;
  descrition: string;
  linkGit?: string;
  linkWeb?: string;
}

export interface Props {
  data: IProject;
  badge: string;
}

export default function Project(props: Props){
  const badgeValues = [props.badge]
  return(
      <Card className="border border-zinc-800 w-[20rem] max-md:w-full h-auto rounded-[8px] cursor-pointer hover:border-zinc-600 ease-in duration-200 flex flex-col items-center p-4 gap-2">
        <CardHeader className="flex items-center justify-between flex-row w-full">
          <Folder size={32} className="text-purple-700" />
          <span className="flex items-center gap-2 text-zinc-600">
            <Github size={28} />
            <Share2 size={28} />
          </span>
        </CardHeader>
        <CardTitle className="mt-6 w-full text-left text-zinc-200">{props.data.name}</CardTitle>
        <CardContent className="text-zinc-600 mt-3">{props.data.descrition}</CardContent>
        <CardFooter className="flex flex-wrap gap-2">
          {badgeValues.map((item) => (
                <Badge variant="default" className="border-zinc-700 bg-zinc-800 text-zinc-500 mt-auto">{item}</Badge>
            ))}
        </CardFooter>
      </Card>
  )
}
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { ArrowUpRight, Code, LucideIcon, Rss, StickyNote } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="p-4 flex flex-col gap-2 w-full">
          <p className="text-lg text-muted-foreground">Side, fun project</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4 ">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Travaux</p>
          <div>
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contactez moi</p>
          <ContactCard
            name="@antoinedev"
            image="https://qph.cf2.quoracdn.net/main-thumb-1741974871-200-wslbqjrpxhhopbfyshigqbczdbgxowrq.jpeg"
            mediumImage="https://img.freepik.com/photos-gratuite/icone-symbole-internet-ligne_53876-144714.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1715212800&semt=ais_user"
            description="E-mail"
          ></ContactCard>
          <ContactCard
            name="@antoinedev"
            image="https://qph.cf2.quoracdn.net/main-thumb-1741974871-200-wslbqjrpxhhopbfyshigqbczdbgxowrq.jpeg"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png"
            description="Linkedin"
          ></ContactCard>
        </Card>
      </div>
    </Section>
  );
};

////////////////////////
///// Partie Side project /////
////////////////////////
const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Code,
    title: "Codeline",
    description: "Javascription password generator",
    url: "https://www.google.fr/",
  },
  {
    Logo: StickyNote,
    title: "Codeline",
    description: "Javascription password generator",
    url: "https://www.google.fr/",
  },
  {
    Logo: Code,
    title: "Codeline",
    description: "Javascription password generator",
    url: "https://www.google.fr/",
  },
  {
    Logo: Rss,
    title: "Codeline",
    description: "Javascription password generator",
    url: "https://www.google.fr/",
  },
];

type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
}

const SideProject = (props: SideProjectProps) => {
  return (
    <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
      <span className="bg-accent text-accent-foreground p-4 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>

        <p className="text-lg text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
////////////////////////
///// Partie Works /////
////////////////////////
const WORKS: WorkProps[] = [
  {
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    title: "CLSM",
    date: "2024-2024",
    description: "Refonte graphique",
    url: "https://www.google.fr/",
    badge: true, 
  },
  {
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    title: "CLSM",
    date: "2024-2024",
    description: "Developpement site",
    url: "https://www.google.fr/",
    badge: true, 
  },
];

type WorkProps = {
  image: string;
  title: string;
  date: string;
  description: string;
  url: string;
  badge?: boolean; 
};

const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded w-full"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />

      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.badge && <Badge variant="outline" className="text-xs">Stage</Badge>}
        </div>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
      <div>
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};

const ContactCard = (props: {
  image:string;
  mediumImage: string;
  name:string;
  description: string;
}) => {
  return (
    <Card className="p-3 bg-accent/10 flex items-center gap-4">
      <div className="relative">
        <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
        <img
          src={props.mediumImage}
          alt={props.name}
          className="w-4 h-4 absolute -bottom-1 -right-1"
        />
      </div>
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.name}</p>

        </div>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
      <ArrowUpRight size={16} />
    </Card>
  );
}

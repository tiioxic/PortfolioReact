import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import {
  ArrowUpRight,
  Braces,
  Building2,
  Code,
  Guitar,
  Hand,
  LucideIcon,
  Rss,
  StickyNote,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

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
                url={project.url}
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
            image="/img/AntoineLeJean.png"
            mediumImage="./img/@.png"
            description="antoine_le_jean@outlook.fr"
          ></ContactCard>
          <ContactCard
            name="@antoinedev"
            image="./img/AntoineLeJean.png"
            mediumImage="/img/linkedin.png"
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
    title: "Generator pasword",
    description: "Javascripti password generator",
    url: "https://tiioxic.github.io/generatorPassword/",
  },
  {
    Logo: Braces,
    title: "PokeAPI",
    description: "Random pokemon avec API",
    url: "https://tiioxic.github.io/pokeAPI/",
  },
  {
    Logo: Guitar,
    title: "Disii Band",
    description: "Exercice Front-end",
    url: "https://tiioxic.github.io/bandmusic/",
  },
  {
    Logo: Building2,
    title: "Architecte",
    description: "Exercice Front-end",
    url: "https://tiioxic.github.io/architecture/",
  },
  {
    Logo: Hand,
    title: "PFC",
    description: "Pierre feuilles ciseaux javascript",
    url: "https://tiioxic.github.io/pierrefeuilleciseaux/",
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      target="_blank"
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
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
    image: "/img/clsm_logo.png",
    title: "CLSM",
    date: "2024-2024",
    description: "Developpement site",
    url: "https://www.google.fr/",
    badge: true,
  },
  {
    image: "/img/clsm_ancien_logo.png",
    title: "CLSM",
    date: "2023-2023",
    description: "Refonte graphique",
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
      <Image
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.badge && (
            <Badge variant="outline" className="text-xs">
              Stage
            </Badge>
          )}
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
  image: string;
  mediumImage: string;
  name: string;
  description: string;
}) => {
  return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 mr-4 transition-colors group flex items-center gap-4">
      <div className="relative">
        <Image
          src={props.image}
          alt={props.name}
          className="w-10 h-10 rounded-full object-contain"
        />
        <Image
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
      <ArrowUpRight
        className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
        size={16}
      />
    </Card>
  );
};

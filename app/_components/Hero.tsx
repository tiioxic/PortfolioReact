import { ComponentPropsWithRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/Github";
import Link from "next/link";

const Code = ({className,...props}: ComponentPropsWithRef<"span">) => {
    return <span className={cn("bg-accent/30 font-mono hover:bg-accent/50 border border-accent p-1 rounded-sm text-primary",className)} {...props}/>
}

export const Hero = () => {
    return (
      <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full flex flex-col gap-2">
          <h2 className="font-caption text-5xl text-primary font-bold">
            Antoine Le Jean
          </h2>
          <h3 className="text-3xl font-caption">Développeur junior</h3>
          <p className="text-base">
            À 25 ans, passionné par le développement web, j'ai transformé ma
            curiosité pour les nouvelles technologies en compétences concrètes
            grâce à une formation. Autonome et créatif.{" "}
            <Link href="https://github.com/tiioxic">
              <Code className="inline-flex items-center gap-1">
                <GithubIcon size={12} className="inline"></GithubIcon>developer
              </Code>
            </Link>{" "}
            Passionnée par les nouvelles technologies, je suis enthousiaste à
            l'idée de continuer à apprendre et à explorer ce domaine dynamique
            et en constante évolution.
          </p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto">
          <img
            src="/img/AntoineLeJean.png"
            alt="Antoine photo de profil"
            className="w-full h-auto max-w-xs max-md:w-56"
          />
        </div>
      </Section>
    );
}
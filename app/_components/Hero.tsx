import { ComponentPropsWithRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/Github";
import Link from "next/link";

const Code = ({ className, ...props }: ComponentPropsWithRef<"span">) => {
  return <span className={cn("bg-accent/30 font-mono hover:bg-accent/50 border border-accent p-1 rounded-sm text-primary", className)} {...props} />
}

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary font-bold">
          Antoine Le Jean
        </h2>
        <h3 className="text-3xl font-caption">Testeur d'applications / Développeur junior</h3>
        <p className="text-base">
         À 26 ans, passionné par le développement web et les nouvelles technologies, je travaille actuellement à la CPAM en tant que testeur d’applications. Mon parcours m’a permis de développer des compétences concrètes en validation fonctionnelle, en analyse des anomalies et en assurance qualité logicielle.{" "}
          <Link href="https://github.com/tiioxic" target="_blank">
            <Code className="inline-flex items-center gap-1">
              <GithubIcon size={12} className="inline"></GithubIcon>developer
            </Code>
          </Link>{" "}
          Autonome et créatif, je consacre également une partie de mon temps libre au développement web, ce qui me permet d’approfondir mes compétences techniques et de rester en veille sur les évolutions du domaine.
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="./img/AntoineLeJean.png"
          alt="Antoine photo de profil"
          className="w-full h-auto max-w-xs max-md:w-56"
        />
      </div>
    </Section>
  );
}
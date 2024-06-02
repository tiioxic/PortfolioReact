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
          <h3 className="text-3xl font-caption">Software developer</h3>
          <p className="text-base">
            Lorem ipsum dolor, sit amet consectetur{" "}
            <Link href="https://github.com/tiioxic">
              <Code className="inline-flex items-center gap-1">
                <GithubIcon size={12} className="inline"></GithubIcon>developer
              </Code>
            </Link>{" "}
            elit. Necessitatibus dolores amet numquam quas rerum itaque. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Quae error
            fugiat dolores doloremque doloribus? Ex.
          </p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto">
          <img
            src="https://i.redd.it/yta0xtiii3m21.jpg"
            alt="Antoine photo de profil"
            className="w-full h-auto max-w-xs max-md:w-56"
          />
        </div>
      </Section>
    );
}
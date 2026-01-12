import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/Github";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "./icons/Linkedin";
import { ModeToggle } from "@/components/mode-toggle";
export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">AntoineDev.com</h1>
        <div className="flex-1"></div>
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/tiioxic"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0"
            )}
            target="_blank"
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/antoine-le-jean-560945248/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0"
            )}
            target="_blank"
          >
            <LinkedinIcon size={16} className="text-foreground" />
          </Link>
          <ModeToggle />
        </ul>
      </Section>
    </header>
  );
}
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { LucideIcon } from "lucide-react";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="p-4 flex flex-col gap-2 w-full">
          <p className="text-lg text-muted-foreground">Side, fun project</p>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4 ">
        <Card className="p-4 flex-1">Work</Card>
        <Card className="p-4 flex-1">Contact me</Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS = [
  {
    Logo: LucideIcon,
    title: "Codeline",
    description: "Javascription password generator",
  },
  {
    Logo: LucideIcon,
    title: "Codeline",
    description: "Javascription password generator",
  },
  {
    Logo: LucideIcon,
    title: "Codeline",
    description: "Javascription password generator",
  },
];

type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
}

const SideProject = (props: {
  Logo: LucideIcon;
  title: string;
  description: string;
}) => {
  return (
    <div>
      <span className="bg-accent text-accent-foreground p-4 rounded-sm">
        <props.Logo />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>

        <p className="text-lg text-muted-foreground">{props.description}</p>
      </div>
    </div>
  );
};

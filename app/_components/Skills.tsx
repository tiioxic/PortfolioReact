import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { SymfonyIcon } from "./icons/Symfony";

export const Skills = () => {
    return (
      <Section className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}>Skills</Badge>
        <h2 className="scroll-m-20 text-3xl">I love working on...</h2>
        <div>
          <div>
            <div className="flex flex-col gap-4">
              <SymfonyIcon size={42} />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight mb-2">
              Marketing
            </h3>
            <p className="text-sm text-muted-foreground">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <SymfonyIcon size={42} />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight mb-2">
              Marketing
            </h3>
            <p className="text-sm text-muted-foreground">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <SymfonyIcon size={42} />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight mb-2">
              Marketing
            </h3>
            <p className="text-sm text-muted-foreground">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>
        </div>
      </Section>
    );}
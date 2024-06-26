import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { SymfonyIcon } from "./icons/Symfony";
import { SassIcon } from "./icons/Sass";
import { FigmaIcon } from "./icons/Figma";

export const Skills = () => {
    return (
      <Section className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}>Skills</Badge>
        <h2 className="scroll-m-20 text-3xl">Logiciel Framework et language maitriser...</h2>
        <div className="flex max-md:flex-col gap-4">
          <div>
            <div className="flex flex-col gap-4">
              <SymfonyIcon size={50} />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight mb-2">
              Symfony
            </h3>
            <p className="text-sm text-muted-foreground">
              Je maîtrise Symfony, un framework PHP robuste qui me permet de
              concevoir rapidement des backends et frontends pour créer des
              applications web performantes.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <SassIcon size={50} />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight mb-2">Sass</h3>
            <p className="text-sm text-muted-foreground">
              L'utilisation de SASS me permet de créer des feuilles de style
              dynamiques et maintenables, en transformant des designs complexes
              en CSS optimisé.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <FigmaIcon size={50} />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight mb-2">
              Figma
            </h3>
            <p className="text-sm text-muted-foreground">
              Avec Figma, je conçois des interfaces utilisateur intuitives et
              attractives, assurant une transition fluide du prototype initial à
              la version finale du produit.
            </p>
          </div>
        </div>
      </Section>
    );}
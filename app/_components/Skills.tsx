import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { SymfonyIcon } from "./icons/Symfony";
import { SassIcon } from "./icons/Sass";
import { FigmaIcon } from "./icons/Figma";
import { SqlIcon } from "./icons/Sql";
import { WebStackIcon } from "./icons/WebStack";
import { LinuxIcon } from "./icons/Linux";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="scroll-m-20 text-3xl">Logiciel Framework et language maitriser...</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        <div>
          <div className="flex flex-col gap-4">
            <SqlIcon size={50} />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight mb-2">
            SQL
          </h3>
          <p className="text-sm text-muted-foreground">
            Je maîtrise le langage SQL pour la gestion et l'interrogation de bases de données relationnelles.
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <img src="/img/html-5.svg" alt="HTML" className="w-12 h-12" />
              <img src="/img/css-3.svg" alt="CSS" className="w-12 h-12" />
              <img src="/img/javascript.svg" alt="JS" className="w-12 h-12" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight mb-2">
            HTML CSS JS
          </h3>
          <p className="text-sm text-muted-foreground">
            La base du web : HTML pour la structure, CSS pour le style et JavaScript pour l'interactivité.
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <img src="/img/linux-tux.svg" alt="Linux" className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight mb-2">
            Linux
          </h3>
          <p className="text-sm text-muted-foreground">
            Utilisation quotidienne de Linux pour le développement et la gestion de serveur.
          </p>
        </div>
      </div>
    </Section>
  );
}
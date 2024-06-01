import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/github";
export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">AntoineDev.com</h1>
                <div className="flex-1"></div>
                <ul>
                    <Button className="size-6">
                        <GithubIcon size={16} className="text-foreground" />
                    </Button>
                </ul>
            </Section>
        </header>
    )
}
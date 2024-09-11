import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import {
  Button,
} from "@/components/ui/button"
import { Menu } from "lucide-react";
import Link from "next/link";
import "@/app/projects/page.css";

export default function Home() {
  return (

      <div className="h-screen flex flex-col">
        <div className="min-h-fit">
          <div className="flex">
            <Sheet>
              <SheetTrigger asChild style={{ justifySelf: "flex-start" }}>
                <Button variant="ghost" size="icon" style={{marginTop:"auto", marginBottom: "auto"}} >
                  <Menu></Menu>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
              <Link href="/">
                <Button style={{ width: "90%" }} variant="ghost">
                  Home
                </Button>
              </Link>
              <Link href="/projects">
                <Button style={{ width: "90%" }} variant="ghost">
                  Projects
                </Button>
              </Link>
              <Link href="/contact">
                <Button style={{ width: "90%" }} variant="ghost">
                  Contact
                </Button>
              </Link>

              </SheetContent>
            </Sheet>
            <h1 style={{ margin: "auto", fontSize:"40px" }}>
              Rei Anderson
            </h1>

          </div>
        </div>
      
        <div className="bg-zinc-900 flex-1 overflow-hidden inner">
          <p className="p-8 text-lg text-center">
          
          <h2 className="text-2xl">About Me:</h2><br/>
          I am a software dev who enjoys the challenge and satisfaction of low-level programming as well as problem solving. <br />
          You will find my contact information as well as project descriptions on this website, however this was generally to learn Next.js/React as well as usage of shadcn/ui components<br/><br/>
          <h2 className="text-2xl">Known Programming Languages:</h2>
          <ul>
            <li>C (Most comfortable)</li>
            <li>C++</li>
            <li>Rust</li>
            <li>C#</li>
            <li>x86 Assembly</li>
          </ul>
          
          </p>
        </div>
      </div>
    
  );
}

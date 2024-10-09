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
                  About Me
                </Button>
              </Link>
              <Link href="/projects">
                <Button style={{ width: "90%" }} variant="ghost">
                  Projects
                </Button>
              </Link>
              </SheetContent>
            </Sheet>
            <h1 style={{ margin: "auto", fontSize:"40px" }}>
              Rei Anderson
            </h1>

          </div>
        </div>
      
        <div className="home_content flex-1">
         
          
         <h2>About Me:</h2>
          <p>
          I am a software dev who enjoys the challenge and satisfaction of low-level programming as well as problem solving. <br />
          You will find my contact information as well as project descriptions on this website, however it is largely under development.<br/>
          </p>
          <h2>Known Programming Languages:</h2>
          
          <ul className="p-4 text-lg text-center">
            <li>C (Most comfortable)</li>
            <li>C++</li>
            <li>Rust</li>
            <li>C#</li>
            <li>x86 Assembly</li>
          </ul>
        </div>
      </div>
    
  );
}

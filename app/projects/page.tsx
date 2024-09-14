import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet"
import {
  Button
} from "@/components/ui/button"
import {
  ScrollArea
} from "@/components/ui/scroll-area"
import "./page.css"
import { Menu } from "lucide-react"
import Link from "next/link"

const github_link = "https://github.com/GhostFire90/";

export default function Projects() {
  return  <div style={{display:"grid", minHeight:"100vh"}}>
    <div className="h-screen flex flex-col">
      <div className="min-h-fit">
        <div className="flex">
          <Sheet>
            <SheetTrigger asChild style={{ justifySelf: "flex-start" }}>
              <Button variant="ghost" size="icon" style={{ marginTop: "auto", marginBottom: "auto" }} >
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
          <h1 style={{ margin: "auto", fontSize: "40px" }}>
            Projects 
          </h1>

        </div>
      </div>

      <div className="bg-zinc-900 flex-1 overflow-hidden inner">
        <ScrollArea className="w-full h-full">
          <div className="content_gap">
            <Link href={github_link+"SnailMail"}><h1>SnailMail</h1></Link>
            <div className="flex_container">
              <p>
                SnailMail works almost exaclty like email does except with the twist of adding tension through the means of a "delivery" system. Configurable on server side, you can control how many days it takes for the file to be "Delivered", what this means is, the recipient cannot download the file until that amount of time has passed.<br />
                SnailMail automatically uses an asymetric public key encryption algorithm to ecrypt your files so noone except the planned recipient can view them
              </p>
              <img src={github_link+"/SnailMail/raw/main/newLook.gif"}/>
              
            
              
            </div>
          </div>

          <div className="content_gap">
            <Link href={github_link+"Hobkey"}><h1>Hobkey</h1></Link>
            <div className="flex_container">
              <p>
                Hobkey is my hobey kernel that I am developing for research purposes and getting a better understanding of
                how operating systems work and how they interract with hardware.
                <br />
                Currently there are no images as I am very much in the early stages and most we would have is hello world printed on screen
              </p>
            </div>
          </div>

          <div className="content_gap">
            <h1>Redim</h1>
            <div className="flex_container">
              <p>
                Redim is an interpreted Lua-like language me and another person worked on over the course of a year. It was created to form a better understanding of programming languages and interpreters.
                <br />
                It was written entirely in rust, strong-typed, with rust interop to call system functions (the io and network libraries are written with this)
                <br />
                Redim currently has no public repositories but once we have it available this will be updated with the link
              </p>
              <img src="static/images/redim_vecmath.PNG"/>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>

  </div>
}
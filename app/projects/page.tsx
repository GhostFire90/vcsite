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
          <h1 style={{ margin: "auto", fontSize: "40px" }}>
            Projects 
          </h1>

        </div>
      </div>

      <div className="bg-zinc-900 flex-1 overflow-hidden inner">
        <ScrollArea className="w-full h-full">
          <div>
            <h1 className="sec_header">Personal Projects:</h1>
            <div className="content_gap">
              <Link href={github_link + "SnailMail"}><h1>SnailMail</h1></Link>
              <h2>Description</h2>
              <div className="flex_container">
                <div>
                  <p>
                    SnailMail is a simple mail client except with the twist of adding tension through the means of a "delivery" system. Configurable on the server side, you can control how many days it takes for the file to be "Delivered", what this means is, the recipient cannot download the file until that amount of time has passed.
                    SnailMail automatically uses an asymmetric public key encryption algorithm to encrypt your files so no one except the planned recipient can view them.
                  </p>
                  <h2>Technical</h2>
                  <p>
                    SnailMail uses a TCP client/server relationship.<br />
                    Server:
                    <ul className="list-disc pl-8">
                      <li>Synchronizes public keys with new/returning clients</li>
                      <li>Maintains a subdirectory tree for each recipient which contains encrypted files as well as their public key</li>
                      <li>Handles client requests and file transfers</li>
                    </ul>
                    Client:
                    <ul className="list-disc pl-8">
                      <li>Requests recipient public key to encrypt data before sending</li>
                      <li>Maintains a recipient address book</li>
                      Displays TUI 
                    </ul>
                  </p>
                </div>
                <img src={github_link + "/SnailMail/raw/main/newLook.gif"} />
              </div>
              
              
            </div>
          
            <div className="content_gap">
              <Link href={github_link + "Hobkey"}><h1>Hobkey</h1></Link>
              <h2>Description</h2>
              <div className="flex_container">
                <div>
                  <p>
                    Hobkey is my hobby kernel that I am developing for research purposes and to get a better understanding of
                    how operating systems work and how they interact with hardware. <br/>
                    Currently, there are no images as I am very much in the early stages and the most I would have is Hello World printed on the screen.
                  </p>
                  <h2>Technical</h2>
                  <p>
                    Hobkey is written and implemented in C and NASM x86_64 assembly and is targeted at UEFI-compliant x86_64 systems.<br/>
                    As of 10/09/24, I have currently implemented:
                    <ul className="list-disc pl-8">
                      <li>GDT & IDT</li>
                      <li>Linked-List stack implementation of a Physical Memory Manager</li>
                      <li>Paging with temporary map bootstrapping</li>
                      <li>Virtual Memory Manager with page mapping, remapping, and unmapping</li>
                      <li>Basic prototype streams</li>
                      <li>Printing text to a framebuffer using PC Screen Fonts</li>
                      <li>ACPI Table parsing</li>
                      <li>APIC calibration using the HPET</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="sec_header">Academic Projects:</h1>
            <div className="content_gap">
              <h1>Redim</h1>
              <h2>Description</h2>
              <div className="flex_container">
                <div>
                  <p>
                    Redim is an interpreted Lua-like language I worked on with one other programmer over 9 months. I had always wanted to design and implement a programming language and my project course at DigiPen Institute of Technology allowed me to do just that.
                    <br/>
                    Redim was originally written in C++ over a semester but as the project got more complex, the STL caused many problems. To fix this in the second semester we pivoted to using Rust which showed immediate productivity boosts. 
                  </p>
                  <h2>Technical</h2>
                  <p>
                    During both semesters my portion of the code was in the execution of code based on a parsed AST given by my teammate's code, this included:
                    <ul className="list-disc pl-8">
                      <li>Function/Table scopes</li>
                      <li>Import database for caching imports</li>
                      <li>Recursive execution based on AST Node types</li>
                      <li>Python/Lua-like command-line interface</li>
                    </ul>
                  </p>
                </div>
                <img src="static/images/redim_vecmath.PNG"/>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>

  </div>
}
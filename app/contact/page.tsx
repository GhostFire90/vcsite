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

export default function Home() {
  return (
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
            Contact Me
          </h1>

        </div>
      </div>

      <div className="bg-zinc-900 flex-1 overflow-hidden inner">
        
      </div>
    </div>
  );
}
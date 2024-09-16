"use client";

// shadcnui components
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "blogs",
    path: "/blogs",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="text-white mt-32 mb-40 text-center text-2xl">
            <h1 className="text-4xl font-semibold">Prayash<span className="text-accent">.</span></h1>
        </div>
        {/* nav */}
        <nav className="text-white flex flex-col items-center justify-center gap-8 text-xl">
            {links.map((link,index)=>{
                return <Link href={link.path} key={index} className={`${link.path===pathname && "text-accent border-b-2 border-accent font-bold text-2xl"} capitalize hover:text-accent transition-all`}>{link.name} </Link>
            })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

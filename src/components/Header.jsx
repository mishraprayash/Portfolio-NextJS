import Link from "next/link";

// shadcn components
import { Button } from "./ui/button";


// custom components
import  Nav  from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="text-white py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
        <h1 className="text-3xl lg:text-5xl font-semibold">
          Prayash <span className="text-accent">.</span>
        </h1>
        </Link>

        {/* dekstop nav and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav/>
          <Link href="/contact">
          <Button className="">Hire Me</Button>
          </Link>
        </div>

        {/* mobile nav */}

        <div className="xl:hidden">
          <MobileNav />
        </div>

      
      </div>
    </header>
  );
};

export default Header;

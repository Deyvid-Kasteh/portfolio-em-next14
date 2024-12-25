import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-bold text-accent">KASTEH</h1>
        </Link>


        {/* desktopnav and me chama button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contato">
            <Button className="ml-4">Me chama</Button>
          </Link>
        </div>




        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";
import { Pages, Routes } from "@/app/constants/enums";
import Link from "../link";
import { Button } from "../ui/button";
import { Menu, XIcon } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  const locale = "en";
  const links = [
    {
      id: crypto.randomUUID(),
      title: "menu",
      href: Routes.MENU,
    },
    {
      id: crypto.randomUUID(),
      title: "about",
      href: Routes.ABOUT,
    },
    {
      id: crypto.randomUUID(),
      title: "contact",
      href: Routes.CONTACT,
    },
    {
      id: crypto.randomUUID(),
      title: "login",
      href: `${Routes.AUTH}/${Pages.LOGIN}`,
    },
  ];

  return (
    <nav className="order-last lg:order-none">
      {" "}
      <Button
        variant="secondary"
        size="sm"
        className="lg:hidden"
        onClick={() => setOpenMenu(true)}
      >
        <Menu className="!w-6 !h-6" />
      </Button>
      <ul
        className={`fixed lg:static ${
          openMenu ? "left-0 z-50" : "-left-full"
        } top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10`}
      >
        {" "}
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-10 right-10 lg:hidden"
          onClick={() => setOpenMenu(false)}
        >
          <XIcon className="!w-6 !h-6" />
        </Button>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              onClick={() => setOpenMenu(false)}
              href={`/${locale}/${link.href}`}
              className={`hover:text-primary duration-200 transition-colors font-semibold ${
                pathname.startsWith(`/${locale}/${link.href}`)
                  ? "text-primary"
                  : "text-accent"
              }`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

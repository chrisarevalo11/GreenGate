import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

function NavLink({ text, href }: link): ReactElement {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      className={`px-2 py-2 text-sm hover:bg-[#ffffff18] rounded-full transition-all ${
        isActive && "bg-[#ffffff18] pointer-events-none"
      }`}
      href={href}
    >
      <li>{text}</li>
    </Link>
  );
}

export default function NavLinks(): ReactElement {
  return (
    <ul className="hidden lg:flex flex-row items-center gap-1 font-bold text-white">
      {links.map((item) => (
        <NavLink key={item.text} text={item.text} href={item.href} />
      ))}
    </ul>
  );
}

type link = {
  text: string;
  href: string;
};

const links: link[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Explore",
    href: "/explore",
  },
  {
    text: "Create",
    href: "/create",
  },
];

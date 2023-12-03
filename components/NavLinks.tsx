import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { useAddress } from "@thirdweb-dev/react";
import { parksMetadata } from "@/utils/ParksMetadata";

type ResponsiveNavLinkProps = {
  text: string;
  href: string;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

function ResponsiveNavLink({
  text,
  href,
  setIsSidebarOpen,
}: ResponsiveNavLinkProps): ReactElement {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      className={`px-2 py-2 text-sm hover:bg-[#ffffff18] rounded-full transition-all ${
        isActive && "bg-[#ffffff18] pointer-events-none"
      }`}
      href={href}
      onClick={() => setIsSidebarOpen(false)}
    >
      <li>{text}</li>
    </Link>
  );
}

type NavLinksResponsiveProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

export function NavLinksResponsive({
  isSidebarOpen,
  setIsSidebarOpen,
}: NavLinksResponsiveProps): ReactElement {
  const address: string = useAddress() as string;

  const park = parksMetadata.find((park) => park.ownerAddress === address);

  return (
    <ul
      className={`lg:hidden fixed h-screen w-[80vw] bg-black z-[100] max-w-md flex flex-col transition-all justify-center items-center gap-3 font-bold text-white ${
        isSidebarOpen ? "left-0 top-0 bottom-0" : "-left-[500vh]"
      }`}
    >
      {park === undefined
        ? links.map((item) => (
            <ResponsiveNavLink
              setIsSidebarOpen={setIsSidebarOpen}
              key={item.text}
              text={item.text}
              href={item.href}
            />
          ))
        : adminLinks.map((item) => {
            if (item.text === "My seasons") {
              return (
                <ResponsiveNavLink
                  setIsSidebarOpen={setIsSidebarOpen}
                  key={item.text}
                  text={item.text}
                  href={`/explore/${park?.id}`}
                />
              );
            }
            return (
              <ResponsiveNavLink
                setIsSidebarOpen={setIsSidebarOpen}
                key={item.text}
                text={item.text}
                href={item.href}
              />
            );
          })}
      <button className="p-1" onClick={() => setIsSidebarOpen(false)}>
        ✖️
      </button>
    </ul>
  );
}

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
      <li className="whitespace-nowrap">{text}</li>
    </Link>
  );
}

export default function NavLinks(): ReactElement {
  const address: string = useAddress() as string;

  const park = parksMetadata.find((park) => park.ownerAddress === address);

  return (
    <ul className="hidden lg:flex flex-row items-center gap-1 font-bold text-white">
      {park === undefined
        ? links.map((item) => (
            <NavLink key={item.text} text={item.text} href={item.href} />
          ))
        : adminLinks.map((item) => {
            if (item.text === "My seasons") {
              return (
                <NavLink
                  key={item.text}
                  text={item.text}
                  href={`/explore/${park?.id}`}
                />
              );
            }
            return (
              <NavLink key={item.text} text={item.text} href={item.href} />
            );
          })}
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
];

const adminLinks: link[] = [
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
  {
    text: "My seasons",
    href: "/explore/tayrona",
  },
];

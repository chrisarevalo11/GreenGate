import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavbarLogo(): React.ReactElement {
  return (
    <Link href={"/"} className="mt-1 hidden md:block">
      <Image
        src={"/images/TextLogo.png"}
        alt="logo"
        width={200}
        height={100}
        priority
        className="w-[150px] lg:w[200px]"
      />
    </Link>
  );
}

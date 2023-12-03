import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavbarLogo(): React.ReactElement {
  return (
    <Link href={"/"} className="mt-1">
      <Image
        src={"/images/TextLogo.png"}
        alt="logo"
        width={200}
        height={100}
        className="w-[150px] md:w[200px]"
      />
    </Link>
  );
}

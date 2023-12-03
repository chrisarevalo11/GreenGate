"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Fragment, ReactNode } from "react";

export default function LayoutNavbar(): ReactNode {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return <Fragment>{!isHome && <Navbar />}</Fragment>;
}

"use client";

import { ConnectWallet } from "@thirdweb-dev/react";
import NavbarLogo from "./NavbarLogo";
import NavLinks from "./NavLinks";
import { useState } from "react";

export default function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar bg-neutral lg:min-w-fit lg:w-[60%] lg:max-w-[930px] px-4 lg:rounded-full mx-auto flex justify-between lg:top-2 z-[100] shadow-lg">
      <div className="navbar-start hidden lg:flex">
        <NavLinks />
      </div>
      <div className="navbar-center">
        <NavbarLogo />
      </div>
      <div className="navbar-end">
        <ConnectWallet
          theme={"dark"}
          modalSize={"compact"}
          btnTitle={"Connect Wallet"}
          modalTitleIconUrl={""}
          style={{
            borderRadius: "100px",
            backgroundColor: "#1EB854",
            color: "white",
          }}
        />
      </div>
    </nav>
  );
}

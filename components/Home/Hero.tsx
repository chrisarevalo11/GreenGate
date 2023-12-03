import { ReactNode } from "react";
import Navbar from "../Navbar";
import { ephesis } from "@/styles/fonts";
import Link from "next/link";

export default function Hero(): ReactNode {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/hero.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen w-full -mt-6 pt-6 flex flex-col gap-8"
    >
      <Navbar />
      <div className="max-w-[1100px] h-[70vh] mx-auto flex flex-col gap-6 justify-center items-center">
        <h1
          className={`text-neutral font-bold text-5xl lg:text-8xl text-center max-w-2xl ${ephesis.className}`}
        >
          Explore, Preserve and Transform:
        </h1>
        <h2 className="text-neutral text-xl lg:text-3xl text-center max-w-lg lg:max-w-2xl">
          Join the Green Revolution with NFTs that unlock access to{" "}
          <span className="text-secondary font-bold">Natural Parks</span> and{" "}
          <span className="text-secondary font-bold">
            Sustainable Development Projects
          </span>
        </h2>
        <Link href="/explore" className="btn btn-primary mt-5">
          Explore parks
        </Link>
      </div>
    </div>
  );
}

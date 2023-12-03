import { ReactElement } from "react";

export default function ExploreHero(): ReactElement {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/exploreHero.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-72 rounded-xl grid place-content-center"
    >
      <div className="glass text-3xl lg:text-5xl text-center font-bold rounded-xl text-white px-14 py-10 lg:px-20 lg:py-16">
        Natural Parks
      </div>
    </div>
  );
}

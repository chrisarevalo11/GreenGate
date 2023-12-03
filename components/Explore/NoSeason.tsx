import { ReactElement } from "react";

export default function SeasonCardExplore(): ReactElement {
  return (
    <div className="card card-compact w-[300px] bg-gray-300 shadow-xl overflow-hidden min-h-[230px] flex flex-col justify-center gap-5 items-center grow">
      <h1 className="text-3xl text-gray-400">{"(;-;)"}</h1>
      <h2 className="text-xl text-gray-400">No season listed</h2>
    </div>
  );
}

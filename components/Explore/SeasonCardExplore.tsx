import { formValuesTypes } from "@/app/create/page";
import Link from "next/link";
import { ReactNode } from "react";

type ProjectCardProps = {
  seasonMetadata: Partial<formValuesTypes>;
};

export default function SeasonCardExplore({
  seasonMetadata,
}: ProjectCardProps): ReactNode {
  const { seasonName, symbol, maxTickets, seasonImage } = seasonMetadata;

  return (
    <div className="card card-compact w-[300px] bg-neutral shadow-xl overflow-hidden min-h-[230px] flex flex-col items-center lg:sticky lg:top-3 grow">
      <figure
        className="w-full min-h-[140px] text-neutral"
        style={{
          backgroundImage: `url(${seasonImage})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {seasonMetadata.seasonImage === undefined && "Image"}
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-center text-white flex justify-center text-[1.2em]">
          {seasonName} •{" "}
          <span className="text-primary uppercase">{symbol}</span>
        </h2>
        <p className="text-center text-gray-400">
          {maxTickets ? `${maxTickets} tickets` : ""}
        </p>
        <button className="btn btn-primary">Purchase</button>
      </div>
    </div>
  );
}

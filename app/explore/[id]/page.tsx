import { ReactNode } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { parksMetadata } from "@/utils/ParksMetadata";
import Image from "next/image";
import SeasonCardExplore from "@/components/Explore/SeasonCardExplore";

export default function Page({
  params,
}: {
  params: { id: string };
}): ReactNode {
  const { id } = params;
  const intID = parseInt(id);

  const parkMetadata = parksMetadata.find((park) => park.id === intID);
  const seasonMetadata = {
    seasonName: "Season 1",
    symbol: "S1",
    maxTickets: 10,
    seasonImage: parkMetadata?.image,
  };

  return (
    <section className="w-full flex justify-center relative min-h-[80vh] mt-10">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row gap-5 justify-between items-center">
        {parkMetadata && (
          <>
            <div className="flex flex-col items-center shadow-xl py-2 px-5 rounded-xl grow max-w-[350px]">
              <figure
                style={{
                  backgroundImage: `url(${parkMetadata.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-36 h-36 rounded-full"
              ></figure>
              <h1 className="text-2xl lg:text-3xl text-center text-neutral font-bold mt-7">
                {parkMetadata.name}
              </h1>
              <h2 className="flex justify-center items-center gap-2 text-xl my-3 text-gray-600">
                <FaLocationDot />
                {parkMetadata.location}
              </h2>
            </div>
            <Image
              src={"/images/tree.png"}
              alt={"astronaut"}
              width={200}
              height={200}
              className="animate-bounce-slow mt-3 grow"
            />
            <SeasonCardExplore seasonMetadata={seasonMetadata} />
          </>
        )}
      </div>
    </section>
  );
}

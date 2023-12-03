'use client'
import { formValuesTypes } from "@/app/create/page";
import { createSeasonABI } from "@/utils/CreateSeasonABI";
import { MarketplaceAbi } from "@/utils/Marketplace";
import { useContract, useContractWrite, useContractEvents } from "@thirdweb-dev/react";
import Link from "next/link";
import { ReactNode, useMemo } from "react";

type ProjectCardProps = {
  seasonMetadata: Partial<formValuesTypes>;
};

export default function SeasonCardExplore({
  seasonMetadata,
}: ProjectCardProps): ReactNode {
  const { seasonName, symbol, maxTickets, seasonImage } = seasonMetadata;

  const { contract: factoryContract } = useContract(
    process.env.NEXT_PUBLIC_SEASON_CONTRACT_ADDRESS,
    createSeasonABI
  );

  const { contract: marketplaceContract } = useContract(
    process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_ADDRESS,
    MarketplaceAbi
  );

  const { data: factoryData } = useContractEvents(factoryContract);
  
  const collection = useMemo(() => {
    if (!factoryData) return ''
    return factoryData[0].data.newCollection;
  }, [factoryData]);

  const { mutateAsync } = useContractWrite(marketplaceContract, "purchaseNft");

  const handleClick = async () => {
    const data = await mutateAsync({
      args: ['0xD6C0f090276cdce60D46954aB10eDDc4BF8c9ad6', 1],
      overrides: {
        gasLimit: 1000000, // override default gas limit
        value: "1000000000000000000", // send 0.1 native token with the contract call
      },
    });

    return data
  }

  return (
    <div className="card card-compact w-[300px] bg-neutral shadow-xl overflow-hidden min-h-[230px] flex flex-col items-center grow">
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
        <button onClick={handleClick} className="btn btn-primary">Purchase</button>
      </div>
    </div>
  );
}

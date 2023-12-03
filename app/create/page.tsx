"use client";

import CreateSeasonForm from "@/components/Create/CreateSeasonForm";
import SeasonCard from "@/components/Create/SeasonCard";
import { ReactNode, useState } from "react";

export type formValuesTypes = {
  seasonName: string;
  symbol: string;
  maxTickets: number;
  seasonImage: string;
  imageFile: File;
};
export default function Create(): ReactNode {
  const [formValues, setFormValues] = useState<formValuesTypes>({
    seasonName: "",
    symbol: "",
    maxTickets: 0,
    seasonImage: "",
    imageFile: {} as File,
  });

  return (
    <section className="flex flex-col justify-evenly items-center py-3 w-full gap-4 md:gap-8 mx-auto max-w-[1100px]">
      <h1 className="text-neutral font-bold text-3xl md:text-5xl my-3 text-center">
        Create a new season
      </h1>
      <div className="flex flex-col gap-5 lg:gap-0 w-full lg:flex-row justify-evenly items-center lg:items-start">
        <SeasonCard seasonMetadata={formValues} />
        <CreateSeasonForm
          formValues={formValues}
          setFormValues={setFormValues}
        />
      </div>
    </section>
  );
}

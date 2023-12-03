"use client";

import { ChangeEvent, Dispatch, ReactElement, useState } from "react";
import { useFormik } from "formik";
import { formValuesTypes } from "@/app/create/page";
import FormField from "./FormField";
import ImageField from "./ImageField";
import { uploadImgToIPFS } from "@/utils/uploadImgToIPFS";
import { uploadJsonToIPFS } from "@/utils/uploadJSONtoIPFS";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { createSeasonABI } from "@/utils/CreateSeasonABI";
import { useToast, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

type ProjectFormProps = {
  formValues: formValuesTypes;
  setFormValues: Dispatch<React.SetStateAction<formValuesTypes>>;
};

export default function CreateSeasonForm({
  formValues,
  setFormValues,
}: ProjectFormProps): ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();
  const { seasonName, symbol, maxTickets, beneficiaryAddress } = formValues;
  const router = useRouter();
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_SEASON_CONTRACT_ADDRESS,
    createSeasonABI
  );
  const { mutateAsync } = useContractWrite(contract, "createEvent");
  // console.log(contract);

  const createSeason = async (
    name: string,
    symbol: string,
    maxTickets: number,
    beneficiaryAddress: string
  ) => {
    const addressMarketplace = "0x65243035488b36C68A2841A7602efECC80dDF88b";

    const data = await mutateAsync({
      args: [name, symbol, maxTickets, beneficiaryAddress, addressMarketplace],
    });

    console.log(data);
    return data;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value }: { name: string; value: string } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formik = useFormik({
    initialValues: formValues,
    onSubmit: async () => {
      setIsLoading(true);
      const img = await uploadImgToIPFS(formValues.imageFile);

      console.log(contract);
      const data = {
        name: formValues.seasonName,
        image: img,
      };

      const metadata = await uploadJsonToIPFS(data);

      try {
        await createSeason(seasonName, symbol, maxTickets, beneficiaryAddress);
        toast({
          title: "Season created",
          description: "Season created successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });

        setIsLoading(false);

        setTimeout(() => {
          router.push("/explore");
        }, 800);
      } catch (error) {
        console.log(error);
        toast({
          title: "Task Failed",
          description: "Season creation failed",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="card w-[95%] md:w-[90%] lg:w-1/2 bg-neutral shadow-2xl m-2 mb-8">
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="card-body">
          <FormField
            label="Season Name"
            inputName="seasonName"
            inputType="text"
            placeholder="My project"
            isRequired={true}
            handleChange={handleChange}
          />
          <FormField
            label="Symbol"
            inputName="symbol"
            inputType="text"
            placeholder="e.g. MPJ"
            isRequired={true}
            handleChange={handleChange}
          />
          <FormField
            label="Maximum tickets"
            inputName="maxTickets"
            inputType="number"
            placeholder="e.g. 50"
            isRequired={true}
            handleChange={handleChange}
          />
          <FormField
            label="Beneficiary address"
            inputName="beneficiaryAddress"
            inputType="text"
            placeholder="e.g. 0x12A3...1A13"
            isRequired={true}
            handleChange={handleChange}
          />
          <ImageField
            label="Season Image"
            inputName="seasonImage"
            isRequired={true}
            handleChange={setFormValues}
            formValues={formValues}
          />
        </div>

        <div className="card-actions justify-center">
          <button
            type="submit"
            className={`btn btn-primary btn-wide mb-5 ${
              !formValues.seasonImage && "opacity-60 pointer-events-none"
            }`}
          >
            {isLoading ? <Spinner /> : "Create Season"}
          </button>
        </div>
      </form>
    </div>
  );
}

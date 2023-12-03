import { ReactNode } from "react";
import Image from "next/image";

export default function Page({
  params,
}: {
  params: { id: string };
}): ReactNode {
  const { id } = params;
  return (
    <section className="w-full flex justify-center relative min-h-[80vh] mt-10">
      <Image
        src={`/images/cansao.png`}
        alt="cansao"
        className="absolute -right-[50px]"
        width={300}
        height={300}
      />
      <div className="max-w-[1100px] mx-auto flex flex-col items-center"></div>
    </section>
  );
}

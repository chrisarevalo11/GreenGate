import Link from "next/link";
import { ReactElement } from "react";

type ParkCardProps = {
  name: string;
  location: string;
  href: string;
};

export default function ParkCard({
  name,
  location,
  href,
}: ParkCardProps): ReactElement {
  return (
    <div className="card bg-neutral shadow-xl flex flex-col items-center justify-between rounded-xl gap-5 px-3 py-4">
      <figure
        style={{
          backgroundImage: 'url("/images/NaturalPark.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-24 h-24 rounded-full relative bottom-14 -mb-14 mx-2"
      ></figure>
      <div className="text-center">
        <h1 className="card-title text-base-content">{name}</h1>
        <h2 className="text-gray-400 text-md">{location}</h2>
      </div>
      <Link href={href} className="btn btn-primary">
        Buy tickets
      </Link>
    </div>
  );
}

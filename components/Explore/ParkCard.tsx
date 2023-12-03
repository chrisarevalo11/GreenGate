import Link from "next/link";
import { ReactElement } from "react";
import { FaLocationDot } from "react-icons/fa6";

type ParkCardProps = {
  name: string;
  location: string;
  href: string;
  image: string;
};

export default function ParkCard({
  name,
  location,
  href,
  image,
}: ParkCardProps): ReactElement {
  return (
    <div className="card bg-neutral shadow-xl flex flex-col items-center justify-between rounded-xl gap-5 px-3 py-4">
      <figure
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-24 h-24 rounded-full relative bottom-14 -mb-14 mx-2"
      ></figure>
      <div className="text-center">
        <h1 className="card-title text-base-content">{name}</h1>
        <h2 className="text-gray-400 text-md flex gap-2 justify-center items-center">
          <FaLocationDot /> {location}
        </h2>
      </div>
      <Link href={href} className="btn btn-primary">
        Buy tickets
      </Link>
    </div>
  );
}

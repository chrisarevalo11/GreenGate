import ExploreHero from "@/components/Explore/ExploreHero";
import ParkCard from "@/components/Explore/ParkCard";

export default function Explore() {
  return (
    <section className="max-w-[1100px] mx-auto flex flex-col items-center py-4 min-h-[80vh]">
      <ExploreHero />
      <div className="grid w-[95%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-4 mt-16 mb-10 mx-7">
        <ParkCard
          name="Parque Natural Tayrona"
          href="/explore/1"
          location="Santa Marta"
          image="https://w3s.link/ipfs/bafybeicvriea4bd2537kcudmhelee6p7ia7bvqmlbzgp73yimzvsyev2oy"
        />
        <ParkCard
          name="Cueva de los Guácharos"
          href="/explore/2"
          location="Huila"
          image="https://w3s.link/ipfs/bafkreifwzl6rkjylf76u6kdxhrsge2widbyosfxxpmcjp2uhh7gosn3ej4"
        />
        <ParkCard
          name="Parque Nacional Natural Gorgona"
          href="/explore/3"
          location="Cauca"
          image="https://w3s.link/ipfs/bafkreid7k27qtrbmbhuwhxc33zd3irzlvh7mxdststjjm3tls2jarg6viq"
        />
      </div>
    </section>
  );
}

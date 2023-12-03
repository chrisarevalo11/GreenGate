import ExploreHero from "@/components/Explore/ExploreHero";
import ParkCard from "@/components/Explore/ParkCard";

export default function Explore() {
  return (
    <section className="max-w-[1100px] mx-auto flex flex-col items-center py-4 min-h-[80vh]">
      <ExploreHero />
      <div className="grid w-[95%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-4 mt-16 mb-10 mx-7">
        <ParkCard
          name="Parque Natural Tayrona"
          href="/explore/tayrona"
          location="Santa Marta"
        />
        <ParkCard
          name="Cueva de los Guácharos"
          href="/explore/guacharos"
          location="Huila"
        />
        <ParkCard
          name="Parque Nacional Natural Gorgona"
          href="/explore/gorgona"
          location="Cauca"
        />
      </div>
    </section>
  );
}

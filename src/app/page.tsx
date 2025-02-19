import BestSellers from "./_components/BestSellers";
import Hero from "./_components/Hero";
import { getBestSellers } from "@/server/db";

export default async function Home() {
  const products = await getBestSellers();
  return (
    <main>
      <Hero />
      <BestSellers items={products} />
    </main>
  );
}

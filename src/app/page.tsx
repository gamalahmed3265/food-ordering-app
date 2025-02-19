import BestSellers from "./_components/BestSellers";
import Hero from "./_components/Hero";
import { getBestSellers } from "@/server/db";
import AboutPage from "./about/page";
import Contact from "@/components/contact";

export default async function Home() {
  const products = await getBestSellers();
  return (
    <main>
      <Hero />
      <BestSellers items={products} />
      <AboutPage />
      <Contact />
    </main>
  );
}

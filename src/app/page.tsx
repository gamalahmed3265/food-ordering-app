import BestSellers from "./_components/BestSellers";
import Hero from "./_components/Hero";
import { getBestSellers } from "@/server/db";
import AboutPage from "./about/page";
import Contact from "@/components/contact";
import { db } from "@/lib/prisma";

export default async function Home() {
  const products = await db.product.findMany({
    include: {
      sizes: true,
      extras: true,
    },
  });
  // const products = await getBestSellers();
  return (
    <main>
      <Hero />
      <BestSellers items={products} />
      <AboutPage />
      <Contact />
    </main>
  );
}

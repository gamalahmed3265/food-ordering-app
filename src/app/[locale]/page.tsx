import BestSellers from "./_components/BestSellers";
import Hero from "./_components/Hero";
import AboutPage from "./about/page";
import Contact from "@/components/contact";

export default async function Home() {
  return (
    <main>
      <Hero />
      <BestSellers />
      <AboutPage />
      <Contact />
    </main>
  );
}

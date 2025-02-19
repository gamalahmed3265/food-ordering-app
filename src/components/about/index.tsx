import { Routes } from "@/app/constants/enums";
import MainHeading from "../main-heading/inde";

async function About() {
  return (
    <section className="section-gap" id={Routes.ABOUT}>
      <div className="container text-center">
        <MainHeading subTitle={"Our story"} title={"About us"} />
        <div className="text-accent max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Welcome to our pizzeria, where we serve the finest pizzas made with
            the freshest ingredients. Every slice is a masterpiece, crafted with
            care to deliver the perfect balance of flavors. From classic
            favorites to unique creations, there&apos;s something for every
            pizza lover!
          </p>
          <p>
            Welcome to our pizzeria, where we serve the finest pizzas made with
            the freshest ingredients. Every slice is a masterpiece, crafted with
            care to deliver the perfect balance of flavors. From classic
            favorites to unique creations, there&apos;s something for every
            pizza lover!
          </p>
          <p>
            Welcome to our pizzeria, where we serve the finest pizzas made with
            the freshest ingredients. Every slice is a masterpiece, crafted with
            care to deliver the perfect balance of flavors. From classic
            favorites to unique creations, there&apos;s something for every
            pizza lover!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

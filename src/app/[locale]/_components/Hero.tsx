import Link from "@/components/link";
import { buttonVariants } from "@/components/ui/button";
import { Languages, Routes } from "@/constants/enums";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

async function Hero() {
  const locale = await getCurrentLocale();

  const { home } = await getTrans(locale);
  const { hero } = home;
  return (
    <section className="section-gap">
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="md:py-12">
          <h1 className="text-4xl font-semibold">{hero.title}</h1>
          <p className="text-accent my-4">{hero.description}</p>
          <div className="flex gap-4 items-center">
            <Link
              href={`/${Routes.MENU}`}
              className={`${buttonVariants({
                size: "lg",
              })} space-x-2 !px-4 !rounded-full uppercase`}
            >
              {hero.orderNow}
              <ArrowRightCircle
                className={`!w-5 !h-5 ${
                  locale === Languages.ARABIC ? "rotate-180 " : ""
                }`}
              />
            </Link>
            <Link
              href={`/${Routes.ABOUT}`}
              className="flex text-black duration-200 font-semibold gap-2 hover:text-primary items-center transition-colors"
            >
              {hero.learnMore}
              <ArrowRightCircle
                className={`!w-5 !h-5 ${
                  locale === Languages.ARABIC ? "rotate-180 " : ""
                }`}
              />
            </Link>
          </div>
        </div>
        <div className="hidden md:block relative">
          <Image
            src="https://res.cloudinary.com/dmpqem6np/image/upload/v1742063324/product_images/k12n5quiaqdru5clklfh.png"
            alt="Pizza"
            fill
            className="hover:animate-spin object-contain"
            loading="eager"
            priority
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;

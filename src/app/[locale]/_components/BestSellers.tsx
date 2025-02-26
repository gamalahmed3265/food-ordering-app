import MainHeading from "@/components/main-heading/inde";
import Menu from "@/components/Menu";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import { db } from "@/lib/prisma";
import getTrans from "@/lib/translation";
// import { getBestSellers } from "@/server/db";

async function BestSellers() {
  // const bestSellers = await getBestSellers(3);
  const products = await db.product.findMany({
    include: {
      sizes: true,
      extras: true,
    },
  });
  const locale = await getCurrentLocale();
  const { home } = await getTrans(locale);
  const { bestSeller } = home;
  return (
    <section>
      <div className="container">
        <div className="text-center mb-4">
          <MainHeading
            subTitle={bestSeller.checkOut}
            title={bestSeller.OurBestSellers}
          />
        </div>
        <Menu items={products} />
      </div>
    </section>
  );
}

export default BestSellers;

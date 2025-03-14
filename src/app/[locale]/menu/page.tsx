import { db } from "@/lib/prisma";
import React from "react";
import Menu from "@/components/Menu";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";

const MenuPage = async () => {
  const local = await getCurrentLocale();
  const { noProductsFound } = await getTrans(local);
  const categorites = await db.category.findMany({
    include: {
      products: {
        include: {
          sizes: true,
          extras: true,
        },
      },
    },
  });

  return (
    <main>
      {categorites.length > 0 ? (
        categorites.map((category) => (
          <section key={category.id} className="section-gap">
            <div className="container text-center">
              <h1 className="text-primary font-bold text-4xl italic mb-6">
                {category.name}
              </h1>
              <Menu items={category.products} />
            </div>
          </section>
        ))
      ) : (
        <p className="text-accent text-center py-20">{noProductsFound}</p>
      )}
    </main>
  );
};

export default MenuPage;

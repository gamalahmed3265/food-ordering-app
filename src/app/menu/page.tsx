import { db } from "@/lib/prisma";
import React from "react";
import Menu from "@/components/Menu";

const MenuPage = async () => {
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
        <p className="text-accent text-center py-20">
          {"translations.noProductsFound"}
        </p>
      )}
    </main>
  );
};

export default MenuPage;

import MainHeading from "@/components/main-heading/inde";
import Menu from "@/components/Menu";
import { ProductWithRelations } from "@/types/product";

const BestSellers = () => {
  const bestSellers: ProductWithRelations[] = [
    {
      id: crypto.randomUUID(),
      name: "Pizza",
      description: "this is a pizza",
      basePrice: 12,
      image: "/assets/imgs/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Pizza",
      description: "this is a pizza",
      basePrice: 12,
      image: "/assets/imgs/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Pizza",
      description: "this is a pizza",
      basePrice: 12,
      image: "/assets/imgs/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Pizza",
      description: "this is a pizza",
      basePrice: 12,
      image: "/assets/imgs/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Pizza",
      description: "this is a pizza",
      basePrice: 12,
      image: "/assets/imgs/pizza.png",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="text-center mb-4">
          <MainHeading title="Our Best Sellers" subTitle="checkOut" />
        </div>
        <Menu items={bestSellers} />
      </div>
    </section>
  );
};

export default BestSellers;

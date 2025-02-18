import MainHeading from "@/components/main-heading/inde";
import Menu from "@/components/Menu";
import { ProductWithRelations } from "@/types/products";

const BestSellers = ({ items }: { items: ProductWithRelations[] }) => {
  return (
    <section>
      <div className="container">
        <div className="text-center mb-4">
          <MainHeading title="Our Best Sellers" subTitle="checkOut" />
        </div>
        <Menu items={items} />
      </div>
    </section>
  );
};

export default BestSellers;

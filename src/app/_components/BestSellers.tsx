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
        {items.length > 0 ? (
          <Menu items={items} />
        ) : (
          <div className="flex justify-center items-center my-16">
            <h2 className="uppercase  italic text-center animate-ping duration-1000 delay-1000">
              not items
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSellers;

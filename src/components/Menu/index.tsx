import React from "react";
import MenuItem from "./MenuItem";
import { ProductWithRelations } from "@/types/products";

const Menu = ({ items }: { items: ProductWithRelations[] }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((e) => (
        <MenuItem item={e} key={e.id} />
      ))}
    </ul>
  );
};

export default Menu;

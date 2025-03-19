import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getOrders = cache(
  () => {
    const orders = db.order.findMany();
    return orders;
  },
  ["orders"],
  { revalidate: 3600 }
);

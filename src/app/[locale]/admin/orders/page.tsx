import { getOrders } from "@/server/db/orders";

const OrdersPage = async () => {
  // const orders = await db.order.findMany();
  const orders = await getOrders();
  return (
    <main>
      <section className="section-gap">
        <div className="container">
          <ul className="flex flex-col gap-4">
            {orders.map((order) => (
              <li
                key={order.id}
                className="flex justify-between items-center gap-4 p-4 rounded-md bg-gray-100"
              >
                <div className="md:flex justify-between flex-1">
                  <h3 className="text-black font-medium text-sm flex-1">
                    {order.userEmail}
                  </h3>
                  <p className="text-accent font-medium text-sm flex-1">
                    {order.totalPrice}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default OrdersPage;

"use server";
import { deliveryFee, getSubTotal, getTotalAmount } from "@/lib/cart";
import { db } from "@/lib/prisma";
import { CartItem } from "@/redux/features/cart/cartSlice";
import { Session } from "next-auth";

export const createOrder = async (user: Session["user"], cart: CartItem[]) => {
  const totalAmount = getTotalAmount(cart);
  try {
    const orderResponse = await db.order.create({
      data: {
        subTotal: getSubTotal(cart),
        deliveryFee: deliveryFee,
        totalPrice: totalAmount,
        userEmail: user.email,
        phone: user.phone ?? "",
        streetAddress: user.streetAddress ?? "",
        postalCode: user.postalCode ?? "",
        city: user.city ?? "",
        country: user.country ?? "",
        products: {},
      },
    });
    console.log(orderResponse);
  } catch (error) {
    console.log(error);
  }
};

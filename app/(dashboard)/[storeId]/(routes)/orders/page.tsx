import { format } from "date-fns";
import React from "react";
import prismadb from "@/lib/prismadb";
import { formatter } from "@/lib/utils";
import { OrderClient } from "./components/client";
import { OrderColumn } from "./components/columns";

const OrdersPage = async ({ params }: { params: { storeId: string } }) => {
  const orders = await prismadb.order.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formettedOrders: OrderColumn[] = orders.map((item) => ({
    id: item.id,
    phone : item.phone,
    adress : item.adress,
    products : item.orderItems.map((orderItem) => orderItem.product.name).join(", "),
    totalPrice : formatter.format(item.orderItems.reduce((total, ıtem) => {
     return  total + Number(ıtem.product.price)
    }, 0)),
    isPaid : item.isPaid,
    createdAt: format(new Date(item.createdAt), "dd/MM/yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrderClient data={formettedOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;

import { Order } from "../../types/Order";
import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";

export const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get("/orders").then(({ data }) => setOrders(data));
  }, []);

  const waiting = orders.filter((order) => order.status === "WAITING");
  const inProduction = orders.filter(
    (order) => order.status === "IN_PRODUCTION"
  );
  const done = orders.filter((order) => order.status === "DONE");

  const handleCancelOrder = (orderId: string) => {
    setOrders((preState) => preState.filter((order) => order._id !== orderId));
  };

  const handleOrderStatusChange = (
    orderId: string,
    status: Order["status"]
  ) => {
    setOrders((preState) =>
      preState.map((order) =>
        order._id === orderId ? { ...order, status } : order
      )
    );
  };

  const handleDeleteCompletedOrder = (orderId: string) => {
    setOrders((preState) => preState.filter((order) => order._id !== orderId));
  };

  return (
    <Container>
      <OrdersBoard
        icon="🕒"
        title="Fila de espera"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={done}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
        onDeleteCompletedOrder={handleDeleteCompletedOrder}
      />
    </Container>
  );
};

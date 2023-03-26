import { Order } from "../../types/Order";
import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard";

const orders: Order[] = [
  {
    _id: "641f04fc48fe98e1588e9998",
    table: "1",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Coca Cola",

          imagePath: "1679605949703-coca-cola.png",
          price: 7,
        },
        quantity: 2,
        _id: "641f04fc48fe98e1588e9999",
      },
    ],
  },
];

export const Orders = () => {
  return (
    <Container>
      <OrdersBoard icon="🕒" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👨‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
};

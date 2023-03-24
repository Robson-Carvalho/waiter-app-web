import { Order } from "../../types/Order";
import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard";

const orders: Order[] = [
  {
    _id: "641cc98425438d3ee0fdd5de",
    table: "123",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Pizza quatro queijos",

          imagePath: "1679597867247-quatro-queijos.png",
          price: 40,
        },
        quantity: 3,
        _id: "641cc98425438d3ee0fdd5df",
      },
      {
        product: {
          name: "Coca cola",

          imagePath: "1679605949703-coca-cola.png",
          price: 7,
        },
        quantity: 3,
        _id: "641cc98425438d3ee0fdd5e0",
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

import { Order } from "../../types/Order";
import { Board, OrderContainer } from "./styles";

import { OrderModal } from "../OrderModal";
import { useState } from "react";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export const OrdersBoard = ({ icon, title, orders }: OrdersBoardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  const handleOpenModal = () => {
    setIsModalVisible(!isModalVisible);

    if (!isModalVisible) {
      handleSelectOrder(null);
    }
  };

  const handleSelectOrder = (order: Order | null) => {
    setSelectedOrder(order);
  };

  return (
    <Board>
      {isModalVisible && (
        <OrderModal order={selectedOrder} handleOpenModal={handleOpenModal} />
      )}

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length >= 0 && (
        <OrderContainer>
          {orders.map((order) => (
            <button
              type="button"
              key={order._id}
              onClick={() => {
                handleOpenModal(), handleSelectOrder(order);
              }}
            >
              <strong>{order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrderContainer>
      )}
    </Board>
  );
};

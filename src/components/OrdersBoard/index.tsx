import { Order } from "../../types/Order";
import { Board, OrderContainer } from "./styles";

import { OrderModal } from "../OrderModal";
import { useState } from "react";
import { api } from "../../utils/api";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
}

export const OrdersBoard = ({
  icon,
  title,
  orders,
  onCancelOrder,
}: OrdersBoardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(!isModalVisible);

    if (!isModalVisible) {
      handleSelectOrder(null);
    }
  };

  const handleSelectOrder = (order: Order | null) => {
    setSelectedOrder(order);
  };

  const handleCancelOrder = async () => {
    setIsLoading(true);
    await api.delete(`/orders/${selectedOrder?._id}`);

    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalVisible(false);
  };

  return (
    <Board>
      {isModalVisible && (
        <OrderModal
          isLoading={isLoading}
          order={selectedOrder}
          handleOpenModal={handleOpenModal}
          onCancelOrder={handleCancelOrder}
        />
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

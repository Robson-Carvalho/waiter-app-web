import { Order } from "../../types/Order";
import { Board, OrderContainer } from "./styles";
import { toast } from "react-toastify";

import { OrderModal } from "../OrderModal";
import { useState } from "react";
import { api } from "../../utils/api";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order["status"]) => void;
  onDeleteCompletedOrder?: (orderId: string) => void;
}

export const OrdersBoard = ({
  icon,
  title,
  orders,
  onCancelOrder,
  onChangeOrderStatus,
  onDeleteCompletedOrder,
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

  const handleChangeOrderStatus = async () => {
    setIsLoading(true);

    const status =
      selectedOrder?.status === "WAITING" ? "IN_PRODUCTION" : "DONE";

    await api.patch(`/orders/${selectedOrder?._id}`, { status });

    toast.success(
      `O status do pedido da mesa ${selectedOrder?.table} foi alterado!`
    );
    onChangeOrderStatus(selectedOrder!._id, status);
    setIsLoading(false);
    setIsModalVisible(false);
  };

  const handleCancelOrder = async () => {
    setIsLoading(true);
    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);
    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalVisible(false);
  };

  const handleDeleteCompletedOrder = () => {
    toast.success(
      `O pedido finalizado da mesa ${selectedOrder?.table} foi removido da lista!`
    );
    onCancelOrder(selectedOrder!._id);
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
          onDeleteCompletedOrder={handleDeleteCompletedOrder}
          onChangeOrderStatus={handleChangeOrderStatus}
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

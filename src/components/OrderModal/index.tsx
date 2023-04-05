import { Overlay, ModalBody, OrderDetails, Actions } from "./styles";

import closeIcon from "../../assets/images/close-icon.svg";
import { formatCurrency } from "../../utils/formartCurrency";
import { Order } from "../../types/Order";
import { useEffect } from "react";

interface OrderModalProps {
  order: null | Order;
  handleOpenModal: () => void;
  isLoading: boolean;
  onCancelOrder: () => void;
  onDeleteCompletedOrder: () => void;
  onChangeOrderStatus: () => void;
}

export const OrderModal = ({
  order,
  handleOpenModal,
  isLoading,
  onCancelOrder,
  onChangeOrderStatus,
  onDeleteCompletedOrder,
}: OrderModalProps) => {
  const total: number | any = order?.products.reduce(
    (acc, { product: { price }, quantity }) => {
      return acc + price * quantity;
    },
    0
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleOpenModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleOpenModal]);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order?.table}</strong>
          <button type="button" onClick={handleOpenModal}>
            <img src={closeIcon} alt="Icone de fechar modal" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order?.status === "WAITING" && "🕒"}
              {order?.status === "IN_PRODUCTION" && "👨‍🍳"}
              {order?.status === "DONE" && "✅"}
            </span>
            <strong>
              {order?.status === "WAITING" && "Fila de Espera"}
              {order?.status === "IN_PRODUCTION" && "Em preparação"}
              {order?.status === "DONE" && "Pronto!"}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>
          <div className="order-items">
            {order?.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/${product.imagePath}`}
                  alt={product.name}
                  width="48"
                  height="28.51"
                />
                <span className="quantity">{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>

            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          {order?.status !== "DONE" && (
            <button
              type="button"
              className="primary"
              disabled={isLoading}
              onClick={onChangeOrderStatus}
            >
              <span>
                {order?.status === "WAITING" && "👨‍🍳"}
                {order?.status === "IN_PRODUCTION" && "✅"}
              </span>
              <strong>
                {order?.status === "WAITING" && "Iniciar Produção"}
                {order?.status === "IN_PRODUCTION" && "Concluir Pedido"}
              </strong>
            </button>
          )}
          <button
            type="button"
            className="secondary"
            onClick={
              order?.status === "DONE" ? onDeleteCompletedOrder : onCancelOrder
            }
            disabled={isLoading}
          >
            {order?.status !== "DONE"
              ? "Cancelar pedido"
              : "Remover pedido concluido"}
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
};

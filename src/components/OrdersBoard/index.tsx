import { Order } from "../../types/Order";
import { Board, OrderContainer } from "./styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export const OrdersBoard = ({ icon, title, orders }: OrdersBoardProps) => {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length >= 0 && (
        <OrderContainer>
          {orders.map(({ _id, table, products }) => (
            <button type="button" key={_id}>
              <strong>{table}</strong>
              <span>{products.length} itens</span>
            </button>
          ))}
        </OrderContainer>
      )}
    </Board>
  );
};

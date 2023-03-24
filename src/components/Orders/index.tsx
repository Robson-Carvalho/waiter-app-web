import { Container, Board, OrderContainer } from "./styles";

export const Orders = () => {
  return (
    <Container>
      <Board>
        <header>
          <span>🕒</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>

        <OrderContainer>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
        </OrderContainer>
      </Board>

      <Board>
        <header>
          <span>👨‍🍳</span>
          <strong>Em produção</strong>
          <span>(1)</span>
        </header>

        <OrderContainer>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
        </OrderContainer>
      </Board>

      <Board>
        <header>
          <span>✅</span>
          <strong>Pronto!</strong>
          <span>(1)</span>
        </header>

        <OrderContainer>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
        </OrderContainer>
      </Board>
    </Container>
  );
};

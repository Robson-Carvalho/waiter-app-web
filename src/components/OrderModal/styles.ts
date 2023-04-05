import styled from "styled-components";

export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4.5px);
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  background: ${({ theme }) => theme.colors.gray0};
  width: 400px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      ${({ theme }) => theme.texts.h4}
      color: ${({ theme }) => theme.colors.gray500}
    }

    button {
      border: 0;
      line-height: 0;
      background-color: transparent;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      ${({ theme }) => theme.texts.bodyTextSmall}
      opacity: 0.8;
    }

    div {
      margin-top: 8px;
      display: flex;
      gap: 8px;
      align-items: center;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.gray400};
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;
        strong {
          display: block;
          margin-bottom: 4px;
        }
        span {
          font-size: 14px;
          color: ${({ theme }) => theme.colors.gray400};
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-size: 14px;
      opacity: 0.8;
      font-weight: 500;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    background: ${({ theme }) => theme.colors.gray500};
    border: 0;
    border-radius: 40px;
    color: ${({ theme }) => theme.colors.gray0};
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .secondary {
    color: ${({ theme }) => theme.colors.brandRed};
    padding: 12px 24px;
    font-weight: bold;
    border: 0;
    background: transparent;
    margin-top: 8px;
  }
`;

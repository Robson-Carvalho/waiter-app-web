import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.brandRed};
  display: flex;
  justify-content: center;
  height: 198px;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      ${({ theme }) => theme.texts.h2}
      color: ${({ theme }) => theme.colors.gray0};
    }
    h2 {
      ${({ theme }) => theme.texts.bodyTextMedium}
      color: ${({ theme }) => theme.colors.gray0};
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gradient};

  position: fixed;
  z-index: 3;
`;

export const Content = styled.div`
  max-width: 108rem;
  width: 100%;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font: ${({ theme }) => theme.typography.logo};
  color: ${({ theme }) => theme.colors.white};
`;

export const Options = styled.div`
  width: auto;
  gap: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  font: 600 1.4rem "Poppins", sans-serif;
  color: ${({ theme }) => theme.colors.white};

  svg:nth-child(3) {
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    svg:nth-child(3) {
      display: none;
    }
  }
`;

export const Profile = styled.div`
  font: 500 1.4rem "Poppins", sans-serif;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  b {
    font: 700 1.4rem "Poppins", sans-serif;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Cart = styled.div`
  position: relative;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: none;
  }

  .info {
    width: 1.5rem;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 1rem;
    left: 1.3rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.red};
    font-size: 1rem;
  }
`;

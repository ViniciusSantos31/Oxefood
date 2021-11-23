import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* height: 40rem; */
  display: flex;
  background: #222222;

  max-width: 34rem;
  aspect-ratio: 2/1;

  border-radius: 0.8rem;
`;

export const Content = styled.div`
  max-width: 108rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 3rem;
  justify-content: flex-start;
`;

export const Image = styled.img`
  width: 10rem;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  background: #fff;
`;

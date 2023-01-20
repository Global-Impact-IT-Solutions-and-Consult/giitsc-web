import styled from "styled-components";

export const Wrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Lines = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  .line1 {
    background-color: var(--theme-color);
    width: 3rem;
    height: 2rem;
    margin: 0 auto;
  }

  .line2 {
    background-color: var(--theme-color);
    width: 1.5rem;
    height: 2rem;
    margin: 0 auto;
  }
`;
import styled from "styled-components";

export const Wrapper = styled.div `
  /* background: #141517; */
  background: #fff;
  color: #141517;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
  border-radius: 21px;
  padding: 1rem;
  padding-bottom: 1.5rem;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 22rem;
  /* overflow-y: scroll; */
  width: 20rem;
  cursor: pointer;
  transition: all 100ms ease-in;

  &:hover {
    border-bottom: 5px solid #ef2885;
    box-shadow: 0px 4px 24px rgba(239, 40, 133, 0.15);
  }
`;

export const Top = styled.div `
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40%;
  width: 100%;
`;

export const Bottom = styled.div `
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  height: 60%;
  width: 100%;

  .title {
    font-size: 23px;
    font-weight: 500;
  }

  .description {
    font-size: 17px;
    font-weight: 400;
    color: grey;
    /* background: red; */
    padding: 0.5rem;
  }
`;
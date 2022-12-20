import styled from "styled-components";

export const Wrapper = styled.div `
  background: #fff;
  color: #141517;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
  border-radius: 21px;
  /* padding: 1rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 22rem;
  width: 18rem;
  cursor: pointer;
  transition: all 100ms ease-in;

  /* &:hover {
    border-bottom: 5px solid #ef2885;
    box-shadow: 0px 4px 24px rgba(239, 40, 133, 0.15);
  } */

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    /* width: 35rem; */
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    font-size: 45px;
    height: 25rem;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 21px 21px 0 0;
  }
`;

export const Top = styled.div `
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
`;

export const Bottom = styled.div `
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  /* justify-content: center; */
  padding: 1rem;
  text-align: center;
  height: 50%;
  width: 100%;

  .title {
    font-size: 20px;
    font-weight: 500;
    /* background: red; */
    /* padding: .5rem; */
  }

  .description {
    font-size: 12px;
    font-weight: 400;
    color: grey;
    /* background: red; */
    min-height: 4rem;
    max-height: 4rem;
    display: flex;
    align-items: start;
    justify-content: center;
    /* padding: 0.5rem; */
  }

  .buttonPart {
    /* height: 7rem; */
    /* background: red; */
    /* margin: 0.5rem 0; */

    button {
      padding: 0.5rem 1rem;
      border-radius: 21px;
      border: none;
      cursor: pointer;
      background: #2772b3;
      transition: all 200ms ease-in;
      font-family: system-ui, "Segoe UI", "Open Sans", "Helvetica Neue",
        sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 15px;

      &:hover {
        background: #fa2198;
        color: white;
      }
    }
  }
`;
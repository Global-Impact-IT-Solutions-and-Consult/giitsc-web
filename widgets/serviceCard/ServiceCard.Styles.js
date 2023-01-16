import styled from "styled-components";

export const Wrapper = styled.div `
  background: #fff;
  color: #141517;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
  border-radius: 21px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 1.5rem 0;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.11);
  border-radius: 7px;
  width: 307px;
  height: 210px;
  transition: all 300ms ease-in;
  text-align: left;

  &:hover {
    background: #011729;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.11);
    color: #fff;

    .icon {
      background: #fff;
      border-radius: 20%;
      /* width: 45px;
      height: 45px; */
      /* padding: 0.2rem; */
    }
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    /* width: 35rem; */
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    font-size: 45px;
    height: 25rem;
  }
`;

export const Top = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: start;
  padding: 1rem;

  .icon {
    /* background: yellow; */
    width: 37.33px;
    height: 37.33px;
  }
`;

export const Bottom = styled.div `
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: start;
  padding: 1rem;
  height: 50%;
  width: 100%;

  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: left;
  }

  .description {
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 13px;
  }
`;
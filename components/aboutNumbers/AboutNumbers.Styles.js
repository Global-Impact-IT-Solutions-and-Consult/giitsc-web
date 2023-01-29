import styled from "styled-components";

export const Wrapper = styled.div `
  background: white;
  /* width: 100vw; */
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  display: flex;
  gap: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  // MOBILE
  @media only screen and (max-width: 767px) {
    /* background: red; */
    height: 100%;
  }
`;

export const Content = styled.div `
  /* background: red; */
  height: 80%;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  // MOBILE
  @media only screen and (max-width: 767px) {
    /* background: red; */
    /* height: 80%; */
    width: 80%;
    padding: 0;
    gap: 3rem;
  }
`;

export const Top = styled.div `
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 141%;
  text-align: center;
  color: #1a1110;

  // MOBILE
  @media only screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 1.5rem;
  }
`;

export const Bottom = styled.div `
  display: flex;
  gap: 2rem;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;

  // MOBILE
  @media only screen and (max-width: 767px) {
    /* background: yellow; */
    width: 100%;
    justify-content: space-between;
  }

  .pair {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* width: 16rem; */
    /* background: yellow; */
  }

  .pairTop {
    font-style: normal;
    font-weight: 600;
    font-size: 59.9771px;
    line-height: 73px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #011729;

    // MOBILE
    @media only screen and (max-width: 767px) {
      font-size: 30px;
      line-height: 33px;
    }
  }

  .pairBottom {
    font-style: normal;
    font-weight: 500;
    font-size: 17.9931px;
    line-height: 22px;
    color: #011729;

    // MOBILE
    @media only screen and (max-width: 767px) {
      font-size: 13px;
      line-height: 15px;
      text-align: center;
    }
  }
`;
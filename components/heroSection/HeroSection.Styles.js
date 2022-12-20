import styled from "styled-components";

export const Wrapper = styled.div `
  /* background-color: blue; */
  /* background: url("/images/herobg.jpg"); */
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 60px;

`;

export const Overlay = styled.div `
  background-color: rgba(0, 0, 0, 0.4);
  height: 120%;
  width: 100%;
  margin-top: -60px;
  padding-top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    height: 105%;
    margin-top: -10px;
    padding-top: 0px;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    height: 105%;
    margin-top: -10px;
    padding-top: 0px;
  }
`;

export const Content = styled.div `
  color: white;
  font-size: 35px;
  font-family: system-ui, "Segoe UI", "Open Sans", "Helvetica Neue", sans-serif;
  /* padding-top: 10rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  /* background: green; */

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 100%;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    padding-top: 2rem;
    width: 100%;
  }

  h1 {
    margin-bottom: -1.3rem;

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 50px;
      display: flex;
      flex-direction: column;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      font-size: 28px;
      display: flex;
      flex-direction: column;
    }
  }

  h4 {
    font-weight: 400;
    /* font-family: cursive; */
    margin-bottom: 1.3rem;

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 26px;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      font-size: 17px;
      margin-bottom: 0rem;
    }
  }

  p {
    font-size: 25px;

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 22px;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      font-size: 16px;
    }
  }

  span {
    font-size: 72px;
    color: #2772b3;
    /* background: -webkit-linear-gradient(#ee2583, #2772b3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 300ms ease-in-out; */

    :hover {
      background: -webkit-linear-gradient(#2772b3, #ee2583);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 75px;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      font-size: 45px;
    }
  }

  .pair {
    display: flex;
    justify-content: space-evenly;
    /* background: yellow; */
    width: 70%;
    margin: 0 auto;
    margin-top: 2rem;

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 3rem;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 3rem;
    }
  }
`;
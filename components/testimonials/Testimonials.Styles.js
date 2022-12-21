import styled from "styled-components";

export const Wrapper = styled.div `
  background-position: center;
  background: white;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* padding: 2rem 0; */

  .heading {
    font-size: 50px;
    font-weight: 700;
    color: #2772b3;
    text-align: center;
    /* padding-bottom: -2rem; */

    :hover {
      background: -webkit-linear-gradient(#2772b3, #ee2583);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 45px;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      font-size: 45px;
      padding-top: 4rem;
      padding-bottom: -2rem;
    }
  }
`;

export const Overlay = styled.div `
  background: url("/images/testimonialBG.png");
  /* background-color: rgba(0, 0, 0, 0.6); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;
  display: flex;
  gap: 5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
    background: #fff;
  }
`;

export const Content = styled.div `
  /* background: url("/images/testimonialBG.png"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  /* height: 90%; */
  width: 90%;
  padding: 2rem;
  /* background: yellow; */
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  margin: 1rem;

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 100%;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;
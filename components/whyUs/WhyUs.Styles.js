import styled from "styled-components";

export const Wrapper = styled.div `
  /* background: url("/images/eroWw.jpg"); */
  background: #e8f5ff;
  background-position: center;
  /* background: #fff; */
  /* background: whitesmoke; */
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem 0;

  .heading {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    color: #1a1110;
    border-bottom: 5px solid #1a1110;
    padding-bottom: 0.4rem;
    border-radius: 5px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    transition: all 300ms ease-in;

    :hover {
      /* background: -webkit-linear-gradient(#2772b3, #ee2583);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; */
      border-bottom: 5px dashed #1a1110;
      padding-bottom: 0.2rem;
    }

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 45px;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      font-size: 45px;
    }
  }
`;

export const Content = styled.div `
  width: 80%;
  padding: 2rem;
  /* background: yellow; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
  margin: 1rem;

  // small PC
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    width: 100%;
  }

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

export const Overlay = styled.div `
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  display: flex;
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
  }
`;
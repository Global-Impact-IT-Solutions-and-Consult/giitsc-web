import styled from "styled-components";

export const Wrapper = styled.div `
  /* background: url("/images/eroWw.jpg"); */
  background: #fff;
  /* background: red; */
  min-height: 90vh;
  width: 100%;
  display: flex;
  gap: 4rem;
  flex-direction: column;
  justify-content: center;
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
      gap: 4rem;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      gap: 2rem;
    }
  }

  .line1 {
    background-color: var(--theme-color);
    width: 3rem;
    height: 2rem;
    margin: 0 auto;
  }
`;

export const CardHolder = styled.div `
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  /* background: red; */
  width: 85%;
  /* width: 85vw; */
  /* width: 100%; */
  margin: 0 auto;
  height: 100%;
  /* background: blue; */

  // small PC
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    width: 100%;
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    /* flex-direction: column; */
    /* gap: 4rem; */
    width: 100%;
    /* background: blue; */
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const CardPair = styled.div `
  display: flex;
  gap: 2rem;
  width: 50%;
  align-items: center;

  // TAB
  @media only screen and(min-width: 768px) and(max-width: 991px) {
  }

  // MOBILE
  @media only screen and(max-width: 767px) {
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    /* flex-direction: column; */
    justify-content: center;
    gap: 2rem;
    width: 100%;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
import styled from "styled-components";

export const Wrapper = styled.div `
  /* background: url("/images/eroWw.jpg"); */
  background-color: white;
  min-height: 100vh;
  width: 100%;
  display: flex;
  gap: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  .heading {
    font-size: 50px;
    font-weight: 700;
    color: #2772b3;

    :hover {
      background: -webkit-linear-gradient(#2772b3, #ee2583);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
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
`;

export const CardHolder = styled.div `
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  /* background: red; */
  /* width: 100%; */
  width: 85vw;
  /* width: 100%; */
  margin: 0 auto;
  height: 100%;
  /* background: blue; */

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    flex-direction: column;
    gap: 4rem;
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
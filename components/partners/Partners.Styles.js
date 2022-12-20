import styled from "styled-components";

export const Wrapper = styled.div `
  /* background: url("/images/ero.jpg"); */
  /* background-color: blue; */
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  

  h4 {
    font-size: 23px;
  }
`;

export const Overlay = styled.div `
  /* background-color: rgba(122, 122, 122, 0.3); */
  height: 100%;
  width: 100%;
  /* padding-top: 60px; */
  padding: 2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgba(32, 33, 36, 0.4);
  backdrop-filter: blur(6px);

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding-top: 0px;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    padding-top: 0px;
  }
`;

export const Content = styled.div `
  /* background: url("/images/ero.jpg"); */
  /* background-color: blue; */
  width: 80%;
  height: 8rem;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  /* -webkit-scrollbar: none; */

  &::-webkit-scrollbar {
    width: 12px;
    margin: 0 1rem;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px var(--text-blue);
    border-radius: 10px;
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 100vw;
    margin-top: 0;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100vw;
    padding: 0 3rem;
    /* height: 3rem; */
    gap: 3rem;
    /* margin-left: 2rem; */
  }
`;
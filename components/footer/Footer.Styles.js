import styled from "styled-components";

export const Wrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div `
  /* background-color: rgba(122, 122, 122, 0.3); */
  height: 100%;
  width: 100%;
  padding: 3rem 0;
  /* padding-top: 60px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgba(32, 33, 36, 0.4);
  backdrop-filter: blur(2px);

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
  /* background-color: blue; */
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // TAB
  @media only screen and(min-width: 768px) and (max-width: 991px) {
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const Top = styled.div `
  /* background-color: yellow; */
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  // TAB
  @media only screen and(min-width: 768px) and (max-width: 991px) {
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    padding-top: 1rem;
    flex-direction: column;
    gap: 0;
  }
`;

export const TopLeft = styled.div `
  /* background-color: grey; */
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: start;
  padding: 2rem;
  justify-content: center;
  text-align: left;

  // TAB
  @media only screen and(min-width: 768px) and (max-width: 991px) {
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }

  .logoPart {
    display: flex;
    gap: 0.5rem;
    width: 8rem;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    /* background: red; */
  }

  .logoPart span {
    font-size: 24px;
    font-weight: 600;
    font-family: sans-serif;
    color: #3e89dc;
  }

  h5 {
    font-family: system-ui, "Segoe UI", "Open Sans", "Helvetica Neue",
      sans-serif;
    line-height: 24px;
    font-size: 15px;
    color: whitesmoke;
  }
`;

export const TopRight = styled.div `
  /* background-color: grey; */
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: end;
  justify-content: space-between;
  text-align: center;
  padding-right: 1.5rem;

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    gap: 0.7rem;
    padding-bottom: 2rem;
    padding-right: 0;
    align-items: center;
  }

  .topRightBottom {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: grey;
  }

  .topRightBottom a:hover {
    color: #ff229e;
  }

  h5 {
    font-family: system-ui, "Segoe UI", "Open Sans", "Helvetica Neue",
      sans-serif;
    line-height: 24px;
    font-size: 18px;
    color: grey;
  }
`;

export const Bottom = styled.div `
  /* background-color: pink; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #2693f6;
  padding: 2rem;
`;
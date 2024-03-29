import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--bg-light-blue);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 2rem;

  a {
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;

    width: 117px;
    height: 32px;
    left: 87px;
    top: 822px;

    border: 0.5px solid #011729;
    border-radius: 5px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 134.4%;
    /* or 20px */

    color: #000000;
    text-decoration: none;
    transition: all 300ms linear;

    &:hover {
      background: var(--theme-color);
      color: #fff;
    }
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding-top: 100px;
    /* background-color: yellow; */
  }
`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    /* background-color: yellow; */
  }

  span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;
    color: #011729;

    // MOBILE
    @media only screen and (max-width: 767px) {
      font-size: 30px;
      line-height: 39px;
      text-align: center;
      /* background-color: yellow; */
    }
  }
`;

export const Main = styled.div`
  /* background: red; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  gap: 1.5rem;
  margin-bottom: 3rem;

  // MOBILE
  @media only screen and (max-width: 767px) {
    font-size: 30px;
    line-height: 39px;
    /* background-color: yellow; */
    flex-direction: column;
    padding: 1rem;
    gap: 2rem;
  }
`;

export const Left = styled.div`
  /* background: yellow; */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;

  // MOBILE
  @media only screen and (max-width: 767px) {
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }

  .imageBox {
    width: 630px;
    height: 430px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-left: -1rem;
    overflow: hidden;

    img {
      object-fit: cover;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      width: 360px;
      height: 215px;
      margin: 0 auto;
      margin-left: -1rem;
    }
  }

  .text {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 134.4%;
    color: #011729;
    width: 620px;
    /* background: red; */

    // MOBILE
    @media only screen and (max-width: 767px) {
      width: 100%;
      text-align: center;
    }
  }
`;

export const Right = styled.div`
  /* background: green; */
  width: 100%;
  /* height: 34rem; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-evenly;
  /* margin-top: -1.7rem; */

  // MOBILE
  @media only screen and (max-width: 767px) {
    /* background: red; */
    text-align: center;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .top {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    color: #011729;
  }

  .bottom {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    color: #011729;

    span {
      display: flex;
      gap: 0.5rem;
      font-weight: 500;
      font-size: 15px;
      line-height: 134.4%;
      padding-left: 1rem;
      margin-bottom: 1rem;

      // MOBILE
      @media only screen and (max-width: 767px) {
        line-height: 19px;
      }
    }
  }
`;

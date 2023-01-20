import styled from "styled-components";

export const Wrapper = styled.div `
  background: whitesmoke;
  height: 70vh;
`;

export const Content = styled.div `
  background: #fff;
  height: 100%;
  width: 100%;
  background: url("/icons/subscribe/subscribe.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding-left: 9rem;
`;

export const Left = styled.div `
  width: 507.78px;
  height: 318.1px;
  border-radius: 20px;
  background: #011729;
  box-shadow: 0px 5.87511px 27.6969px rgba(0, 0, 0, 0.25);
  border-radius: 20.1432px;
  padding: 4rem 2rem;
  text-align: left;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: start;
  position: relative;

  .text {
    width: 155px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 40.2864px;
    line-height: 49px;
    text-align: left;
    color: #ffffff;
  }

  .pair {
    display: flex;
    width: 100%;
  }

  input {
    width: 70%;
    padding: 1rem;
    border-radius: 21px 0 0 21px;
    border: none;
    margin: 1rem 0;
    background: rgba(255, 255, 255, 0.23);
  }

  button {
    width: 30%;
    padding: 1rem;
    border-radius: 0 21px 21px 0;
    border: none;
    margin: 1rem 0;
    background: #ffffff;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 20.1432px;
    line-height: 25px;
    text-align: center;
    color: #011729;
    transition: all 300ms linear;

    &:hover {
      background: skyblue;
      /* color: #ffffff; */
    }
  }
`;
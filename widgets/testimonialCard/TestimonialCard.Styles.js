import styled from "styled-components";

export const Wrapper = styled.div `
  /* background: #141517; */
  background: #fff;
  /* background: #404040; */
  /* background: black; */
  color: #141517;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
  border-radius: 21px;
  padding: 1rem;
  padding-bottom: 1.5rem;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 22rem;
  /* overflow-y: scroll; */
  width: 20rem;
  /* cursor: pointer; */
  transition: all 200ms ease-in;

  &:hover {
    border-bottom: 5px solid #ef2885;
    box-shadow: 0px 4px 24px rgba(239, 40, 133, 0.15);
    /* background: black; */
    background: #404040;
    color: white;
  }

  // TAB
  @media (max-width: 768px) {
    margin: 4rem 0;
  }

  .name {
    /* color: grey; */
    font-size: 23px;
    font-weight: 500;

    /* &:hover {
      color: black;
    } */
  }

  .review {
    font-size: 17px;
    font-weight: 400;
    /* color: grey; */
    /* background: red; */
    padding: 0.5rem;

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      width: 100%;
      font-size: 14px;
    }
  }
`;

export const Top = styled.div `
  /* background-color: red; */
  display: flex;
  /* display: relative; */
  width: 8rem;
  height: 8rem;
  margin-top: -8rem;
  border-radius: 50%;
  border: 2px solid var(--accent-color);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  /* .image {
    width: 8rem;
    height: 8rem;
    margin-top: -8rem;
    background: yellow;
    background: url("/images/herobg.jpg"); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: absolute;
    border-radius: 50%;
    border: 2px solid var(--accent-color);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  } */
`;

export const Bottom = styled.div `
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  height: 10rem;
  width: 100%;
`;
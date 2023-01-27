import styled from "styled-components";

export const Wrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  background: #10121a;
  padding: 2rem;

  a {
    text-decoration: none;
    color: inherit;
  }
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
    text-align: center;
  }
`;

export const Top = styled.div `
  /* background-color: yellow; */
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: top;
  padding: 1rem 0;
  /* text-align: left; */
  /* text-align: start; */

  .pair {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    gap: 0.77777rem;
    /* text-align: start; */
    /* background: yellow; */
    width: 40rem;
  }

  .address {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    color: #ffffff;
    /* text-align: center; */
    /* background: red; */
    width: 80%;
    /* margin: 0 auto; */
  }

  .heading {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    color: #ffffff;
    /* text-align: center; */
    /* background: red; */
    width: 80%;
    /* margin: 0 auto; */
    /* margin-left: 2.5rem; */
    /* border-bottom: 1px solid #fff; */
  }

  .bottom {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    width: 80%;
    /* margin: 0 auto; */
    /* text-align: center; */
    color: grey;
    /* background: red; */

    ul {
      /* background: green; */
      list-style: none;
      /* text-align: left; */
      display: flex;
      padding: 0;
      flex-direction: column;
    }

    li {
      /* text-align: center; */
      margin-bottom: 0.5rem;
      color: grey;
      transition: all 300ms ease-in;
    }

    li a {
      /* text-align: center; */
      margin-bottom: 0.5rem;
      color: grey;
      transition: all 300ms ease-in;

      &:hover {
        color: #fff;
        border-bottom: 1px solid white;
      }
    }
  }

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

// export const TopLeft = styled.div `
//   /* background-color: grey; */
//   width: 50%;
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   align-items: start;
//   padding: 2rem;
//   justify-content: center;
//   text-align: left;

//   // TAB
//   @media only screen and(min-width: 768px) and (max-width: 991px) {
//   }

//   // MOBILE
//   @media only screen and (max-width: 767px) {
//     width: 100%;
//     align-items: center;
//     text-align: center;
//   }

//   .logoPart {
//     display: flex;
//     gap: 0.5rem;
//     width: 8rem;
//     align-items: center;
//     justify-content: space-between;
//     text-decoration: none;
//     /* background: red; */
//   }

//   .logoPart span {
//     font-size: 24px;
//     font-weight: 600;
//     font-family: sans-serif;
//     color: #3e89dc;
//   }

//   h5 {
//     font-family: system-ui, "Segoe UI", "Open Sans", "Helvetica Neue",
//       sans-serif;
//     line-height: 24px;
//     font-size: 15px;
//     color: whitesmoke;
//   }
// `;

// export const TopRight = styled.div `
//   /* background-color: grey; */
//   width: 50%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
//   align-items: end;
//   justify-content: space-between;
//   text-align: center;
//   padding-right: 1.5rem;

//   // MOBILE
//   @media only screen and (max-width: 767px) {
//     width: 100%;
//     gap: 0.7rem;
//     padding-bottom: 2rem;
//     padding-right: 0;
//     align-items: center;
//   }

//   .topRightBottom {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     color: grey;
//   }

//   .topRightBottom a:hover {
//     color: #ff229e;
//   }

//   h5 {
//     font-family: system-ui, "Segoe UI", "Open Sans", "Helvetica Neue",
//       sans-serif;
//     line-height: 24px;
//     font-size: 18px;
//     color: grey;
//   }
// `;

export const Bottom = styled.div `
  /* background-color: pink; */
  width: 100%;
  display: flex;
  border-top: 2px solid #fff;
  padding: 2rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
`;
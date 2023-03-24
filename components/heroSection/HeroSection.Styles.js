import styled from "styled-components";

export const HeroWrapper = styled.section`
    height : 100vh;
    width : 100vw;
    position: relative;
`

export const HeroText = styled.h1`
    position : absolute;
    top: 50%;
    left:50%;
    transform : translateX(-50%) translateY(-50%);
    font-family : 'Montserrat';
    font-size: 5em;
    font-weight : 700;
    text-transform : uppercase;
    width : auto;
    line-height : .8em;
    border : 5px solid blue;
    padding : .2em;
    white-space : nowrap;
    color: blue;
`
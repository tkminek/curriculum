import styled, { keyframes } from "styled-components";

const scaleDown = keyframes`
        0% {
        opacity: 0;
        transform: translate (-10px);
        animation-timing-function: ease-out;
        }
        100% {
        transform: translate (0px);
        }
        `

const scaleSide = keyframes`
        0% {
        transform: scale(0, 1);
        animation-timing-function: ease-out;
        }
        100% {
        transform: scale(1, 1);
        }
        `
 export const ScaleDownAnimation = styled.div`
        animation: ${scaleDown} 1s;
        animation-delay: 0s;
        animation-fill-mode: both;
        `
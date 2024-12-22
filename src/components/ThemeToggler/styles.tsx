import styled from "styled-components";

export const TogglerButton = styled.button`
    background-color: transparent;
    padding: 0;
    border: none;
    
    svg {
        width: 20px;
        height: 20px;
        fill: ${({theme}) => theme.fontColor};
        transition: all .3s ease-in-out;
    }

    &:hover svg {
        fill: ${({theme}) => theme.accentPurple};
    }
`
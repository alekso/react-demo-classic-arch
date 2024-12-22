import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif;
        background-color: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.fontColor};
        height: 100%;
        overflow-X: hidden;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    #root {
        min-height: 100vh;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-weight: bold;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    h1 {
        font-size: 4.5rem;

        @media screen and (max-width: 767px) {
		    font-size: 3rem;
	    }
    }

    

    h2 {
        font-size: 3.75rem;

        @media screen and (max-width: 767px) {
            font-size: 2.15rem;
	    }
    }

    h3 {
        font-size: 3rem;

        @media screen and (max-width: 767px) {
            font-size: 1.5rem;
	    }
    }

    h4 {
        font-size: 2.63rem;

        @media screen and (max-width: 767px) {
            font-size: 1.13rem;
	    }
    }

    h5 {
        font-size: 2.25rem;

        @media screen and (max-width: 767px) {
            font-size: 1rem;
	    }
    }

    h6 {
        font-size: 1.5rem;

        @media screen and (max-width: 767px) {
            font-size: .9rem;
	    }
    }
    
    p {
        font-size: 1.25rem;
        margin: 0;

        @media screen and (max-width: 767px) {
            font-size: .875rem;
	    }
    }
    
    input:-internal-autofill-selected {
        background-color: transparent;
    }
`;

export default GlobalStyles;

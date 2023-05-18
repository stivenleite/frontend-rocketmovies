import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.div`
    width: 100%;
    
    grid-area: content;

    padding: 4rem 12.3rem;

    overflow-y: auto;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 3.7rem;

        > h1 {
            font-weight: 400;
        }
    }

    > main {
        overflow-y: auto;
    }
`;

export const NewMovie = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-color: ${({ theme }) => theme.COLORS.PINK};

    border: none;
    border-radius: 0.8rem;

    padding: 1.3rem 3.2rem;
`;
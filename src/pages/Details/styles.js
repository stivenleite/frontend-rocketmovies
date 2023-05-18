import styled from "styled-components";

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

    > .buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > button {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            
            background-color: transparent;
            color: ${({ theme }) => theme.COLORS.PINK};
            border: none;
        }
    }


    > p {
        text-align: justify;
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 1.9rem;

    font-size: 2.4rem;

    margin-block: 2.4rem;
`;

export const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    > div {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        img {
            width: 1.6rem;
            height: 1.6rem;
    
            border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
            border-radius: 50%;
        };

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
        };
    }
`;

export const Tags = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    margin-block: 4rem;
`;
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        overflow-y: auto;
    }
`;

export const Content = styled.div`
    grid-area: content;

    padding: 4rem 12.3rem;

    > a {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        color: ${({ theme }) => theme.COLORS.PINK};

        margin-bottom: 2.4rem;
    }

    > h1 {
        font-size: 3.6rem;

        margin-bottom: 4rem;
    }

    > .inputs {
        display: flex;
        align-items: center;
        gap: 4rem;

        margin-bottom: 4rem;
    }

    > textarea {
        width: 100%;
        height: 27.4rem;

        padding: 1.9rem;
        margin-bottom: 4rem;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};

        border: none;
        border-radius: 1rem;

        resize: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    > h2 {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.GRAY_200};

        margin-bottom: 2.4rem;
    }

    > .tags {
        width: 100%;

        display: flex;
        align-items: center;
        gap: 2.4rem;
        flex-wrap: wrap;

        padding: 1.6rem;
        margin-bottom: 4rem;

        border-radius: 0.8rem;

        background-color: ${({ theme }) => theme.COLORS.BLACK};
    }

    > button {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        color: ${({ theme }) => theme.COLORS.BLACK};
    }
`;
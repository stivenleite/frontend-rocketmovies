import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    border-radius: 1rem;

    > input {
        width: 100%;
        height: 5.6rem;

        padding-inline: 1.2rem;

        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};
        border: none;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    > svg {
        margin-left: 2.4rem;
    }
`;
import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BLACK};

    border: none;
    border-radius: 1rem;
`;
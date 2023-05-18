import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 1rem;

    color: ${({ theme }) => theme.COLORS.PINK};

    > svg:nth-child(-n+ ${({value}) => value} ) {
        fill: ${({ theme }) => theme.COLORS.PINK};
    }
`;
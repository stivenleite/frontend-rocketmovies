import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    
    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_100}` : 'none'};
    border-radius: 1rem;

    background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_800};
    
    padding: 1.6rem;
    > input {
        width: 16rem;

        border: none;
        
        background: transparent;

        color: ${({ theme }) => theme.COLORS.WHITE};

        &::placeholder {
            color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
        }
    }

    > button {
        display: flex;
        align-items: center;
        
        border: none;

        background-color: transparent;

        svg {
            font-size: 2.4rem;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`;
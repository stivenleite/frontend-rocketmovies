import styled from "styled-components";

export const Container = styled.button`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: start;
    
    background: rgba(255, 133, 155, 0.05);
    border: none;
    border-radius: 16px;

    padding: 3.2rem;
    margin-bottom: 2.4rem;

    > h1 {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};

        margin-bottom: 0.8rem;
    }
`;

export const Content = styled.p`
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    margin: 1.5rem 0 3rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const Tags = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`;
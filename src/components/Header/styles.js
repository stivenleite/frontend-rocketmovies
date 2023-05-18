import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    
    width: 100%;
    height: 11.6rem;

    padding-inline: 12.3rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6.4rem;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Brand = styled.div`
    font-size: 1.8rem;
    font-weight:700;

    color: ${({ theme }) => theme.COLORS.PINK};
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;


    > div {
        display: flex;
        flex-direction: column;
        margin-right: 0.9rem;

        strong {
            align-self: end;
            white-space: nowrap;
        }

        button {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            align-self: end;

            background: none;
            border: none;
        }
    }

    img {
        width: 6.4rem;
        height: 6.4rem;

        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
        border-radius: 50%;
    }
`;
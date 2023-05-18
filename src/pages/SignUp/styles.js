import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
    display: flex;
    align-items: stretch;

    height: 100vh;
`;

export const Form = styled.form`
    padding-inline: 13.4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
        font-size: 4.8rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > h2 {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};

        margin-block: 4.8rem;
    }

    > .inputs {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        
        margin-bottom: 2.4rem;
    }

    > a {
        margin: 4.2rem auto 0;

        display: flex;
        align-items: center;
        gap: 0.8rem;

        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;
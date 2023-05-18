import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 14.4rem;

        background: rgba(255, 133, 155, 0.05);

        padding-left: 14.4rem;
        
        display: flex;
        align-items: center;

        a {
            display: flex;
            align-items: center;
            gap: 0.8rem;

            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`;

export const Form = styled.form`
    max-width: 34rem;
    margin: -9.5rem auto 10rem;

    > .inputs {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        margin-top: 6.4rem;

        div:nth-child(2) {
            margin-bottom: 1.6rem;
        }

        div:nth-child(4) {
            margin-bottom: 2.4rem;
        }
    }
`;

export const Avatar = styled.div`
    position: relative;
    width: 18.6rem;
    height: 18.6rem;

    margin-inline: auto; 

    > img {
        width: 18.6rem;
        height: 18.6rem;

        border-radius: 50%;
    };

    > label {
        position: absolute;
        bottom: 0.7rem;
        right: 0.7rem;

        width: 4.8rem;
        height: 4.8rem;

        background-color: ${({ theme }) => theme.COLORS.PINK};

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        input {
            display: none;
        }

        svg {
            font-size: 2rem;
            color: ${({ theme }) => theme.COLORS.BLACK};
        }
    };
`;
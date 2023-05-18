import { Container } from "./styles";
import { FiStar } from "react-icons/fi";

export function RatingStars({value, size, ...rest}){
    return(
        <Container value={value} {...rest}>
            <FiStar size={size}/>
            <FiStar size={size}/>
            <FiStar size={size}/>
            <FiStar size={size}/>
            <FiStar size={size}/>
        </Container>
    )
};
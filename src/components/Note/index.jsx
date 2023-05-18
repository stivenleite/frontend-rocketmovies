import { Container, Content, Tags } from "./styles";
import {RatingStars} from "../RatingStars"
import {Tag} from "../Tag"

export function Note({ data, ...rest}){
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>

            <RatingStars value={data.rating} size={15}/>

            <Content>
                {data.description}
            </Content>

            {
                data.tags &&
                <Tags>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </Tags>
            }

        </Container>
    )
}
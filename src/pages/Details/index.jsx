import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { api } from '../../services/api'
import { useAuth } from "../../hooks/auth";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container, Content, Title, AuthorInfo, Tags } from './styles'
import { Header } from '../../components/Header'
import { RatingStars } from '../../components/RatingStars'
import { Tag } from '../../components/Tag'
import { FiArrowLeft, FiClock } from 'react-icons/fi'

export function Details(){
    const navigate = useNavigate();

    const { user } = useAuth();

    const [data, setData] = useState(null);

    const params = useParams();
    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    
    function handleBack(){
        navigate(-1);
    }

    async function handleDelete(){
        const confirm = window.confirm("Tem certeza que deseja excluir este filme?");

        if(confirm){
            await api.delete(`/notes/${params.id}`);
            navigate(-1);
        }
    }

    useEffect(() => {
        async function fetchMovie(){
            const response = await api.get(`/notes/${params.id}`);
            setData(response.data);
        }

        fetchMovie();
    }, []);

    return(
        <Container>
            <Header />

            {
                data && 
                <Content>
                    <div className="buttons">
                        <button type="button" onClick={handleBack}>
                            <FiArrowLeft />
                            Voltar
                        </button>
                        <button type="button" onClick={handleDelete}>
                            Excluir Filme
                        </button>
                    </div>

                    <Title>
                        <h1>{data.title}</h1>
                        <RatingStars value={data.rating} size={30}/>
                    </Title>

                    <AuthorInfo>
                        <div>
                            <img src={avatarUrl} alt={user.name} />
                            <span>Por {user.name}</span>
                        </div>
                        <div>
                            <FiClock />
                            <span>{data.created_at}</span>
                        </div>
                    </AuthorInfo>
                    
                    {
                        data.tags &&
                        <Tags>
                            {
                                data.tags.map((tag, index) => (
                                    <Tag
                                        key={index} 
                                        title={tag.name} 
                                    />
                                ))
                            }
                        </Tags>
                    }

                    <p>{data.description}</p>
                </Content>

            }
        </Container>
    )
};
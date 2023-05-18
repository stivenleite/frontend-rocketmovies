import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Content, NewMovie } from "./styles";
import { Header } from "../../components/Header"
import { Note } from "../../components/Note"
import { FiPlus } from "react-icons/fi";

export function Home(){
    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [tags, setTags] = useState([]);

    function handleSearch (searchData) {
        setSearch(searchData);
    }

    function handleDetails (id){
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchMovies () {
            const response = await api.get(`/notes?title=${search}&tags=${tags}`);
            setMovies(response.data);
        }
        
        fetchMovies();
    }, [search]);

    return(
        <Container>
            <Header searchFilter={handleSearch}/>

            <Content>
                <header>
                    <h1>Meus filmes</h1>
                    <NewMovie to='/newmovie'>
                        <FiPlus/>
                        Adicionar filme
                    </NewMovie>
                </header>
            
                <main>
                {
                    movies && movies.map(movie => (
                        <Note 
                            key={movie.id} 
                            data={{
                                title: movie.title,
                                rating: movie.rating,
                                description: movie.description,
                                tags: movie.tags.map((tag, index) => (
                                    {id: index, name: tag.name}
                                ))
                            }} 
                            onClick={() => handleDetails(movie.id)}
                            />
                    ))
                }
                </main>
            </Content>

        </Container>
    )
};
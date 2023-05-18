import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteTag } from "../../components/NoteTag";
import { Button } from "../../components/Button";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';


export function NewMovie(){
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddTag () {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag (deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleAddNote () {
        if(!title){
            return alert("Digite o título do filme.")
        }

        if(!Number.isInteger(Number(rating)) || Number(rating) < 0 || Number(rating) > 5){
            return alert("Digite uma nota para o filme, sendo um número inteiro de 0 a 5.")
        }

        if(newTag){
            return alert("Existem tags não adicionadas. Por favor, clique no botão de adicionar ou deixe o campo em branco.")
        }

        await api.post("/notes", {
            title,
            description,
            rating: parseInt(rating),
            tags
        })

        alert("Filme cadastrado com sucesso!")
        navigate(-1)
    }

    return(
        <Container>
            <Header />

            <main>
                <Content>
                    <Link to='/'>
                        <FiArrowLeft/>
                        Voltar
                    </Link>

                    <h1>Novo filme</h1>

                    <div className="inputs">
                        <Input 
                            placeholder="Título"
                            type="text"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input 
                            placeholder="Sua nota (de 0 a 5)"
                            type="number"
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>

                    <textarea 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <h2>Marcadores</h2>

                    <div className="tags">
                        {
                            tags.map((tag, index) => (
                                <NoteTag
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => {handleRemoveTag(tag)}} 
                                />
                            ))
                        }
                        <NoteTag 
                            isNew 
                            placeholder="Novo marcador"
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag}
                        />
                    </div>

                    <Button title="Salvar alterações" onClick={handleAddNote} />
                    
                </Content>
            </main>
        </Container>
    )
}
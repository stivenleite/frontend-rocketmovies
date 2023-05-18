import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Input } from '../Input'
import { FiSearch } from 'react-icons/fi'
import { Container } from './styles'
import { Brand } from './styles'
import { Profile } from './styles'
import { Link } from 'react-router-dom';


export function Header({searchFilter}){
    const navigate = useNavigate();

    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function handleSignOut(){
        navigate("/");
        signOut();
    }

    return(
        <Container>
            <Brand>
                <h1>RocketMovies</h1>
            </Brand>
            
            <Input 
                placeholder='Pesquisar pelo título' 
                icon={FiSearch}
                onChange={e => searchFilter(e.target.value)}
            />

            <Profile>
                <div>
                    <strong>{user.name}</strong>
                    <button onClick={handleSignOut}>sair</button>
                </div>
                <Link to='/profile'>
                    <img src={avatarUrl} alt={user.name} />
                </Link>
            </Profile>
        </Container>
    )
}

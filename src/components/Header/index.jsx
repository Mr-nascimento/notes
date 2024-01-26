import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";


export function Header() {

    return(
        <Container>
            <Profile>
                <img src="https://github.com/Mr-nascimento.png" alt="Profile" />
                <div>
                    <span>Bem Vindo</span>
                    <strong>Igor Nascimento</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine /> 
            </Logout>
        </Container>
    )
    
}
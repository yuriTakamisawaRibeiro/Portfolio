import React from 'react';
import { Container, Navigation, Logo, Wrapper, Socials } from "./style";
import Linkedin from "../../assets/lkdLogo.png";
import Instagram from "../../assets/instaLogo.png";

export function Header() {
    return (
        <Container>
            <Wrapper>
                    <Logo>
                        <h1><a href="/"> Yuri Takamisawa </a></h1>
                    </Logo>
                    <Navigation>
                        <ul>
                            <li><a href="/">Projetos</a></li>
                            <li><a href="/">Sobre</a></li>

                        </ul>
                    </Navigation>
                    <Socials>
                        <ul>
                            <li><a href="/"><img src={Linkedin} alt="Linkedin" /></a></li>
                            <li><a href="/"><img src={Instagram} alt="Instagram" /></a></li>
                        </ul>
                    </Socials>
            </Wrapper>
        </Container>

    )
}
import React from 'react';
import { Container } from "./style";

export function Header() {
    return (
        <Container>
            <header>
                <nav>
                    <div>
                        <h1>Yuri Takamisawa </h1>
                    </div>
                    <ul>
                        <li><a href="/">Projetos</a></li>
                        <li><a href="/">Sobre</a></li>
                        
                    </ul>
                </nav>
            </header>
        </Container>
        
    )
}
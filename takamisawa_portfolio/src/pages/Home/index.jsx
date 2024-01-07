import React from 'react';
import { Header } from "../../components/Header";
import { Container, Welcome } from './styles';
export function Home() {
    return (
        <Container>
            <Header />
            <Welcome>
                <h1>Seja bem vindo</h1>
            </Welcome>

        </Container>

    );
}
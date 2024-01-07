import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    overflow-x: hidden;
    overflow-y: auto;
    color: #121212;
    
    & > div {
        grid-column: 1 / 2; 
        background-color: #F5F5F5;
    }
`;

export const Wrapper = styled.div`
    height: auto;
    padding-top: 65px;
    padding-left: 35px;
    padding-bottom:25px;
    display: grid;
    grid-template-rows: auto 1fr auto; // divide o Wrapper em três linhas: topo, meio e fundo
`;



export const Logo  = styled.div`
h1 {
        text-align: left; 
        padding-bottom:25px;
    }
    
    a {
        
        text-decoration: none;
        color: inherit; 
    }

`;

export const Navigation = styled.nav`
    ul {
        list-style: none;
        text-align: left;
        li {
            margin-bottom:13px;
            
            a {
                color: inherit; 
                text-decoration: none; 
                transition: color 0.3s ease; 
                letter-spacing: .12px; 
                line-height: 1.25em; 
                font-size: 20px;
                &:hover {
                    color: rgba(0,0,0,.4); 
                }
            }
        }
    }
`;

export const Socials = styled.nav`
align-self: end;
ul {
        list-style: none; 
        display:flex;
        gap:8px;
        li {
            a {
                img {
                    width: 35px; 
                    height: 35px; 
                    transition: opacity 0.3s ease;
                    &:hover {
                        opacity: 0.6;
                    }
                }
            }
        }
    }
`;
import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  color: ${({ theme }) => theme.textColor};
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.titleColor};
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Highlight = styled.span`
  font-weight: bold;
`;

const DeleteAccount: React.FC = () => {
    return (
        <>
            <Container>
                <Title>Eliminazione account – Animio</Title>
                <Description>
                    Puoi richiedere la cancellazione del tuo account e di tutti i dati associati inviando una email a{' '}
                    <Highlight>pablo.munoz05@hotmail.com</Highlight>. Indica il tuo username o email per facilitare l’eliminazione.
                </Description>
                <Description>
                    I dati che verranno eliminati includono:
                </Description>
                <ul>
                    <li>Profilo animali (nome, specie, età, note)</li>
                    <li>Cronologia visite veterinarie</li>
                    <li>Email / login</li>
                </ul>
                <Description>
                    I dati saranno eliminati entro 30 giorni dalla richiesta. Se vuoi, puoi contattarci anche per ulteriori informazioni sul trattamento dei tuoi dati.
                </Description>
            </Container>
        </>
    );
};

export default DeleteAccount;
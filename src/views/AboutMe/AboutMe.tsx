import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import { Title ,Separator, Wrapper } from '../../styles/StylesComponents';

/*const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`
const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: ${({theme}) => theme.titleColor}
`

const Separator = styled.span`
  width: 100%;
  height: 1px;
  border-radius: 10px;
  display: block;
  margin-bottom: 3rem;
  background-color: ${({theme}) => theme.primaryColor}
`*/

const Content = styled.div`
  display: grid;
  place-items: center;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  @media screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }

`
const AboutContent = styled.div`
  //padding: 1rem;
`
const InfoContent = styled.div`
  //padding: 1rem;
  width: 100%;
`

const Description = styled.p`
  text-align: justify;
`

const List = styled.ul`

`

const Item = styled.li`
  margin-bottom: 1rem;
  display: flex;
`

const Label = styled.span`
  font-weight: 600;
  color: ${({theme}) => theme.titleColor};
  width: 130px;
`

const Text = styled.span`
  width: calc(100% - 130px);
`

const AboutMe: React.FC = () => {
    const {t} = useTranslation()
    return (
        <Wrapper  id="aboutMe">
            <Title>
                {t('aboutMe.title')}
            </Title>
            <Separator/>
            <Content>
                <InfoContent>
                    <List>
                        <Item>
                            <Label>Nome: </Label>
                            <Text>Pablo Munoz</Text>
                        </Item>
                        <Item>
                            <Label>Nato il: </Label>
                            <Text>9 novembre, 1989</Text>
                        </Item>
                        <Item>
                            <Label>Residenza: </Label>
                            <Text>Italia</Text>
                        </Item>
                        <Item>
                            <Label>Email: </Label>
                            <Text>pavlin_05@hotmail.com</Text>
                        </Item>
                    </List>
                </InfoContent>
                <AboutContent>
                    <Description>
                        {t('aboutMe.description')}
                    </Description>
                </AboutContent>
            </Content>
        </Wrapper>
    )
};

export default AboutMe;


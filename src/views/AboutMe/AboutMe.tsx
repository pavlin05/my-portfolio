import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Separator, Title, Wrapper} from '../../styles/StylesComponents';

const Content = styled.div`
  display: grid;
  place-items: center;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  @media screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }

`

const InfoContent = styled.div`
  width: 100%;
`

const Description = styled.p`
  text-align: justify;
`

const Item = styled.div`
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

    const information = [
        {
            label: t('aboutMe.name'),
            text: 'Pablo Munoz'
        },
        {
            label: t('aboutMe.bornOn'),
            text: t('aboutMe.dateOfBirth'),
        },
        {
            label: t('aboutMe.residence'),
            text: t('aboutMe.italy'),
        },
        {
            label: t('aboutMe.email'),
            text: 'pavlin_05@hotmail.com'
        }
    ]
    return (
        <Wrapper id="aboutMe">
            <Title>
                {t('aboutMe.title')}
            </Title>
            <Separator/>
            <Content>
                <InfoContent>
                    {information.map((info, index) =>
                        <Item key={index}>
                            <Label>{info.label}: </Label>
                            <Text>{info.text}</Text>
                        </Item>
                    )}
                </InfoContent>
                <Description>
                    {t('aboutMe.description')}
                </Description>
            </Content>
        </Wrapper>
    )
};

export default AboutMe;


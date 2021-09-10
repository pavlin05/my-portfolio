import React, {useEffect, useRef} from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import { init } from 'ityped'

const Wrapper = styled.div`
  height: calc(100vh - 70px);
  display: grid;
  place-items: center;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  padding: 1rem;
  @media screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
  }
`

const Title = styled.h1`
  color: ${({theme}) => theme.titleColor}
`
const SubTitle = styled.h3`
  margin-bottom: 1rem;
  span{
    color: ${({theme}) => theme.primaryColor};
  }
  .ityped-cursor {
    opacity: 1;
    animation: blink 0.3s infinite;
    animation-direction: alternate;
  }
  @keyframes blink {
    50%{
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`
const Description = styled.p`

`
const StylesImage = styled.div`
  display: block;
  border: 1rem solid ${({theme}) => theme.primaryColor};
  border-radius: 100%;
  width: 350px;
  height: 350px;
  margin: 1rem auto;
  overflow: hidden;
  
  @media screen and (min-width: 960px) {
    width: 400px;
    height: 400px;
  }
  img{
    width: 100%;
    height: 100%;
  }
`

const Home: React.FC = () => {
    const {t} = useTranslation()
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!textRef.current) return;
        init(textRef.current, {
            startDelay: 1500,
            backSpeed: 70,
            showCursor: true,
            strings: [t('home.frontend'), t('home.backend')],
        });
    },[t])

    return (
        <Wrapper id="home">
            <div>
                <Title>
                    {t('home.title')}
                </Title>
                <SubTitle>
                    &#60;&nbsp;
                    <span ref={textRef}/>
                    &#47;&#62;
                </SubTitle>
                <Description>
                    {t('home.description')}
                </Description>
            </div>
            <div>
                <StylesImage>
                    <img
                        src={'https://static01.nyt.com/images/2021/08/04/arts/04EVANGELION-DIRECTOR-Evangelion/04EVANGELION-DIRECTOR-Evangelion-mobileMasterAt3x.jpg'}
                        alt={'profile'}/>
                </StylesImage>
            </div>
        </Wrapper>
    );
};

export default Home;

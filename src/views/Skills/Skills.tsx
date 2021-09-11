import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {
    SiCss3,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiNodeDotJs,
    SiReact,
    SiRedux,
    SiStyledComponents,
    SiTypescript
} from "react-icons/si";
import {Separator, Title, Wrapper} from '../../styles/StylesComponents';

const Content = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  gap: 2rem 1rem;
  grid-template-columns: 1fr 1fr;
  
  @media screen and (min-width: 960px) {
    gap: 6rem 4rem;
    grid-template-columns: 1fr 1fr 1fr ;
  }
`

const ContentIcon = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;
  font-weight: bold;

  svg {
    align-self: center;
    width: 4rem;
    height: 4rem;
  }
`

const Skills: React.FC = () => {
    const {t} = useTranslation()
    return (
        <Wrapper id="skills">
            <Title>
                {t('skills.title')}
            </Title>
            <Separator/>
            <Content>
                <StyledIcon label='Html' icon={<SiHtml5 fill='#E34F26'/>}/>
                <StyledIcon label='Css' icon={<SiCss3 fill='#1572B6'/>}/>
                <StyledIcon label='JavaScript' icon={<SiJavascript fill='#F7DF1E'/>}/>
                <StyledIcon label='TypeScript' icon={<SiTypescript fill='#3178C6'/>}/>
                <StyledIcon label='React' icon={<SiReact fill='#61DAFB'/>}/>
                <StyledIcon label='Redux' icon={<SiRedux fill='#764ABC'/>}/>
                <StyledIcon label='NodeJs' icon={<SiNodeDotJs fill='#339933'/>}/>
                <StyledIcon label='Styled Components' icon={<SiStyledComponents fill='#DB7093'/>}/>
                <StyledIcon label='Git' icon={<SiGit fill='#F14E32'/>}/>
            </Content>
        </Wrapper>
    );
};

const StyledIcon = ({label, icon}: { label: string, icon: JSX.Element }) =>
    <ContentIcon>
        {icon}
        {label}
    </ContentIcon>


export default Skills;

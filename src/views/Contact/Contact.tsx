import React from 'react';
import styled from "styled-components";
import {SiFacebook, SiInstagram, SiLinkedin, SiMinutemailer} from "react-icons/si";
import {useTranslation} from "react-i18next";
import {Separator, Title, Wrapper} from "../../styles/StylesComponents";

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  place-items: center;
  
  @media screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const LinkCard = styled.a`
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  height: 200px;
  background: ${({theme}) => theme.navBg};
  transition: all ${({theme}) => theme.transitionTime} ease;
  color: inherit;
  text-decoration: inherit;
  
  @media screen and (min-width: 960px) {
    &:hover {
      color: ${({theme}) => theme.primaryColor};
      transform: scale(1.1);
    }
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

const contacts = [
    {
        label: 'Linkedin',
        url: 'https://www.linkedin.com/in/pablo-munoz-001975144/',
        icon: <SiLinkedin/>
    },
    {
        label: 'Instagram',
        url: 'https://www.instagram.com/pavlin05/',
        icon: <SiInstagram/>
    },
    {
        label: 'Facebook',
        url: 'https://www.facebook.com/pablo.munoz.89',
        icon: <SiFacebook/>
    },
    {
        label: 'E-mail',
        url: 'mailto:pablo.munoz05@hotmail.com',
        icon: <SiMinutemailer/>
    }
]

const Contact: React.FC = () => {
    const {t} = useTranslation()
    return (
        <Wrapper id="contact">
            <Title>
                {t('contact.title')}
            </Title>
            <Separator/>
            <Content>
                {contacts.map((contact, index) =>
                    <LinkCard href={contact.url} target='_blank' key={index}>
                        <ContentIcon>
                            {contact.icon}
                            {contact.label}
                        </ContentIcon>
                    </LinkCard>
                )}
            </Content>
        </Wrapper>
    );
};

export default Contact;

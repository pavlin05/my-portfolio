import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  color: ${({ theme }) => theme.textColor};
`;

const Header = styled.header`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.titleColor};
`;

const Subtitle = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.subTextColor};
`;

const Nav = styled.nav`
  margin-bottom: 2.5rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 1rem;
  background: ${({ theme }) => theme.cardBg};
`;

const NavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
  font-size: 0.9rem;

  a {
    color: ${({ theme }) => theme.linkColor};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Section = styled.section`
  margin-bottom: 2.5rem;

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.titleColor};
  }

  p,
  ul {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const Footer = styled.footer`
  margin-top: 3rem;
  padding: 1rem;
  font-size: 0.85rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 1rem;
  background: ${({ theme }) => theme.footerBg};
  color: ${({ theme }) => theme.subTextColor};
`;

const PrivacyPolicy: React.FC = () => {
    const { t } = useTranslation();
    const lastUpdated = t("animio.privacy.lastUpdatedDate");

    return (
        <Container>
            <Header>
                <Title>{t("animio.privacy.title")}</Title>
                <Subtitle>{t("animio.privacy.lastUpdated")}: {lastUpdated}</Subtitle>
            </Header>

            <Nav>
                <p style={{ fontSize: "0.9rem", fontWeight: 500, marginBottom: "0.5rem" }}>
                    {t("animio.privacy.index")}
                </p>
                <NavList>
                    <li><a href="#intro">{t("animio.privacy.sections.intro")}</a></li>
                    <li><a href="#data">{t("animio.privacy.sections.data")}</a></li>
                    <li><a href="#purpose">{t("animio.privacy.sections.purpose")}</a></li>
                    <li><a href="#legal">{t("animio.privacy.sections.legal")}</a></li>
                    <li><a href="#sharing">{t("animio.privacy.sections.sharing")}</a></li>
                    <li><a href="#retention">{t("animio.privacy.sections.retention")}</a></li>
                    <li><a href="#security">{t("animio.privacy.sections.security")}</a></li>
                    <li><a href="#rights">{t("animio.privacy.sections.rights")}</a></li>
                    <li><a href="#minors">{t("animio.privacy.sections.minors")}</a></li>
                    <li><a href="#thirdparties">{t("animio.privacy.sections.thirdparties")}</a></li>
                    <li><a href="#cookies">{t("animio.privacy.sections.cookies")}</a></li>
                    <li><a href="#contact">{t("animio.privacy.sections.contact")}</a></li>
                    <li><a href="#changes">{t("animio.privacy.sections.changes")}</a></li>
                </NavList>
            </Nav>

            {/** Sections */}
            <Section id="intro">
                <p>{t("animio.privacy.content.intro")}</p>
            </Section>
            <Section id="data">
                <h2>{t("animio.privacy.sections.data")}</h2>
                <p>{t("animio.privacy.content.data")}</p>
            </Section>
            <Section id="purpose">
                <h2>{t("animio.privacy.sections.purpose")}</h2>
                <p>{t("animio.privacy.content.purpose")}</p>
            </Section>
            <Section id="legal">
                <h2>{t("animio.privacy.sections.legal")}</h2>
                <p>{t("animio.privacy.content.legal")}</p>
            </Section>
            <Section id="sharing">
                <h2>{t("animio.privacy.sections.sharing")}</h2>
                <p>{t("animio.privacy.content.sharing")}</p>
            </Section>
            <Section id="retention">
                <h2>{t("animio.privacy.sections.retention")}</h2>
                <p>{t("animio.privacy.content.retention")}</p>
            </Section>
            <Section id="security">
                <h2>{t("animio.privacy.sections.security")}</h2>
                <p>{t("animio.privacy.content.security")}</p>
            </Section>
            <Section id="rights">
                <h2>{t("animio.privacy.sections.rights")}</h2>
                <p>{t("animio.privacy.content.rights")}</p>
            </Section>
            <Section id="minors">
                <h2>{t("animio.privacy.sections.minors")}</h2>
                <p>{t("animio.privacy.content.minors")}</p>
            </Section>
            <Section id="thirdparties">
                <h2>{t("animio.privacy.sections.thirdparties")}</h2>
                <p>{t("animio.privacy.content.thirdparties")}</p>
            </Section>
            <Section id="cookies">
                <h2>{t("animio.privacy.sections.cookies")}</h2>
                <p>{t("animio.privacy.content.cookies")}</p>
            </Section>
            <Section id="contact">
                <h2>{t("animio.privacy.sections.contact")}</h2>
                <p>{t("animio.privacy.content.contact")}</p>
            </Section>
            <Section id="changes">
                <h2>{t("animio.privacy.sections.changes")}</h2>
                <p>{t("animio.privacy.content.changes")}</p>
            </Section>

            <Footer>
                <p>{t("animio.privacy.disclaimer")}</p>
            </Footer>
        </Container>
    );
};

export default PrivacyPolicy
;
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 2rem;
  margin-bottom: 2rem;
  @media screen and (min-width: 960px) {
    height: 100vh;
  }
`
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: ${({theme}) => theme.titleColor}
`

export const Separator = styled.span`
  width: 100%;
  height: 1px;
  border-radius: 10px;
  display: block;
  margin-bottom: 3rem;
  background-color: ${({theme}) => theme.primaryColor};
  @media screen and (min-width: 960px) {
    margin-bottom: 6rem;
  }
  
`
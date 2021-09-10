import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button<{ primary?: boolean, big: boolean, fontBig: boolean }>`
  color: white;
  border-radius: 4px;
  background: ${({primary}) => primary ? '#4b59f7' : '#0467fb'};
  white-space: nowrap;
  padding: ${({big}) => big ? '12px 64px' : '10px 20px'};
  font-size: ${({fontBig}) => fontBig ? '20px' : '16px'};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: white;
    background: ${({primary}) => primary ? '#0467fb' : '#4b59f7'};
  }

  width: 100%;
  @media screen and (min-width: 960px) {
    width: auto;
  }
`;

interface Props {
    primary?: boolean
    big?: boolean
    fontBig?: boolean
    text: string
}

const Button: React.FC<Props> = ({primary = false, big = false, fontBig = false, text}) => {
    return (
        <StyledButton primary={primary} big={big} fontBig={big} >
            {text}
        </StyledButton>
    );
};

export default Button;

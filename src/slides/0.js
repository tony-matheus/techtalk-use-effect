import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { TextBackground } from '../components/TextBackground';
import { Author } from '../components/Author';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 30px;
  & > h1 {
    margin-bottom: 0;
  }

  & > span {
    margin-bottom: 30px;
  }
`;

export const Logo = styled.img`
  width: 300px;
  margin-bottom: 4rem;
`;

const Slide0 = () => {
  return (
    <Wrapper>
      <div>
        <Header>Controle e criação de efeitos com</Header>
        <TextBackground>USE EFFECT</TextBackground>
        <Author />
      </div>
    </Wrapper>
  );
};

export default Slide0;

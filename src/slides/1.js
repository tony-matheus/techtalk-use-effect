import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import structure from '../assets/useEffectStructure.png';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
import { Button as CustomButton, message } from 'antd';

const code = `
const App = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // message.success('Renderizando denovo')
  })

  return (
    <Container>
      <Header>Estrutura do useEffect</Header>
      <ButtonWrapper>
        <Button onClick={()=> setVisible(!visible)}>
          {visible ? 'Esconder estrutura' : 'Aparecer estrutura'}
        </Button>
      </ButtonWrapper>
      {visible && <img src={structure} />}
    </Container>
  )
}

render(
  <App/>
);`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.h1`
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
`;

const Text = styled.h2`
  ${({ isVisible }) => !isVisible && 'display: none;'}
  font-size: 2.5rem;
  color: #448aff;
  margin: 30px;
  text-align: ${(props) => props.align};

  &:hover {
    color: #2962ff;
  }
`;

const ButtonWrapper = styled.div`
  margin: 10px auto;
  height: 60px;
`;

const Button = styled(CustomButton)`
  background-color: #282a36;
  color: white;
`;

const Slide1 = () => {
  return (
    <div className='slide slide-row slide-1'>
      <LiveProvider
        code={code}
        scope={{
          styled,
          useState,
          useEffect,
          Container,
          Header,
          Text,
          Button,
          ButtonWrapper,
          structure,
          message,
        }}
        noInline
      >
        <LivePreview className='code-preview' />
        <div className='code-editor-container'>
          <LiveEditor className='code-editor' />
          <LiveError className='code-editor' />
        </div>
      </LiveProvider>
    </div>
  );
};

export default Slide1;

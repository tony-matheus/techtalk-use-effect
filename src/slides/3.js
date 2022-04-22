import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
import { Button, Input, message } from 'antd';
const code = `
const Component = () => {
  const [text, setText] = useState('Efeito')

  useEffect(() => {
    // message.warning('executando efeito');
  }, [])

  return (
    <Container>
      <ButtonWrapper>
        <Input value={text} onChange={(e) => setText(e.target.value)}/>
      </ButtonWrapper>
      <Text align="center">
        {text}
      </Text>
    </Container>
  )
}

const App = () => {
  const [mounted, setMounted] = useState(true);

  const toggle = () => setMounted(!mounted);

  return (
    <Container>
      <ButtonWrapper>
        <Button onClick={toggle}>Show/Hide Component</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        {mounted && <Component/>}
      </ButtonWrapper>
    </Container>
  );
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
`;

const Text = styled.h2`
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
const Slide3 = () => {
  const scope = {
    styled,
    message,
    useState,
    useEffect,
    Input,
    Container,
    Header,
    Text,
    Button,
    ButtonWrapper,
  };
  return (
    <div className='slide slide-row slide-1'>
      <LiveProvider code={code} scope={scope} noInline>
        <LivePreview className='code-preview' />
        <div className='code-editor-container'>
          <LiveEditor className='code-editor' />
        </div>
      </LiveProvider>
    </div>
  );
};

export default Slide3;

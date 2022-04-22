import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
import { Button, Input, message } from 'antd';

const code = `
function Reddit() {
  const [text, setText] = useState('Efeito')
  // const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // setIsLoading(true)
      const res = await fetch(
        "https://www.reddit.com/r/reactjs.json"
      );

      // setIsLoading(false)
      const json = await res.json();

      setPosts(json.data.children.map(c => c.data));
    }

    fetchData();
  }); // <-- we didn't pass a value. what do you think will happen?

  return (
    <>
      <ButtonWrapper>
        <Input value={text} onChange={(e) => setText(e.target.value)}/>
      </ButtonWrapper>
      {/* {isLoading && 'LOADING…'} */}
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

render(
  <Reddit/>
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
  width: 200px;
  height: 60px;
`;
const Slide2 = () => {
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

export default Slide2;

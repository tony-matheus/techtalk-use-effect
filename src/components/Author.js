import styled from 'styled-components';
import Tony from '../assets/Tony.jpg';
const Wrapper = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
`;

const TextWrapper = styled.div`
  margin-left: 1rem;
`;

const Title = styled.p`
  font-size: 2rem;
  margin-bottom: 0;
  line-height: 2rem;
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
`;

export const Author = () => {
  return (
    <Wrapper>
      <Img src={Tony} />
      <TextWrapper>
        <Title>Tony Lima</Title>
        <SubTitle>@tony.mbl</SubTitle>
      </TextWrapper>
    </Wrapper>
  );
};

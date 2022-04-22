import styled from 'styled-components';
import runrunit from './runrunit.png';

export const TextBackground = styled.span`
  background: #8e2de2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4a00e0,
    #8e2de2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4a00e0,
    #8e2de2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  // background-image: url(${({ imgBackground }) => imgBackground || runrunit});
  background-size: cover;
  background-position: center;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: 'Arial Black';
  font-size: 15rem;
  line-height: 10rem;
`;

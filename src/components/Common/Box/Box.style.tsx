import styled from 'styled-components';

export const BoxContainer = styled.div`
  width: 800px;
  height: 400px;
  border-radius: 10px;
  margin-top: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: ease-in-out 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
  }
`;

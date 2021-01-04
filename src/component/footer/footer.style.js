import styled from 'styled-components/macro';

export const Container = styled.div`
display: flex;
padding: 70px 50px;
margin: auto;
max-width: 1000px;
flex-direction: column;

@media (max-width: 1000px) {
  padding: 70px 50px;
}
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0%;
`;
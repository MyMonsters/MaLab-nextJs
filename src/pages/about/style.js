import styled from 'styled-components';
export const AboutWrapper = styled.div`
  margin: 5%;
  p {
    font-size: x-large;
    line-height: 1.8;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #6c757d;
  }
  margin-top: 4rem;
  .aboutImg {
  }
`;

export const AboutLeftWrapper = styled.div`
  width: 50%;
  padding: 0 6rem;
`;
export const AboutRightWrapper = styled.div`
  @media (min-width: 640px) {
    font-size: 0.6rem;
    line-height: 1.3rem;
  }
  @media (min-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.6rem;
  }
  @media (min-width: 960px) {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }
  @media (min-width: 1100px) {
    font-size: 24px;
    line-height: 35px;
  }
  font-size: 1.2rem;
  line-height: 2.2rem;

  width: 50%;
  /* padding: 1rem; */
  white-space: pre-wrap;
`;

export default AboutWrapper;

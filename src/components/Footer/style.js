import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background-color: #353030;
  height: 300px;
  width: 100%;
  padding: 20px 0;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  .record-style {
    color: white;
    text-decoration-line: underline;
    margin-left: 2px;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 0.8em;
  }
  .statics {
    margin-top: 20px;
    font-size: 1em;
  }
  @keyframes write {
    0% {
      max-width: 0;
    }
    50% {
      max-width: 100px;
    }
    100% {
      max-width: 200px;
    }
  }
  @keyframes blink {
    50% {
      /* transparent是全透明黑色(black)的速记法，即一个类似rgba(0,0,0,0)这样的值。 */
      border-color: transparent; /* #00000000 */
    }
  }

  .typing {
    color: white;
    font-size: 2.5rem;
    /* 初始宽度为0 */
    font-family: Consolas, Monaco;
    height: 72px;
    /* animation: write 2s steps(56) forwards, blink 0.8s infinite;
  animation-iteration-count: infinite; */
    /* animation: write 2s steps(42, end), blink 0.75s step-end infinite; */
    /* word-break: break-all; */
  }
`;
export default FooterWrapper;

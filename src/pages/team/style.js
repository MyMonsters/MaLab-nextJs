import TeamStyleWrapper from '@/components/teamStyle/style';
import styled from 'styled-components';
export const TeamWrapper = styled.div`
  margin: 0 5rem;
  font-weight: normal;
  h1 {
    margin-top: 10rem;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: normal;
    text-align: center;
    font-size: 3rem;
  }
  h2 {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 2.4rem;
  }
  .img-container {
    width: 100%;
    margin: auto;
  }
  img {
    border: solid 2px;
    border-bottom-color: #ffe;
    border-left-color: #eed;
    border-right-color: #eed;
    border-top-color: #ccb;
    max-height: 100%;
    max-width: 100%;
  }
  .img-container {
    background-color: #ddc;
    border: solid 3vmin #eee;
    border-bottom-color: #fff;
    border-left-color: #eee;
    border-radius: 2px;
    border-right-color: #eee;
    border-top-color: #ddd;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,
      0 5px 10px 5px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    /* display: inline-block; */
    /* margin: 10vh 10vw; */
    margin: 10vh auto;
    /* height: 80vh; */
    padding: 0;
    position: relative;
    text-align: center;
  }
  .img-container:before {
    border-radius: 2px;
    bottom: -2vmin;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25) inset;
    content: '';
    left: -2vmin;
    position: absolute;
    right: -2vmin;
    top: -2vmin;
  }
  .img-container:after {
    border-radius: 2px;
    bottom: -2.5vmin;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
    content: '';
    left: -2.5vmin;
    position: absolute;
    right: -2.5vmin;
    top: -2.5vmin;
  }
  .info-container {
    text-align: center;
    font-size: large;
    line-height: 1.4;
  }
`;
export default TeamStyleWrapper;

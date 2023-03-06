import styled from 'styled-components';
export const ProjectWrapper = styled.div`
  margin: 9% 5%;
  text-align: center;
  .line-wrapper {
    width: 80%;
  }
  h5 {
    font-size: 1.7rem;
  }
  .info {
    font-size: 1.3rem;
    line-height: 1.5;
    text-align: left;
  }
  .text-muted {
    color: #6c757d !important;
  }
  ul.timeline {
    list-style-type: none;
    position: relative;
  }
  ul.timeline:before {
    content: ' ';
    background: #186ac0;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 3px;
    height: 100%;
    z-index: 400;
  }
  ul.timeline > li {
    margin: 40px 0;
    padding-left: 38px;
  }
  ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid #186ac0;
    left: 14px;
    width: 30px;
    height: 30px;
    z-index: 400;
  }
  .title {
    font-weight: 500;
    font-family: Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif;
    font-size: 2.4rem;
  }
  .line-wrapper {
    margin: auto;
  }
  .ant-timeline-item {
    font-size: 1.4rem;
    text-align: left;
  }
  .ant-timeline-item-tail {
    height: 300px;
  }
  .ant-timeline-item-head {
    height: 30px;
    width: 30px;
  }
  .ant-timeline-item-content {
    margin-inline-start: 80px;
  }
`;

import styled from 'styled-components';
export const NewsWrapper = styled.div`
  /* margin: 0 5rem; */
  margin: 5%;

  .News-title {
    font-weight: 100;
    font-family: Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif;
    font-size: 3rem;
  }
  .New-list {
    font-family: 'Times New Roman', Times, serif;
  }
  .News-list {
    margin: 30px 0;
    font-family: 'Times New Roman', Times, serif;
  }
  .title {
    font-family: 'Times New Roman', Times, serif;
  }
  .News-item {
    font-family: 'Times New Roman', Times, serif;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    /* background-color: rgba(174, 186, 209, 0.171); */
    text-decoration: none;
    border: 1px solid rgba(174, 186, 209, 0.271);
    padding: 20px 0;
    border-radius: 20px;
    color: #6c757d;
  }

  .News-item:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    border-radius: 20px;
  }
  /* .img-container {
  width: 40%;
} */

  .date {
    height: 30%;
    text-align: left;
    font-size: 1.2rem;
  }
  .title {
    font-size: 1.9rem;
    text-align: left;
  }
  .img {
    margin-top: 4%;
  }
`;

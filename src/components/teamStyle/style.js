import styled from 'styled-components';

export const TeamStyleWrapper = styled.div`
  width: 65%;
  margin: auto;
  /* .carousel-item {
    margin: auto;
    width: 60%;
  } */
  .previewImg {
    display: flex;
  }
  .slick-prev {
    /* margin: 0 20px; */
    inset-inline-start: -60px;
  }
  .slick-next {
    /* margin: 0 20px; */

    /* margin: 0 20px; */
    inset-inline-end: -40px;
  }
  .ant-carousel .slick-prev,
  .ant-carousel .slick-next,
  .ant-carousel .slick-prev:hover,
  .ant-carousel .slick-next:hover {
    font-size: inherit;
    color: currentColor;
  }
  .active {
    border: 3px solid gray;
    padding: 2px;
  }
  .ant-carousel .slick-prev::before {
    content: '';
  }
  .ant-carousel .slick-next::before {
    content: '';
  }
`;
export default TeamStyleWrapper;

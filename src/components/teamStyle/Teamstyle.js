import { myLoader } from '@/utils/loader';
import { Carousel, Col, Row } from 'antd';
import Image from 'next/image';
import React, { memo, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { TeamStyleWrapper } from './style';

export default memo(function Teamstyle() {
  const { t } = useTranslation('common');
  const [styleImg, setstyleImg] = useState([
    { picUrl: 'card.png' },
    { picUrl: 'style.jpg' },
  ]);
  const afterChange = (current) => {
    setcurrentIndex(current);
  };
  const carouselRef = useRef(null);
  const [currentIndex, setcurrentIndex] = useState(0);
  const handleImgClick = (index) => {
    console.log(index);
    setcurrentIndex(index);
    console.log(carouselRef.current.goTo(index));
  };
  return (
    <TeamStyleWrapper>
      <h2 style={{ textAlign: 'center', margin: '140px 0 100px 0' }}>
        {t('style')}
      </h2>
      <Carousel
        afterChange={(current) => afterChange(current)}
        effect="fade"
        arrows="true"
        ref={carouselRef}
        nextArrow={
          <span>
            <svg
              t="1678087348613"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7804"
              width="32"
              height="32"
            >
              <path
                d="M686.122667 439.978667c29.546667 27.946667 29.546667 101.312 0 132.757333l-145.6 143.253333-145.6 143.253334c-29.546667 27.946667-67.52-6.997333-67.52-66.389334V219.861333c0-59.392 37.973333-94.336 67.52-66.389333l145.6 143.253333 145.6 143.253334z"
                fill="#333333"
                p-id="7805"
              ></path>
            </svg>
          </span>
        }
        prevArrow={
          <span>
            <svg
              t="1678087221081"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2261"
              width="32"
              height="32"
            >
              <path
                d="M349.546667 572.736c-29.546667-27.946667-29.546667-101.312 0-132.757333l145.6-143.253334 145.6-143.253333c29.546667-27.946667 67.52 6.997333 67.52 66.389333v572.970667c0 59.392-37.973333 94.336-67.52 66.389333l-145.6-143.253333-145.6-143.232z"
                fill="#333333"
                p-id="2262"
              ></path>
            </svg>
          </span>
        }
      >
        {styleImg.map((item, index) => {
          return (
            <div key={index} className="carousel-item">
              <Image
                loader={myLoader}
                width={100}
                height={100}
                style={{ width: '100%', height: 'auto' }}
                src={item.picUrl}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
      <div>
        <Row class="previewImg">
          {styleImg.map((item, index) => {
            return (
              <Col
                span={4}
                key={index}
                className={currentIndex === index ? 'active' : ''}
                onClick={(e) => handleImgClick(index)}
              >
                <Image
                  loader={myLoader}
                  src={item.picUrl}
                  width={50}
                  height={100}
                  style={{ width: '100%', height: 'auto' }}
                  alt="style"
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </TeamStyleWrapper>
  );
});

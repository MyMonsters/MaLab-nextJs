import { useGetNewsQuery } from '@/lib/MaLabApi';
import { myLoader } from '@/utils/loader';
import { Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewsWrapper } from './style';

const News = memo(function News() {
  const { data, err, isLoading } = useGetNewsQuery();
  console.log(data);
  return (
    <NewsWrapper>
      <h2 class="News-title">News</h2>
      <div className="News-list">
        {isLoading
          ? ''
          : data.data.map((item, index) => {
              return (
                <Link href="" className="News-item" key={item.id}>
                  <Row justify={'center'}>
                    <Col lg={14} offset={1} md={14} sm={24}>
                      <div className="date">{item.date}</div>
                      <div className="title">{item.ENtitle}</div>
                      <div className="title">{item.CNtitle}</div>
                    </Col>
                    <Col lg={6} md={6} offset={2} sm={22}>
                      <div className="img">
                        <Image
                          src="/n2.jpg"
                          loader={myLoader}
                          className="myImg"
                          loading="lazy"
                          width={1800}
                          height={400}
                          style={{
                            width: '100%',
                            height: 'auto',
                          }}
                          alt=""
                        />
                      </div>
                    </Col>
                  </Row>
                </Link>
              );
            })}
      </div>
    </NewsWrapper>
  );
});
export default News;

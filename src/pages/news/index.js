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
                    <Col
                      lg={{ span: 14, offset: 1 }}
                      md={{ span: 14, offset: 1 }}
                      sm={{ span: 23, offset: 2 }}
                    >
                      <div className="date">{item.time}</div>
                      <div className="title">{item.ENtitle}</div>
                      {/* <div className="title">{item.CNtitle}</div> */}
                    </Col>
                    <Col
                      lg={{ span: 7, offset: 2 }}
                      md={{ span: 6, offset: 2 }}
                      sm={{ span: 23, offset: 2 }}
                    >
                      <div className="img">
                        <Image
                          src="/n2.jpg"
                          loader={myLoader}
                          className="myImg"
                          loading="lazy"
                          width={1800}
                          height={400}
                          style={{
                            width: '93%',
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

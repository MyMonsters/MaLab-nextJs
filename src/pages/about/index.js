import { useGetIntroductionQuery } from '@/lib/MaLabApi';
import React, { memo } from 'react';
import { AboutLeftWrapper, AboutRightWrapper, AboutWrapper } from './style';
import Image from 'next/image';
import { myLoader } from '@/utils/loader';
import { Col, Row } from 'antd';
import { useTranslation } from 'next-i18next';
const About = memo(function About(props) {
  const { data, err, isLoading } = useGetIntroductionQuery();
  const { t, i18n } = useTranslation('common');

  return (
    <AboutWrapper id="about">
      <Row gutter={{ xs: 30, sm: 60, md: 90 }}>
        <Col className="gutter-row" xs={24} sm={24} md={24} lg={11}>
          <div>
            <Image
              src="/about.jpg"
              loader={myLoader}
              className="aboutImg"
              loading="lazy"
              width={555}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
              }}
              alt=""
            />
          </div>
        </Col>
        <Col className="gutter-row" xs={24} sm={24} md={24} lg={13}>
          <div>
            {/* <p>{isLoading ? '加载中' : data.data[0].ENintroduction}</p> */}
            <p>
              {isLoading
                ? '加载中'
                : i18n.language === 'zh'
                ? data.data[0].CNintroduction
                : data.data[0].ENintroduction}
            </p>
          </div>
        </Col>
      </Row>

      <section>{/* <news /> */}</section>
    </AboutWrapper>
  );
});
export default About;

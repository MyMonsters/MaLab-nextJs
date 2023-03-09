import { myLoader } from '@/utils/loader';
import { Col, Row } from 'antd';
import { i18n } from 'next-i18next.config';
import Image from 'next/image';
import React, { memo, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { ShowTeamWrapper } from './style';
export default memo(function ShowTeam(props) {
  const { teamlist, title } = props;
  const { t, i18n } = useTranslation('common');
  // const [teamlist, setteamlist] = useState(props.teamlist);
  // const [title, settitle] = useState(props.title);
  console.log(teamlist);
  return (
    <ShowTeamWrapper>
      <h2>{t(title)}</h2>
      <hr />
      <Row gutter={{ lg: 90, md: 60 }}>
        {teamlist.data.map((item, index) => {
          if (title === 'Co-PI') {
            return (
              <Col xs={24} md={12} lg={6} key={item.id}>
                <a href={item.path} className="CoPI-wrapper" target={'_blank'}>
                  <div className="img-container">
                    <Image
                      loader={myLoader}
                      loading="lazy"
                      width={100}
                      height={100}
                      src="ma.jpg"
                      className="img"
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                      alt=""
                    />
                  </div>

                  <div className="my-text">
                    {i18n.language === 'en' ? item.ENname : item.CNname}
                  </div>
                  <div className="my-text">
                    {i18n.language === 'en' ? item.ENmajor : item.CNmajor}
                  </div>
                  <div className="my-text">
                    {i18n.language === 'en' ? item.ENinterest : item.CNinterest}
                  </div>
                </a>
              </Col>
            );
          } else {
            return (
              <Col xs={24} md={12} lg={6} key={item.id}>
                <div className="img-container">
                  <Image
                    loader={myLoader}
                    loading="lazy"
                    width={100}
                    height={100}
                    src="ma.jpg"
                    className="img"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    alt=""
                  />
                </div>

                <div className="my-text">
                  {' '}
                  {i18n.language === 'en' ? item.ENname : item.CNname}
                </div>
                <div className="my-text">
                  {i18n.language === 'en' ? item.ENgrade : item.CNgrade}
                  {i18n.language === 'en' ? item.ENmajor : item.CNmajor}
                </div>
              </Col>
            );
          }
        })}
      </Row>
    </ShowTeamWrapper>
  );
});

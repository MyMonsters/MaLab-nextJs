import { useGetMembers1Query } from '@/lib/MaLabApi';
import { Col, Divider, Row } from 'antd';
import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';
import { TeamWrapper } from './style';
import Image from 'next/image';
import { myLoader } from '@/utils/loader';

const Team = memo(function Team() {
  const { data: TeachersData, err1, TeachersisLoading } = useGetMembers1Query();
  const { data: PhdData, err2, PhdisLoading } = useGetMembers1Query();
  const { data: MastersData, err3, MastersisLoading } = useGetMembers1Query();
  const {
    data: UndergraduatesData,
    err4,
    UndergraduaresisLoading,
  } = useGetMembers1Query();
  const { t, i18n } = useTranslation('common');
  // console.log(t, i18n);
  return (
    <TeamWrapper>
      <h1>{t('team')}</h1>
      <h2>{t('principal')}</h2>
      <hr />
      <Row>
        <Col xs={24} lg={{ span: 6, offset: 9 }}>
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
        </Col>
      </Row>
      <div className="info-container">
        <div>{t('machao')}</div>
        <div>{t('ma')}</div>
        <div>
          <a href="">{t('maNav')}</a>
        </div>
        <div> Email: machao@cdut.edu.cn</div>
      </div>
      i
    </TeamWrapper>
  );
});
export default Team;

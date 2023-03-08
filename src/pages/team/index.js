import {
  useGetMembers1Query,
  useGetMembers2Query,
  useGetMembers3Query,
  useGetMembers4Query,
} from '@/lib/MaLabApi';
import { Col, Row } from 'antd';
import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';
import { TeamWrapper } from './style';
import Image from 'next/image';
import { myLoader } from '@/utils/loader';
import ShowTeam from '@/components/base-ui/ShowTeam';
import Teamstyle from '@/components/teamStyle/Teamstyle';

const Team = memo(function Team() {
  const {
    data: TeachersData,
    err1,
    isLoading: TeachersisLoading,
  } = useGetMembers1Query();
  const {
    data: PhdData,
    err2,
    isLoading: PhdisLoading,
  } = useGetMembers2Query();
  const {
    data: MastersData,
    err3,
    isLoading: MastersisLoading,
  } = useGetMembers3Query();
  const {
    data: UndergraduatesData,
    err4,
    isLoading: UndergraduaresisLoading,
  } = useGetMembers4Query();
  const { t, i18n } = useTranslation('common');
  // console.log(t, i18n);
  return (
    <TeamWrapper id="team">
      <h1>{t('team')}</h1>
      <div>
        <h2>{t('principal')}</h2>
        <hr />
        <Row gutter={{ xs: 30, md: 60, lg: 90 }}>
          <Col xs={24} md={{ span: 12, offset: 6 }} lg={{ span: 6, offset: 9 }}>
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
      </div>
      {TeachersisLoading ? (
        '加载中'
      ) : (
        <ShowTeam teamlist={TeachersData} title={'Co-PI'} />
      )}
      {PhdisLoading ? '加载中' : <ShowTeam teamlist={PhdData} title={'phd'} />}
      {MastersisLoading ? (
        '加载中'
      ) : (
        <ShowTeam teamlist={MastersData} title={'master'} />
      )}
      {UndergraduaresisLoading ? (
        '加载中'
      ) : (
        <ShowTeam teamlist={UndergraduatesData} title={'undergraduate'} />
      )}
      <Teamstyle />
    </TeamWrapper>
  );
});
export default Team;

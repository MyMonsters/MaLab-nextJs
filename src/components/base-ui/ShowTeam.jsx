import { myLoader } from '@/utils/loader';
import { Col, Row } from 'antd';
import Image from 'next/image';
import React, { memo, useState } from 'react';
import { showTeamWrapper } from './style';
export default memo(function ShowTeam(props) {
  const { teamlist, title } = props;
  // const [teamlist, setteamlist] = useState(props.teamlist);
  // const [title, settitle] = useState(props.title);
  console.log(teamlist);
  return (
    <showTeamWrapper>
      <h2>{title}</h2>
      <hr />
      <Row gutter={{lg:90}}>
        {teamlist.data.map((item, index) => {
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
                
                {item.ENname}
              </Col>
            
          );
        })}
      </Row>
    </showTeamWrapper>
  );
});

import React, { memo } from 'react';
import { HomeWrapper } from './style';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { myLoader } from '@/utils/loader';
const Home = memo(function Home() {
  const { t } = useTranslation('common');

  return (
    <HomeWrapper id="home">
      <div>
        <Image
          src="/home.png"
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
        <div className={'clearfix'}></div>
      </div>
    </HomeWrapper>
  );
});
export default Home;

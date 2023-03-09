import { useGetNewsByIdQuery } from '@/lib/MaLabApi';
import { myLoader } from '@/utils/loader';
import Image from 'next/image';

import { useRouter } from 'next/router';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DetailWrapper } from './style';

const detail = memo(function Detail(props) {
  const router = useRouter();
  const { i18n } = useTranslation();
  console.log(router);
  const { data, err, isLoading } = useGetNewsByIdQuery(router.query.id);
  console.log(data);
  return (
    <DetailWrapper>
      <div className="title">
        {isLoading
          ? '加载中'
          : i18n.language === 'en'
          ? data.data[0].ENtitle
          : data.data[0].CNtitle}
      </div>
      <div className="time-box">
        <svg
          t="1671090193000"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2166"
          width="12"
          height="20"
        >
          <path
            d="M480 298.666667a32 32 0 0 1 64 0v149.333333a32 32 0 0 0 32 32h149.333333a32 32 0 0 1 0 64h-149.333333a96 96 0 0 1-96-96v-149.333333zM512 960C264.576 960 64 759.424 64 512S264.576 64 512 64s448 200.576 448 448-200.576 448-448 448z m0-64c212.074667 0 384-171.925333 384-384S724.074667 128 512 128 128 299.925333 128 512s171.925333 384 384 384z"
            fill="#000000"
            p-id="2167"
          ></path>
        </svg>
        <span style={{ marginLeft: '10px' }}>
          {isLoading ? '加载中' : data.data[0].time}
        </span>
      </div>
      <hr style={{ width: '80%' }} />
      <div className="img-container">
        {/* <img
          src={isLoading ? '' : data.data[0].image}
          style={{ width: '30%', marginLeft: '35%' }}
          alt=""
        /> */}
        <Image
          style={{ width: '30%', marginLeft: '35%' }}
          loader={myLoader}
          src="n2.jpg"
          alt=""
        />
        {/* <img :src="NewsInfo.image" alt="" style="width: 30%" /> */}
      </div>
      <div className="content">
        {isLoading
          ? '加载中'
          : i18n.language === 'en'
          ? data.data[0].ENcontent
          : data.data[0].CNcontent}
      </div>
    </DetailWrapper>
  );
});
export default detail;

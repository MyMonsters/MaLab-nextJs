import React, { memo } from 'react';
import { PublicationWrapper } from './style';
import { useGetPublicationsQuery } from '@/lib/MaLabApi';
import { useTranslation } from 'next-i18next';
const Publication = memo(function Publication() {
  let { data, err, isLoading } = useGetPublicationsQuery();
  const { t, i18n } = useTranslation();
  // let reverseData = [];
  // if (isLoading) {
  //   reverseData = data;
  //   console.log(data);
  // }

  // const publication = data.data.reverse();

  return (
    <PublicationWrapper id="publications">
      <h2 className="title">{t('publications')}</h2>
      {isLoading
        ? '加载中'
        : data.data.map((item, index) => {
            return (
              <div key={item.id} className="publication-item">
                {'['}
                {item.id}
                {'] '}
                {item.title}
              </div>
            );
          })}
      {}
    </PublicationWrapper>
  );
});
export default Publication;

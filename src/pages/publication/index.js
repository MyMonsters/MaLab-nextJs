import React, { memo } from 'react';
import { PublicationWrapper } from './style';
import { useGetPublicationsQuery } from '@/lib/MaLabApi';
const Publication = memo(function Publication() {
  const { data, err, isLoading } = useGetPublicationsQuery();
  console.log(useGetPublicationsQuery());
  return (
    <PublicationWrapper>
      {isLoading
        ? '加载中'
        : data.data.map((item, index) => {
            return <div key={item.id}>{item.title}</div>;
          })}
      {}
    </PublicationWrapper>
  );
});
export default Publication;

import React, { memo } from 'react';
import { HomeWrapper } from './style';
import { useTranslation } from 'next-i18next';
const Home = memo(function Home() {
  const { t } = useTranslation('common');

  return <div>Hom{t('team')}</div>;
});
export default Home;

import '@/styles/globals.css';
import About from './about';
import Home from './home';
import News from './news';
import Project from './project';
import Publication from './publication';
import Style from './style';
import Team from './team';
import { appWithTranslation } from 'next-i18next';
import App from 'next/app';
import Header from '@/components/Header';

// import 'antd/dist/reset.css';
const { wrapper } = require('../lib/store');

const app = appWithTranslation(({ Component, pageProps }) => {
  return (
    <div>
      
      <Component {...pageProps} />
      {/* <Pokemon /> */}
      <Header />
      <Home />
      <About />
      <News />
      <Team />
      <Style />
      <Project />
      <Publication />
    </div>
  );
});

export default wrapper.withRedux(app);

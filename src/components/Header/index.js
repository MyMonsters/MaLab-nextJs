import React, { memo, useEffect, useRef, useState } from 'react';
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style';
import Link from 'next/link';
import { headerLinks } from '@/common/local-data';
import { Dropdown, FloatButton } from 'antd';
import { useTranslation } from 'next-i18next';
const Header = memo(function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, i18n } = useTranslation();
  const [mode, setmode] = useState('light');
  // useEffect(() => {
  //   if (mode === 'light') {
  //     console.log('light');
  //     document.getElementsByClassName('main')[0].classList.add('dark-mode');
  //     console.log(document.getElementsByClassName('main')[0].classList);
  //     setmode('dark');
  //   } else {
  //     console.log('dark');
  //     console.log(
  //       document.getElementsByClassName('main')[0].classList.remove('dark-mode')
  //     );
  //     console.log(document.getElementsByClassName('main')[0].classList);
  //     setmode('light');
  //   }
  // }, [mode]);
  const handleChangeMode = (value) => {
    console.log('运行了一次', value);
    if (value === 'light') {
      document.getElementsByClassName('main')[0].classList.add('dark-mode');
      // mode = 'dark';
      setmode('dark');
    } else {
      console.log('dark');
      document.getElementsByClassName('main')[0].classList.remove('dark-mode');
      setmode('light');
    }
  };
  const handleChangeLan = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('zh');
    } else {
      i18n.changeLanguage('en');
    }
  };
  const handleClickNavitem = (item, index) => {
    setCurrentIndex(index);
    const element = document.getElementById(item);
    element.scrollIntoView();
  };
  const ShowSelectItem = (item, index) => {
    return (
      <a
        className={currentIndex === index ? 'active' : ''}
        onClick={(e) => handleClickNavitem(item, index)}
      >
        {t(item)}
      </a>
    );
  };
  const showAllItem = () => {
    const element = document.getElementById('header');
    element.style += 'flex-dicration: column;';
  };
  const items = [
    {
      key: '1',
      label: (
        <a
          rel="noopener noreferrer"
          onClick={(e) => handleClickNavitem('home', 0)}
        >
          {t('home')}
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a
          rel="noopener noreferrer"
          onClick={(e) => handleClickNavitem('about', 1)}
        >
          {t('about')}
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => handleClickNavitem('news', 2)}
        >
          {t('news')}
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => handleClickNavitem('team', 3)}
        >
          {t('team')}
        </a>
      ),
    },
    {
      key: '5',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => handleClickNavitem('project', 4)}
        >
          {t('project')}
        </a>
      ),
    },
    {
      key: '6',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => handleClickNavitem('publications', 5)}
        >
          {t('publications')}
        </a>
      ),
    },
  ];
  return (
    // <Affix>
    <HeaderWrapper id="header">
      <HeaderLeft>
        <svg
          t="1658652408755"
          class="icon myicon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5655"
          width="24"
          height="24"
        >
          <path
            d="M776.8 959H247.5c-8.4 0-9.7-27-9.7-27 10.5-9.1 61.7-28.9 77.5-28.9h394.1c21.7 0 64.5 15.4 77.2 29-0.1 0-1.9 26.9-9.8 26.9z"
            fill="#3173E7"
            p-id="5656"
          ></path>
          <path
            d="M776.8 939.7H247.5c-8.4 0-12.8-7.7-7.2-12.5l33.8-29.2c10.5-9.1 25.5-14.2 41.2-14.2h394.1c21.7 0 42 8.1 54.6 21.7l20.7 22.3c4.6 5 0 11.9-7.9 11.9z"
            fill="#E7F5FD"
            p-id="5657"
          ></path>
          <path
            d="M784.7 927.9L764 905.5c-12.6-13.6-33-21.7-54.6-21.7h-27c21.7 0 42 8.1 54.6 21.7l20.7 22.3c4.6 5 0 11.9-7.9 11.9h27c7.9 0 12.5-6.9 7.9-11.8z"
            fill="#F0F8FC"
            p-id="5658"
          ></path>
          <path
            d="M512.1 877.7c-55.7 0-109.7-10.7-160.6-31.8-49.1-20.4-93.3-49.6-131.2-86.7-37.9-37.2-67.7-80.5-88.5-128.7-21.5-49.9-32.4-103-32.4-157.6h10c0 217.7 180.6 394.9 402.6 394.9s402.6-177.1 402.6-394.9h10c0 54.7-10.9 107.7-32.4 157.6-20.8 48.2-50.5 91.5-88.5 128.7-37.9 37.2-82 66.4-131.2 86.7-50.6 21.1-104.7 31.8-160.4 31.8z"
            fill="#E7F5FD"
            p-id="5659"
          ></path>
          <path
            d="M587.1 792.1H437.2c-9.4 0-17 7.7-17 17v95.6c0 6 41.2 10.9 92 10.9s92-4.9 92-10.9v-95.6c-0.1-9.4-7.7-17-17.1-17z"
            fill="#5EADEF"
            p-id="5660"
          ></path>
          <path
            d="M512.1 807.8c-31.8 0-62.6-4.3-92-12.3V838s34.3 8 90.9 8 93-8 93-8v-42.5c-29.3 8-60.1 12.3-91.9 12.3z"
            fill="#4C96EC"
            p-id="5661"
          ></path>
          <path
            d="M587.1 792.1h-13.7c9.4 0 17 7.7 17 17v95.6c0 5.8-37.5 10.5-85.1 10.9h6.9c50.8 0 92-4.9 92-10.9v-95.6c-0.1-9.4-7.7-17-17.1-17z"
            fill="#8FC6F4"
            p-id="5662"
          ></path>
          <path
            d="M598.9 796.8c-3.8 1-7.6 1.9-11.4 2.7 1.8 2.7 2.9 6 2.9 9.5v31.4c8.9-1.4 13.7-2.4 13.7-2.4v-29c0-4.8-2-9.1-5.2-12.2z"
            fill="#69A5EF"
            p-id="5663"
          ></path>
          <path
            d="M146.3 449.7a365.8 384.7 0 1 0 731.6 0 365.8 384.7 0 1 0-731.6 0Z"
            fill="#E7F5FD"
            p-id="5664"
          ></path>
          <path
            d="M311.5 198.3l48.3-7.4c15.7-2.4 28-15.5 30.2-32l9.8-75.4C306.9 115 230.1 184.6 186.2 274.8h52.4c19.1 0 36-13 41.8-32.1l6.9-22.7c3.5-11.6 12.9-20 24.2-21.7z"
            fill="#3173E7"
            p-id="5665"
          ></path>
          <path
            d="M230 620.9l-41 9.4c37.5 74.4 97.6 134.3 170.6 169.6l6.1-95.1c1.4-22.7-10.7-43.9-30.4-53.2L282 626.5c-16.4-7.6-34.5-9.6-52-5.6zM493.5 308.7L488.4 438c-0.7 17.9 6.7 35.1 20 46.3l138.4 116.8 106.8-32.5-46.4-69.2c-11.1-16.6-7.2-39.5 8.7-51l30.7-22.3c13.5-9.8 31.6-9 44.3 1.9l17.5 15.1c8 6.9 18.4 9.7 28.6 7.9l41.6-7.7c-2.5-153.8-90.8-285.6-216.7-344.8L651.1 146c-1.7 7.4-5.7 14-11.3 18.7L510.4 273.5c-10.2 8.6-16.4 21.4-16.9 35.2z"
            fill="#5EADEF"
            p-id="5666"
          ></path>
          <path
            d="M552.3 739.1c1.1-4.6 3.4-8.7 6.8-11.8l29.8-27.5c5.3-4.9 12.8-6.2 19.3-3.4l19.2 8.3c10.5 4.5 14.8 17.9 9 28.2l-8.7 15.5c-4.1 7.3-11.4 11.9-19.4 12.4l-37.2 2.1c-12.3 0.7-21.7-11.3-18.8-23.8z"
            fill="#3173E7"
            p-id="5667"
          ></path>
          <path
            d="M513 65.6c-9 0-17.9 0.3-26.8 1 189.5 14.4 339 180.7 339 383.7S675.8 819.6 486.2 834c8.8 0.7 17.8 1 26.8 1 202 0 365.8-172.2 365.8-384.7S715 65.6 513 65.6z"
            fill="#F0F8FC"
            p-id="5668"
          ></path>
          <path
            d="M837 451l41.6-7.7c-1.2-74.2-22.4-143.2-58-201.4-0.4-0.6-0.8-1.2-1.1-1.9-0.5-0.9-1.1-1.7-1.6-2.6-38.4-60.4-92.4-108.8-156.1-138.6l-6.1 26.8c101.9 68.3 169.6 188.2 169.6 324.7v0.8c3.8 0.7 7.8 0.6 11.7-0.1z"
            fill="#8FC6F4"
            p-id="5669"
          ></path>
          <path
            d="M959 445.6c-0.1-3 1-34.7-0.9-39.6-7-18.6-13-15.5-43.3-41-16.5-13.9-27.8-28-52.9-39.2 8.6 22.4 10.5 50.8 15 75 4.2 2.9 3.2 2.3 6.7 5.3 16.5 13.9 25 27.6 25.4 40.9 0.3 13.3-7.5 27.6-23.2 42.4-2.4 2.2-4.9 4.4-7.6 6.6-18.1 14.8-43.4 29-73.9 41.5-76.3 31.2-178.9 50.1-288.8 53.3-109.9 3.2-213.3-9.8-291.1-36.5-30.3-10.4-55.7-22.8-74.4-36.1-3.4-2.4-6.5-4.8-9.5-7.3-16.5-13.9-25-27.6-25.4-40.9-0.3-13.3 7.5-27.6 23.2-42.4 3.8-3.6 4.3-4.1 8.9-7.6 0.3-5.2 0.9-30.6 3.5-35.7 0.4-0.8-2.8-0.1-2.5-0.9 6.1-15.6-3.9-21.4 1.6-38.2-25.2 12.9-28.7 28-44.8 43.2-21.7 20.4-37.6 26.4-39.6 43.9-1.1 9.4-0.5 31.8-0.3 39.1 0.5 20.3 8.6 50.7 44.2 80.6 14.7 12.3 32.9 23.7 54.4 33.9 13.7 6.6 28.8 12.7 45.2 18.3 75 25.8 171.4 39.6 274.4 39.6 11.1 0 22.4-0.2 33.6-0.5 115.5-3.3 224-23.5 305.5-56.8 16.7-6.8 32-14.1 45.8-21.8 20.2-11.2 37.3-23.3 51-36.2 33.9-31.7 40.3-62.6 39.8-82.9z"
            fill="#F99403"
            p-id="5670"
          ></path>
          <path
            d="M958.7 422.9c-0.5-20.3-8.6-50.7-44.2-80.6-16.5-13.9-37.5-26.5-62.6-37.8 8.6 22.4 15.3 45.8 19.8 70.1 4.2 2.9 8 5.8 11.6 8.8 16.5 13.9 25 27.6 25.4 40.9 0.3 13.3-7.5 27.6-23.2 42.4-2.4 2.2-4.9 4.4-7.6 6.6-18.1 14.8-43.4 29-73.9 41.5-76.3 31.2-178.8 50.2-288.8 53.3-109.9 3.2-213.3-9.8-291.1-36.5-30.3-10.4-55.7-22.8-74.4-36.1-3.4-2.4-6.5-4.8-9.5-7.3-16.5-13.9-25-27.6-25.4-40.9-0.3-13.3 7.5-27.6 23.2-42.4 3.8-3.6 8-7.1 12.7-10.6 3.3-24.4 8.8-48.1 16.2-70.7-25.2 12.9-46.1 27-62.2 42.2-33.9 31.9-40.4 62.7-39.9 83 0.5 20.3 8.6 50.7 44.2 80.6 14.7 12.3 32.9 23.7 54.4 33.9 13.7 6.6 28.8 12.7 45.2 18.3 75 25.8 171.4 39.6 274.4 39.6 11.1 0 22.4-0.2 33.6-0.5 115.5-3.3 224-23.5 305.5-56.8 16.7-6.8 32-14.1 45.8-21.8 20.2-11.2 37.3-23.3 51-36.2 33.9-31.8 40.4-62.7 39.8-83z"
            fill="#FCCA4C"
            p-id="5671"
          ></path>
          <path
            d="M230.9 581.6c-16.4-5.6-31.4-11.7-45.2-18.3-21.5-10.3-39.7-21.6-54.4-33.9-35.5-29.9-43.6-60.3-44.2-80.6-0.5-20.3 6-51.2 39.9-83 10-9.4 21.7-18.3 35.2-26.8 1.5-5.1 3-10.3 4.7-15.3-25.2 12.9-46.1 27-62.2 42.2-33.9 31.9-40.4 62.7-39.9 83 0.5 20.3 8.6 50.7 44.2 80.6 14.7 12.3 32.9 23.7 54.4 33.9 13.7 6.6 28.8 12.7 45.2 18.3 75 25.8 171.4 39.6 274.4 39.6 3.7 0 7.4 0 11.1-0.1-98.8-1-190.9-14.8-263.2-39.6z"
            fill="#FAAA20"
            p-id="5672"
          ></path>
          <path
            d="M958.7 422.9c-0.5-20.3-8.6-50.7-44.2-80.6-16.5-13.9-37.5-26.5-62.6-37.8 2.4 6.3 4.7 12.6 6.8 19.1 9.7 5.9 18.4 12.2 26.1 18.7 35.5 29.9 43.6 60.3 44.2 80.6 0.5 20.3-6 51.2-39.9 83-13.7 12.8-30.7 24.9-51 36.2-13.8 7.7-29.1 14.9-45.8 21.8-81.5 33.3-190 53.5-305.5 56.8-6.2 0.2-12.4 0.3-18.6 0.4 4.9 0.1 9.7 0.1 14.6 0.1 11.1 0 22.4-0.2 33.6-0.5 115.5-3.3 224-23.5 305.5-56.8 16.7-6.8 32-14.1 45.8-21.8 20.2-11.2 37.3-23.3 51-36.2 34-31.8 40.5-62.7 40-83z"
            fill="#FEE5A6"
            p-id="5673"
          ></path>
        </svg>
        <span>{'MaLab'}</span>
      </HeaderLeft>
      <HeaderRight>
        <div className="toggle-btn-menu" onClick={(e) => showAllItem()}>
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <svg
                t="1678281668751"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3238"
                width="32"
                height="32"
              >
                <path
                  d="M511.7 56.4c61.5 0 121.2 12 177.3 35.8 54.2 22.9 103 55.8 144.8 97.6s74.7 90.6 97.6 144.8c23.7 56.1 35.8 115.8 35.8 177.3s-12 121.2-35.8 177.3c-22.9 54.2-55.8 103-97.6 144.8-41.8 41.8-90.6 74.7-144.8 97.6-56.1 23.7-115.8 35.8-177.3 35.8s-121.2-12-177.3-35.8c-54.2-22.9-103-55.8-144.8-97.6-41.8-41.8-74.7-90.6-97.6-144.8-23.7-56.1-35.8-115.8-35.8-177.3s12-121.2 35.8-177.3c22.9-54.2 55.8-103 97.6-144.8 41.8-41.8 90.6-74.7 144.8-97.6 56.1-23.7 115.8-35.8 177.3-35.8m0-40C238 16.4 16.2 238.3 16.2 511.9s221.8 495.5 495.5 495.5 495.5-221.8 495.5-495.5S785.3 16.4 511.7 16.4z"
                  fill="#999999"
                  p-id="3239"
                ></path>
                <path
                  d="M714.7 531.9H308.6c-11 0-20-9-20-20s9-20 20-20h406.1c11 0 20 9 20 20s-8.9 20-20 20zM714.7 369.5H308.6c-11 0-20-9-20-20s9-20 20-20h406.1c11 0 20 9 20 20s-8.9 20-20 20zM714.7 694.4H308.6c-11 0-20-9-20-20s9-20 20-20h406.1c11 0 20 9 20 20s-8.9 20-20 20z"
                  fill="#999999"
                  p-id="3240"
                ></path>
              </svg>
            </a>
          </Dropdown>
        </div>
        {headerLinks.map((item, index) => {
          return (
            <div key={item.title} className="header-item">
              {ShowSelectItem(item, index)}
            </div>
          );
        })}
        <div className="change-lan" onClick={(e) => handleChangeLan()}>
          <svg
            data-v-eec86344=""
            t="1659614396130"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="15161"
            width="20"
            height="20"
            className="icon"
          >
            <path
              data-v-eec86344=""
              d="M585.142857 804.571429H146.285714a73.142857 73.142857 0 0 1-73.142857-73.142858V146.285714a73.142857 73.142857 0 0 1 73.142857-73.142857h585.142857a73.142857 73.142857 0 0 1 73.142858 73.142857v298.422857a36.571429 36.571429 0 0 0 73.142857 0V146.285714a146.285714 146.285714 0 0 0-146.285715-146.285714H146.285714a146.285714 146.285714 0 0 0-146.285714 146.285714v585.142857a146.285714 146.285714 0 0 0 146.285714 146.285715h438.857143a36.571429 36.571429 0 0 0 0-73.142857zM157.257143 574.171429A35.84 35.84 0 0 1 146.285714 548.571429v-292.571429a37.302857 37.302857 0 0 1 36.571429-36.571429h219.428571a36.571429 36.571429 0 0 1 36.571429 36.571429 36.571429 36.571429 0 0 1-36.571429 36.571429H219.428571v73.142857h182.857143a36.571429 36.571429 0 0 1 0 73.142857H219.428571v73.142857h182.857143a36.571429 36.571429 0 0 1 0 73.142857h-219.428571a35.84 35.84 0 0 1-25.6-10.971428zM512 550.765714V374.491429c0-23.405714 12.434286-36.571429 34.377143-37.302858a29.257143 29.257143 0 0 1 30.72 28.525715 68.754286 68.754286 0 0 1 62.902857-27.062857A84.845714 84.845714 0 0 1 731.428571 423.497143v127.268571a32.914286 32.914286 0 0 1-36.571428 34.377143 33.645714 33.645714 0 0 1-36.571429-34.377143V438.857143c0-28.525714-8.777143-44.617143-36.571428-46.811429S585.142857 405.942857 585.142857 438.857143v111.908571a33.645714 33.645714 0 0 1-36.571428 34.377143 32.914286 32.914286 0 0 1-36.571429-34.377143zM841.142857 512a36.571429 36.571429 0 0 1 36.571429 36.571429v438.857142a36.571429 36.571429 0 0 1-36.571429 36.571429 36.571429 36.571429 0 0 1-36.571428-36.571429v-438.857142a36.571429 36.571429 0 0 1 36.571428-36.571429zM702.171429 658.285714h277.942857a43.885714 43.885714 0 0 1 43.885714 43.885715v131.657142a43.885714 43.885714 0 0 1-43.885714 43.885715H702.171429a43.885714 43.885714 0 0 1-43.885715-43.885715V702.171429a43.885714 43.885714 0 0 1 43.885715-43.885715z m43.885714 73.142857a14.628571 14.628571 0 0 0-14.628572 14.628572v43.885714a14.628571 14.628571 0 0 0 14.628572 14.628572h190.171428a14.628571 14.628571 0 0 0 14.628572-14.628572v-43.885714a14.628571 14.628571 0 0 0-14.628572-14.628572z"
              fill=""
              p-id="15162"
            ></path>
          </svg>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ marginBottom: '0' }}>
            <input
              className="toggle-checkbox"
              type="checkbox"
              value={mode}
              onChange={(e) => handleChangeMode(e.target.value)}
            />
            {/* <input className="toggle-checkbox" type="checkbox" /> */}
            <div className="toggle-slot">
              <div className="sun-icon-wrapper">
                <svg
                  t="1675836147687"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2176"
                  width="1.3em"
                  height="1.3em"
                >
                  <path
                    d="M960 512l-128 128v192h-192l-128 128-128-128H192v-192l-128-128 128-128V192h192l128-128 128 128h192v192z"
                    fill="#FFD878"
                    p-id="2177"
                  ></path>
                  <path
                    d="M736 512a224 224 0 1 0-448 0 224 224 0 1 0 448 0z"
                    fill="#FFE4A9"
                    p-id="2178"
                  ></path>
                  <path
                    d="M512 109.248L626.752 224H800v173.248L914.752 512 800 626.752V800h-173.248L512 914.752 397.248 800H224v-173.248L109.248 512 224 397.248V224h173.248L512 109.248M512 64l-128 128H192v192l-128 128 128 128v192h192l128 128 128-128h192v-192l128-128-128-128V192h-192l-128-128z"
                    fill="#4D5152"
                    p-id="2179"
                  ></path>
                  <path
                    d="M512 320c105.888 0 192 86.112 192 192s-86.112 192-192 192-192-86.112-192-192 86.112-192 192-192m0-32a224 224 0 1 0 0 448 224 224 0 0 0 0-448z"
                    fill="#4D5152"
                    p-id="2180"
                  ></path>
                </svg>
              </div>
              <div className="toggle-button"></div>
              <div className="moon-icon-wrapper">
                <svg
                  t="1675836286421"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3102"
                  width="1.3em"
                  height="1.3em"
                >
                  <path
                    d="M412.216889 185.173333a343.950222 343.950222 0 0 0-11.264 147.740445 340.650667 340.650667 0 0 0 436.451555 278.300444c-38.343111 126.008889-150.300444 223.345778-282.908444 239.502222a340.992 340.992 0 0 1-298.552889-112.469333C190.407111 664.064 160.995556 568.32 173.056 468.650667c16.156444-132.835556 113.322667-245.020444 239.160889-283.420445zM511.146667 56.888889a463.644444 463.644444 0 0 0-62.805334 4.266667c-201.557333 27.306667-363.406222 191.374222-387.982222 393.671111C26.680889 731.704889 241.493333 967.111111 511.146667 967.111111c18.773333 0 37.831111-1.137778 57.059555-3.527111 201.898667-24.632889 365.681778-186.766222 392.931556-388.721778 2.958222-21.788444 4.323556-43.292444 4.266666-64.512-0.113778-33.166222-27.420444-55.296-56.661333-55.296a58.026667 58.026667 0 0 0-34.929778 11.776 225.28 225.28 0 0 1-135.566222 45.112889c-10.695111 0-21.617778-0.739556-32.654222-2.275555-98.531556-13.767111-178.460444-93.809778-192.170667-192.568889a227.384889 227.384889 0 0 1 42.723556-168.561778c23.608889-37.376 1.422222-91.534222-43.463111-91.704889h-1.592889z"
                    fill=""
                    p-id="3103"
                  ></path>
                </svg>
              </div>
            </div>
          </label>
        </div>
      </HeaderRight>
      <FloatButton.BackTop />
    </HeaderWrapper>
    // </Affix>
  );
});

export default Header;

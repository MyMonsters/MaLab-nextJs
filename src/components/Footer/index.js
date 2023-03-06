import React, { memo } from 'react';
import Mymap from '../Mymap';
import { FooterWrapper } from './style';

const Footer = memo(function Footer() {
  return (
    <FooterWrapper>
      <div class="left">
        <div class="typing">Ma Lab</div>
      </div>
      <div className="right">
        <div className="record">
          <svg
            t="1669805839091"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2959"
            width="16"
            height="16"
          >
            <path
              d="M512 1024c210.176-76.8 350.208-185.088 420.096-319.232 91.904-160.768 112.128-346.368 70.144-563.2L512 0 21.76 147.968q-62.976 316.16 63.232 555.776C161.792 837.888 301.824 947.2 512 1024zM147.968 678.144C70.912 537.6 51.2 377.856 84.992 192.512L512 64.768l427.008 128C967.168 377.856 947.2 537.6 870.4 671.744c-62.976 114.944-182.016 204.8-358.4 274.688-182.016-64-301.056-159.744-364.032-268.288z"
              fill="white"
              p-id="2960"
            ></path>
            <path
              d="M512 646.144l-238.08-217.088 56.064-44.8L512 550.4l252.16-229.888 55.808 44.544L512 646.144z"
              fill="white"
              p-id="2961"
            ></path>
          </svg>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            className="record-style"
          >
            渝ICP备2022013486号-1
          </a>
        </div>
        <Mymap />
      </div>
    </FooterWrapper>
  );
});

export default Footer;

import { Timeline } from 'antd';
import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';
import { ProjectWrapper } from './style';
import { useGetProjectQuery } from '@/lib/MaLabApi';

const Project = memo(function Project() {
  const { t, i18n } = useTranslation();
  const { data, err, isLoading } = useGetProjectQuery();
  console.log(data);
  return (
    <ProjectWrapper id="project">
      <h1 className="title">{t('project')}</h1>
      <div className="line-wrapper">
        <ul className="timeline">
          {isLoading
            ? '加载中'
            : data.data.map((item, index) => {
                return (
                  <li key={item.id} className="info">
                    <h5>
                      {i18n.language === 'en' ? item.ENname : item.CNname}
                    </h5>

                    <i>{item.time}</i>
                    <p className="text-muted">
                      {i18n.language === 'en' ? item.ENdetail : item.CNdetail}
                    </p>
                  </li>
                );
              })}
        </ul>

        {/* <Timeline
          pending="Recording..."
          items={[
            {
              color: '#186ac0',
              children:
                'Deeply involved in the Deep-time Digital Earth (DDE) Big Science Program. This program is the intersection of Earth science and information science, computer, and big data research. Collaborators are geoscience and computer experts from CAS, Tsinghua University, NTU, Shanghai Jiaotong University, Zhejiang University, University of Geosciences (Beijing, Wuhan), and Nanjing University of Information Engineering.',
            },
            {
              color: '#186ac0',
              children: 'Solve initial network problems 2015-09-01',
            },
            {
              color: '#186ac0',
              children: 'Technical testing 2015-09-01',
            },
          ]}
        /> */}
      </div>
    </ProjectWrapper>
  );
});
export default Project;

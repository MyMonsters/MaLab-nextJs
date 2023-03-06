import React, { memo, useRef } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts-for-react';
// 引入柱状图
// import 'echarts/lib/chart/bar';
// // 引入提示框和标题组件
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';
import { MymapWrapper } from './style';

export default memo(function Mymap() {
  const myRef = useRef(null);
  const initEcharts = () => {
    console.log(echarts);
    // var mychartMap = echarts.init(myRef);
    let point = [{ pageview: 2, country: 'china' }];
    const series = point.map((item) => {
      return {
        type: 'scatter',
        coordinateSystem: 'geo',
        // blendMode: 'difference',
        symbolSize: 7, // 点位大小
        itemStyle: {
          // color: '#ce6a73', // 各个点位的颜色设置
          // color: '#9a5562',
          color: '#1f77b6',
          opacity: 1, // 透明度
          borderWidth: 1, // 边框宽度
          borderColor: 'rgba(255,255,255,0)', //rgba(180, 31, 107, 0.8)
          borderJoin: 'round',

          shadowBlur: 10,
          // shadowColor: 'rgba(120, 36, 50, 0.5)',
          shadowOffsetY: 5,
        },
        tooltip: {
          backgroundColor: 'rgba(255,255,255, 1)',
          // position: [],
          textStyle: {
            fontSize: 10,
            color: '#000',
          },
          formatter: () => {
            return item.pageview + 'visitors from ' + item.country;
          },
        },

        data: [[item.longitude, item.latitude]],
      };
    });
    let option = {
      backgroundColor: '',
      // backgroundColor:'#fff',
      tooltip: {
        trigger: 'item',
      },
      legend: {
        show: false,
        bottom: 150,
        width: 300,
        height: 200,
        textStyle: {
          fontSize: 20,
        },
      },
      geo: {
        map: 'world',

        // roam: true,
        // roam: true,
        zoom: 1.1,
        label: {
          emphasis: {
            show: false,
          },
        },
        // silent: true,
        itemStyle: {
          normal: {
            // areaColor: '#004981', //地图颜色
            areaColor: '#fff',
            // areaColor: "black",
            borderColor: 'black',
          },
          emphasis: {
            areaColor: '#0b1c2d',
          },
        },
      },
      series: series,
    };

    // if (option && typeof option === 'object') {
    //   mychartMap.setOption(option, true);
    // }
    // window.onresize = mychartMap.resize;
  };
  initEcharts();
  return (
    <MymapWrapper>
      <div ref={myRef}></div>
    </MymapWrapper>
  );
});

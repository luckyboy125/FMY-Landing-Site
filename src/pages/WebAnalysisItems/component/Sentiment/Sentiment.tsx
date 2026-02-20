import { graphic } from 'echarts';
import ReactEcharts from 'echarts-for-react';
import ChartLayout from '../../../../components/ChartLayout/ChartLayout';
import ActionButton from '../../../../components/ActionButton/ActionButton';
import './Sentiment.css';

export interface SentimentProps {
  value: number;
}

function Sentiment({ value }: SentimentProps) {
  const compare = ['This Week', 'This Month', 'This Year'];
  const option = {
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        radius: '115%',
        center: ['49.9%', '59.9%'],
        data: [
          {
            value: value,
            detail: {
              show: true,
              fontFamily: 'Helvetica',
              fontSize: 36,
              fontWeight: 500,
              lineHeight: 25,
              offsetCenter: [0, '35%'],
              formatter: function (str: number): string {
                return str + '%';
              }
            }
          }
        ],
        startAngle: 205,
        endAngle: -25,
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 30,
            color: [
              [
                1,
                new graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: 'rgba(106, 180, 255, 1)' },
                  { offset: 1, color: 'rgba(194, 166, 255, 1)' }
                ])
              ]
            ]
          }
        },
        pointer: {
          icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
          width: 23,
          length: '75%',
          itemStyle: { color: '#FFFFFF' }
        },
        anchor: {
          show: true,
          showAbove: true,
          icon: 'circle',
          size: 23,
          itemStyle: { color: '#fff', borderColor: '#DFDFDF', borderWidth: 8 }
        },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        detail: { valueAnimation: true, formatter: '{value} %', color: '#fff' }
      }
    ]
  };

  return (
    <ChartLayout
      name="Sentiment"
      button={
        <ActionButton
          name="Show"
          content="This week"
          className="sentimentBtn"
          dropRootStyle="childRoot"
          dropRoot={
            <>
              {compare?.map((item, index) => (
                <div key={index} className="item">
                  <div className="statusDot"></div>
                  {item}
                </div>
              ))}
            </>
          }
        />
      }
      className="topPlatforms"
    >
      <div className="chartRoot">
        <ReactEcharts option={option} />
        <span className="gaugeMoreDetail">Positive sentiment</span>
        <span className="gaugeDirection negative">Negative</span>
        <span className="gaugeDirection positive">Positive</span>
      </div>
    </ChartLayout>
  );
}

export default Sentiment;

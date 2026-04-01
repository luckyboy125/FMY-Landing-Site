import { useEffect, useState } from 'react';
import { doughnutChartColorData } from '../../helpers/chart.helper';
import Stats from './component/Stats/Stats';
import Sentiment from './component/Sentiment/Sentiment';
import TopPlatforms from './component/TopPlatforms/TopPlatforms';
import ActionButton from '../../components/ActionButton/ActionButton';
import CustomizeLineChart from '../../components/CustomizeLineChart/CustomizeLineChart';
import CustomizeDoughnutChart from '../../components/CustomizeDoughnutChart/CustomizeDoughnutChart';
import handImage from '../../asset/images/hand.svg';
import './WebAnalysisItem.css';

function WebAnalysisItems() {
  const [mockLineData, setMockLineData] = useState<number[]>([
    100, 120, 124, 300, 145, 50, 100
  ]);
  const [mockDoughnutData, setMockDoughnutData] = useState<number[]>([
    100, 120, 124, 300, 145, 50
  ]);

  useEffect(() => {
    const id = setInterval(() => {
      setMockLineData([
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900)
      ]);
      setMockDoughnutData([
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900)
      ]);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const doughnutChartData = {
    label: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth']
  };
  const datePeriod = ['Last week', 'Last week', 'Last week', 'Custom'];
  const compare = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'];

  return (
    <div className="web-analysis">
      <div className="web-analysis__header">
        <div>
          <p className="web-analysis__hello">
            Hello, Nimrod <img src={handImage} alt="hand" />
          </p>
          <p className="web-analysis__header-desc">
            Here is an overview of the project.
          </p>
        </div>
        <div className="web-analysis__header-btn">Lorem ipsum</div>
      </div>
      <div className="web-analysis__chart-container">
        <div className="web-analysis__chart-header">
          <div className="web-analysis__database-section">
            <div className="web-analysis__header-item-title">Database Items</div>
            <div className="web-analysis__chart-tools">
              <ActionButton
                name="Show"
                content="This Week"
                className="web-analysis__period-btn"
                panelClassName="web-analysis__period-dropdown"
                panelContent={
                  <>
                    {datePeriod?.map((item, index) => (
                      <div key={index} className="web-analysis__period-dropdown-item">
                        {item}
                      </div>
                    ))}
                  </>
                }
              />
              <ActionButton
                content="Compare"
                type="common"
                className="web-analysis__compare-btn"
                panelClassName="web-analysis__compare-dropdown"
                panelContent={
                  <>
                    {compare?.map((item, index) => (
                      <div key={index} className="web-analysis__compare-dropdown-item">
                        {item}
                      </div>
                    ))}
                  </>
                }
              />
            </div>
          </div>
          <div className="web-analysis__cases-section">
            <div className="web-analysis__header-item-title">Cases</div>
          </div>
        </div>
        <div className="web-analysis__chart-content">
          <div className="web-analysis__database-section">
            <div className="web-analysis__description">
              <div
                className="web-analysis__description-item"
                style={{ paddingBottom: '27px' }}
              >
                <div className="web-analysis__description-item-title">
                  Total items this week
                </div>
                <div
                  className="web-analysis__description-item-count"
                  style={{
                    fontSize: '40px',
                    color: '#75b3ff',
                    fontWeight: 400
                  }}
                >
                  10,324
                </div>
              </div>
              <div
                className="web-analysis__description-item"
                style={{ paddingTop: '26px', paddingBottom: '30px' }}
              >
                <div className="web-analysis__description-item-title">
                  Changes from last week
                </div>
                <div
                  className="web-analysis__description-item-count"
                  style={{ color: '#0fdf63' }}
                >
                  +12%
                </div>
              </div>
              <div
                className="web-analysis__description-item"
                style={{ paddingTop: '26px', paddingBottom: '0px !important' }}
              >
                <div className="web-analysis__description-item-title">Total items in DB</div>
                <div className="web-analysis__description-item-count" style={{ color: '#fff' }}>
                  5,403
                </div>
              </div>
            </div>
            <div className="web-analysis__line-chart">
              <CustomizeLineChart
                labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
                data={[
                  {
                    lineColor: ['#6AB4FF', '#C2A6FF'],
                    value: mockLineData,
                    fill: true
                  }
                ]}
                width={717}
                height={274}
              />
            </div>
          </div>
          <div className="web-analysis__cases-section">
            <div className="web-analysis__description">
              <div className="web-analysis__description-item">
                <div className="web-analysis__description-item-title">Lorem ipsum</div>
                <div className="web-analysis__description-item-count" style={{ color: '#fff' }}>
                  53
                </div>
              </div>
              <div className="web-analysis__description-item">
                <div className="web-analysis__description-item-title">Lorem ipsum</div>
                <div className="web-analysis__description-item-count" style={{ color: '#fff' }}>
                  +2
                </div>
              </div>
              <div className="web-analysis__description-item">
                <div className="web-analysis__description-item-title">Lorem ipsum</div>
                <div className="web-analysis__description-item-count" style={{ color: '#fff' }}>
                  Lorem ipsum
                </div>
              </div>
            </div>
            <div className="web-analysis__doughnut">
              <CustomizeDoughnutChart
                data={mockDoughnutData}
                labels={doughnutChartData.label}
                segmentColors={doughnutChartColorData}
                showCenterValue
              />
              <div className="web-analysis__doughnut-desc">
                {doughnutChartData.label.map((item, index) => (
                  <div className="web-analysis__doughnut-desc-item" key={index}>
                    <div
                      className="web-analysis__doughnut-icon"
                      style={{
                        background: `linear-gradient(238.95deg, ${doughnutChartColorData[index]?.first} 31.21%, ${doughnutChartColorData[index]?.last} 62.45%)`
                      }}
                    />
                    <div className="web-analysis__doughnut-item-name">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="web-analysis__second-part">
        <Stats />
        <TopPlatforms />
        <Sentiment value={78} />
      </div>
    </div>
  );
}

export default WebAnalysisItems;

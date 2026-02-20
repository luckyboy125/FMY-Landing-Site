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

function WebAnalysisItems(): JSX.Element {
  const [mockLineData, setMockLineData] = useState<number[]>([
    100, 120, 124, 300, 145, 50
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
    <div className="webAnalysisRoot">
      <div className="webAnalysisHeader">
        <div>
          <p className="analysisHello">
            Hello, Nimrod <img src={handImage} alt="hand" />
          </p>
          <p className="analysisHeaderDes">
            Here is an overview of the project.
          </p>
        </div>
        <div className="webAnalysisHeaderBtn">Lorem ipsum</div>
      </div>
      <div className="chartContainer">
        <div className="chartHeader">
          <div className="databasePart">
            <div className="headerItemTitle">Database Items</div>
            <div className="chartTools">
              <ActionButton
                name="Show"
                content="This Week"
                className="chartPeriod"
                dropRootStyle="periodChildRoot"
                dropRoot={
                  <>
                    {datePeriod?.map((item, index) => (
                      <div key={index} className="item">
                        {item}
                      </div>
                    ))}
                  </>
                }
              />
              <ActionButton
                content="Compare"
                type="common"
                className="chartCompare"
                dropRootStyle="compareChildRoot"
                dropRoot={
                  <>
                    {compare?.map((item, index) => (
                      <div key={index} className="item">
                        {item}
                      </div>
                    ))}
                  </>
                }
              />
            </div>
          </div>
          <div className="casesPart">
            <div className="headerItemTitle">Cases</div>
          </div>
        </div>
        <div className="chartContent">
          <div className="databasePart">
            <div className="descriptionRoot">
              <div
                className="descriptionItem"
                style={{ paddingBottom: '27px' }}
              >
                <div className="descriptionItemTitle">
                  Total items this week
                </div>
                <div
                  className="descriptionItemCount"
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
                className="descriptionItem"
                style={{ paddingTop: '26px', paddingBottom: '30px' }}
              >
                <div className="descriptionItemTitle">
                  Changes from last week
                </div>
                <div
                  className="descriptionItemCount"
                  style={{ color: '#0fdf63' }}
                >
                  +12%
                </div>
              </div>
              <div
                className="descriptionItem"
                style={{ paddingTop: '26px', paddingBottom: '0px !important' }}
              >
                <div className="descriptionItemTitle">Total items in DB</div>
                <div className="descriptionItemCount" style={{ color: '#fff' }}>
                  5,403
                </div>
              </div>
            </div>
            <div className="lineChartRoot">
              <CustomizeLineChart
                label={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
                data={[
                  {
                    line_color: ['#6AB4FF', '#C2A6FF'],
                    value: mockLineData,
                    fill: true
                  }
                ]}
                width={717}
                height={274}
              />
            </div>
          </div>
          <div className="casesPart">
            <div className="descriptionRoot">
              <div className="descriptionItem">
                <div className="descriptionItemTitle">Lorem ipsum</div>
                <div className="descriptionItemCount" style={{ color: '#fff' }}>
                  53
                </div>
              </div>
              <div className="descriptionItem">
                <div className="descriptionItemTitle">Lorem ipsum</div>
                <div className="descriptionItemCount" style={{ color: '#fff' }}>
                  +2
                </div>
              </div>
              <div className="descriptionItem">
                <div className="descriptionItemTitle">Lorem ipsum</div>
                <div className="descriptionItemCount" style={{ color: '#fff' }}>
                  Lorem ipsum
                </div>
              </div>
            </div>
            <div className="doughnutChartRoot">
              <CustomizeDoughnutChart
                data={mockDoughnutData}
                label={doughnutChartData.label}
                colorInfo={doughnutChartColorData}
                showNumber
              />
              <div className="doughnutChartDes">
                {doughnutChartData.label.map((item, index) => (
                  <div className="doughnutChartDesItem" key={index}>
                    <div
                      className="doughnutChartIcon"
                      style={{
                        background: `linear-gradient(238.95deg, ${doughnutChartColorData[index]?.first} 31.21%, ${doughnutChartColorData[index]?.last} 62.45%)`
                      }}
                    />
                    <div className="doughnutChartItemName">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secondPart">
        <Stats />
        <TopPlatforms />
        <Sentiment value={78} />
      </div>
    </div>
  );
}

export default WebAnalysisItems;

import { useEffect, useState } from 'react';
import { Vega } from 'react-vega';
import type { VisualizationSpec } from 'vega-embed';
import { doughnutChartColorData } from '../../../../helpers/chart.helper';
import ColorBtn from '../../../../components/ColorBtn/ColorBtn';
import CardLayout from '../../../../components/CardLayout/CardLayout';
import RoundButton from '../../../../components/RoundButton/RoundButton';
import SearchInput from '../../../../components/SearchInput/SearchInput';
import ThreeDotBtn from '../../../../components/ThreeDotBtn/ThreeDotBtn';
import ActionButton from '../../../../components/ActionButton/ActionButton';
import CustomizeTable from '../../../../components/CustomizeTable/CustomizeTable';
import FilterDropdown from '../../../../components/FilterDropdown/FilterDropdown';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import CustomizeLineChart from '../../../../components/CustomizeLineChart/CustomizeLineChart';
import CustomizeDoughnutChart from '../../../../components/CustomizeDoughnutChart/CustomizeDoughnutChart';
import person3 from '../../../../asset/person3.svg';
import csv from '../../../../asset/images/csv_icon.svg';
import refresh from '../../../../asset/images/refresh_icon.svg';
import youtube from '../../../../asset/images/social/youtube.svg';
import more_tool from '../../../../asset/images/more_tool_icon.svg';
import more_detail from '../../../../asset/images/more_detail_icon.svg';
import './Service.css';

interface ServiceTableRow {
  item: string;
  user: string;
  addeddate: string;
  addbyuser: { name: string; image: string };
  case: string;
  priority: string;
}

const WordCloudOption = {
  $schema: 'https://vega.github.io/schema/vega/v5.json',
  description:
    'A word cloud visualization depicting Vega research paper abstracts.',
  width: 1850,
  height: 351,
  padding: 0,
  data: [
    {
      name: 'table',
      values: [
        'Even with the snow falling outside, she felt it appropriate to wear her bikini 80% Israel World.',
        "If you spin around three times, you'll start to feel melancholy.",
        "Although it wasn't a pot of gold, Nancy was still enthralled at what she found at the end of the rainbow.",
        'He learned the hardest lesson of his life and had the scars, both physical and mental, to prove it.',
        'She says she has the ability to hear the soundtrack of your life.',
        'Giving directions that the mountains are to the west only works when you can see them.',
        'Everyone was curious about the large white blimp that appeared overnight.',
        "The bullet pierced the window shattering it before missing Danny's head by mere millimeters.",
        "I made myself a peanut butter sandwich as I didn't want to subsist on veggie crackers.",
        'The best part of marriage is animal crackers with peanut butter.',
        'I love bacon, beer, birds, and baboons.',
        'The minute she landed she understood the reason this was a fly-over state.',
        'The shark-infested South Pine channel was the only way in or out.',
        'She is never happy until she finds something to be unhappy about; then, she is overjoyed.',
        'The thunderous roar of the jet overhead confirmed her worst fears.',
        'The fence was confused about whether it was supposed to keep things in or keep things out.',
        'Cursive writing is the best way to build a race track.',
        'Nobody has encountered an explosive daisy and lived to tell the tale.',
        'He had a vague sense that trees gave birth to dinosaurs.'
      ],
      transform: [
        {
          type: 'countpattern',
          field: 'data',
          case: 'upper',
          pattern: "[\\w']{3,}",
          stopwords:
            "(i|me|my|myself|we|us|our|ours|ourselves|you|your|yours|yourself|yourselves|he|him|his|himself|she|her|hers|herself|it|its|itself|they|them|their|theirs|themselves|what|which|who|whom|whose|this|that|these|those|am|is|are|was|were|be|been|being|have|has|had|having|do|does|did|doing|will|would|should|can|could|ought|i'm|you're|he's|she's|it's|we're|they're|i've|you've|we've|they've|i'd|you'd|he'd|she'd|we'd|they'd|i'll|you'll|he'll|she'll|we'll|they'll|isn't|aren't|wasn't|weren't|hasn't|haven't|hadn't|doesn't|don't|didn't|won't|wouldn't|shan't|shouldn't|can't|cannot|couldn't|mustn't|let's|that's|who's|what's|here's|there's|when's|where's|why's|how's|a|an|the|and|but|if|or|because|as|until|while|of|at|by|for|with|about|against|between|into|through|during|before|after|above|below|to|from|up|upon|down|in|out|on|off|over|under|again|further|then|once|here|there|when|where|why|how|all|any|both|each|few|more|most|other|some|such|no|nor|not|only|own|same|so|than|too|very|say|says|said|shall)"
        },
        {
          type: 'formula',
          as: 'angle',
          expr: '[-90, 0, 90][~~(random() * 3)]'
        },
        {
          type: 'formula',
          as: 'weight',
          expr: "if(datum.text=='VEGA', 600, 300)"
        }
      ]
    }
  ],
  scales: [
    {
      name: 'color',
      type: 'ordinal',
      domain: { data: 'table', field: 'text' },
      range: [
        '#75B3FF',
        '#E8699F',
        '#A9FFBB',
        '#FFDC5D',
        '#fff',
        '#FF703D',
        '#C2A6FF'
      ]
    }
  ],
  marks: [
    {
      type: 'text',
      from: { data: 'table' },
      encode: {
        enter: {
          text: { field: 'text' },
          align: { value: 'center' },
          baseline: { value: 'alphabetic' },
          fill: { scale: 'color', field: 'text' }
        },
        update: { fillOpacity: { value: 1 } },
        hover: { fillOpacity: { value: 0.5 } }
      },
      transform: [
        {
          type: 'wordcloud',
          size: [1850, 351],
          text: { field: 'text' },
          rotate: { field: 'datum.angle' },
          font: 'Helvetica Neue, Arial',
          fontWeight: 700,
          fontSize: { field: 'datum.count' },
          fontSizeRange: [25, 50],
          padding: 5
        }
      ]
    }
  ]
};

function Service() {
  const [searchValue, setSearchValue] = useState('');
  const [mockTableData, setMockTableData] = useState<ServiceTableRow[]>([]);
  const [mockLineData, setMockLineData] = useState<number[]>([]);
  const [mockDoughnutData, setMockDoughnutData] = useState<number[]>([]);

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      setMockTableData((pre) => [
        ...pre,
        {
          item: 'Post',
          user: 'Olive Yew',
          addeddate: 'June 26, 2022 15:45',
          addbyuser: { name: 'Nimrod', image: person3 },
          case: 'Lorem ipsum',
          priority: 'Medium'
        }
      ]);
    }
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

  return (
    <>
      <div className="service service__row--main">
        <CardLayout
          className="service__main-card"
          contentStyle="service__main-card-body"
          headerStyle="service__main-card-header"
          header={
            <>
              <GradientButton>Service</GradientButton>
              <div className="service__section-title">Related cases</div>
            </>
          }
        >
          <div className="service__stats">
            <div
              className="service__stats-item"
              style={{ marginTop: '4px', paddingBottom: '24px' }}
            >
              <div className="service__stats-label">Total items</div>
              <div
                className="service__stats-value"
                style={{ color: '#0FDF63' }}
              >
                630
              </div>
            </div>
            <div className="service__stats-item" style={{ padding: '28px 0 28px' }}>
              <div className="service__stats-label">
                New items (past 7 days)
              </div>
              <div
                className="service__stats-value"
                style={{ color: '#75B3FF' }}
              >
                100
              </div>
            </div>
            <div className="service__stats-item" style={{ paddingTop: '31px' }}>
              <div className="service__stats-label">Added date</div>
              <div className="service__stats-value" style={{ color: '#fff' }}>
                17 Nov 2022
              </div>
            </div>
          </div>
          <div className="service__doughnut-wrap">
            <CustomizeDoughnutChart
              data={mockDoughnutData}
              labels={['first', 'second', 'third', 'fourth', 'fifth', 'sixth']}
              segmentColors={doughnutChartColorData}
            />
            <div className="service__doughnut-legend">
              {['first', 'second', 'third', 'fourth', 'fifth', 'sixth'].map(
                (item, index) => (
                  <div className="service__doughnut-legend-item" key={index}>
                    <div
                      className="service__doughnut-legend-swatch"
                      style={{
                        background: `linear-gradient(238.95deg, ${doughnutChartColorData[index]?.first} 31.21%, ${doughnutChartColorData[index]?.last} 62.45%)`
                      }}
                    />
                    <div className="service__doughnut-legend-label">{item}</div>
                  </div>
                )
              )}
            </div>
          </div>
          <RoundButton className="service__actions-btn" action={() => {}} />
        </CardLayout>
        <CardLayout
          className="service__tag-over-time-card"
          contentStyle="service__tag-over-time-content"
          headerStyle="service__tag-over-time-header"
          header={
            <>
              <div className="service__section-title">Case tagging over time</div>
              <ActionButton
                name="Show"
                content="Last Week"
                className="service__time-tool"
              />
            </>
          }
        >
          <div className="service__line-chart-wrap">
            <CustomizeLineChart
              labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
              data={[
                {
                  lineColor: ['#6AB4FF', '#C2A6FF'],
                  value: mockLineData,
                  fill: true
                }
              ]}
              width={714}
              height={280}
            />
          </div>
        </CardLayout>
      </div>
      <CardLayout
        className="service__word-cloud-section"
        headerStyle="service__word-cloud-header"
        header={<div className="service__word-cloud-title">Word Cloud</div>}
        contentStyle="service__word-cloud-content"
      >
        <Vega spec={WordCloudOption as VisualizationSpec} actions={false} />
      </CardLayout>
      <CustomizeTable
        className="service__table-section"
        header={
          <div className="service__table-header">
            <div className="service__table-title">Goverment</div>
            <SearchInput
              action={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchValue(e.target.value)
              }
              inputValue={searchValue}
              className="service__table-search"
              inputWith
            />
            <div className="service__toolbar">
              <FilterDropdown className="service__toolbar-btn" type="filter" />
              <FilterDropdown className="service__toolbar-btn" />
              <img src={refresh} alt="tool" className="service__toolbar-btn" />
              <img src={csv} alt="tool" className="service__toolbar-btn" />
              <img src={more_tool} alt="tool" className="service__toolbar-btn" />
              <img src={more_detail} alt="tool" className="service__toolbar-btn" />
            </div>
          </div>
        }
        columnHeaders={[
          '',
          'Item',
          'User',
          'Added date',
          'Added by',
          'Case',
          'Priority',
          'Screenshot',
          'Link',
          ''
        ]}
        children={mockTableData.map((item, index) => (
          <tr key={index}>
            <td>
              <img src={youtube} alt="social_icon" />
            </td>
            <td>{item.item}</td>
            <td>{item.user}</td>
            <td>{item.addeddate}</td>
            <td>
              <img src={item.addbyuser.image} alt="avatar" />{' '}
              {item.addbyuser.name}
            </td>
            <td>{item.case}</td>
            <td>
              <ColorBtn label="Medium" width={130} showArrow color="#37CE4A" />
            </td>
            <td>View</td>
            <td>Link</td>
            <td>
              <ThreeDotBtn className="service__actions-btn" action={() => {}} />
            </td>
          </tr>
        ))}
      />
    </>
  );
}

export default Service;

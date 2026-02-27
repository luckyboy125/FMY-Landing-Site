import { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Vega } from 'react-vega';
import type { VisualizationSpec } from 'vega-embed';
import { comparisonDoughnutChartColorData } from '../../../../helpers/chart.helper';
import ColorBtn from '../../../../components/ColorBtn/ColorBtn';
import CardLayout from '../../../../components/CardLayout/CardLayout';
import ModalLayout from '../../../../components/ModalLayout/ModalLayout';
import SearchInput from '../../../../components/SearchInput/SearchInput';
import ThreeDotBtn from '../../../../components/ThreeDotBtn/ThreeDotBtn';
import ActionButton from '../../../../components/ActionButton/ActionButton';
import FilterDropdown from '../../../../components/FilterDropdown/FilterDropdown';
import CustomizeTable from '../../../../components/CustomizeTable/CustomizeTable';
import CustomizeLineChart from '../../../../components/CustomizeLineChart/CustomizeLineChart';
import CustomizeDoughnutChart from '../../../../components/CustomizeDoughnutChart/CustomizeDoughnutChart';
import person3 from '../../../../asset/person3.svg';
import csv from '../../../../asset/images/csv_icon.svg';
import closeIcon from '../../../../asset/images/close_icon.svg';
import refresh from '../../../../asset/images/refresh_icon.svg';
import youtube from '../../../../asset/images/social/youtube.svg';
import more_tool from '../../../../asset/images/more_tool_icon.svg';
import more_detail from '../../../../asset/images/more_detail_icon.svg';
import './Comparison.css';

interface ComparisonTableRow {
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
  width: 872,
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
          type: 'countpattern' as const,
          field: 'data',
          case: 'upper',
          pattern: "[\\w']{3,}",
          stopwords:
            "(i|me|my|myself|we|us|our|ours|ourselves|you|your|yours|yourself|yourselves|he|him|his|himself|she|her|hers|herself|it|its|itself|they|them|their|theirs|themselves|what|which|who|whom|whose|this|that|these|those|am|is|are|was|were|be|been|being|have|has|had|having|do|does|did|doing|will|would|should|can|could|ought|i'm|you're|he's|she's|it's|we're|they're|i've|you've|we've|they've|i'd|you'd|he'd|she'd|we'd|they'd|i'll|you'll|he'll|she'll|we'll|they'll|isn't|aren't|wasn't|weren't|hasn't|haven't|hadn't|doesn't|don't|didn't|won't|wouldn't|shan't|shouldn't|can't|cannot|couldn't|mustn't|let's|that's|who's|what's|here's|there's|when's|where's|why's|how's|a|an|the|and|but|if|or|because|as|until|while|of|at|by|for|with|about|against|between|into|through|during|before|after|above|below|to|from|up|upon|down|in|out|on|off|over|under|again|further|then|once|here|there|when|where|why|how|all|any|both|each|few|more|most|other|some|such|no|nor|not|only|own|same|so|than|too|very|say|says|said|shall)"
        },
        {
          type: 'formula' as const,
          as: 'angle',
          expr: '[-90, 0, 90][~~(random() * 3)]'
        },
        {
          type: 'formula' as const,
          as: 'weight',
          expr: "if(datum.text=='VEGA', 600, 300)"
        }
      ]
    }
  ],
  scales: [
    {
      name: 'color',
      type: 'ordinal' as const,
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
      type: 'text' as const,
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
          type: 'wordcloud' as const,
          size: [872, 351] as [number, number],
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

function Comparison() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  const [searchValue, setSearchValue] = useState('');
  const tagOverTimeDropdown = ['Last week', 'Last week', 'Last week', 'Custom'];
  const [mockTableData, setMockTableData] = useState<ComparisonTableRow[]>([]);
  const [mockLineData1, setMockLineData1] = useState<number[]>([]);
  const [mockLineData2, setMockLineData2] = useState<number[]>([]);
  const [mockLineData3, setMockLineData3] = useState<number[]>([]);
  const [mockDoughnutData, setMockDoughnutData] = useState<number[]>([]);
  const [commentArea, setCommentArea] = useState('');

  const handleViewModal = useCallback(
    (index: number) => {
      const next = new URLSearchParams(location.search);
      next.set('tableviewmodal_show', String(index));
      navigate({
        pathname: location.pathname,
        search: next.toString()
      });
    },
    [location.pathname, navigate, location.search]
  );

  const handleViewModalClose = useCallback(() => {
    const next = new URLSearchParams(location.search);
    next.delete('tableviewmodal_show');
    navigate({
      pathname: location.pathname,
      search: next.toString()
    });
  }, [location.pathname, navigate, location.search]);

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
    setMockLineData1([
      Math.floor(Math.random() * 300 + 1200),
      Math.floor(Math.random() * 300 + 1200),
      Math.floor(Math.random() * 300 + 1200),
      Math.floor(Math.random() * 300 + 1200),
      Math.floor(Math.random() * 300 + 1200),
      Math.floor(Math.random() * 300 + 1200),
      Math.floor(Math.random() * 300 + 1200)
    ]);
    setMockLineData2([
      Math.floor(Math.random() * 300 + 900),
      Math.floor(Math.random() * 300 + 900),
      Math.floor(Math.random() * 300 + 900),
      Math.floor(Math.random() * 300 + 900),
      Math.floor(Math.random() * 300 + 900),
      Math.floor(Math.random() * 300 + 900),
      Math.floor(Math.random() * 300 + 900)
    ]);
    setMockLineData3([
      Math.floor(Math.random() * 300 + 600),
      Math.floor(Math.random() * 300 + 600),
      Math.floor(Math.random() * 300 + 600),
      Math.floor(Math.random() * 300 + 600),
      Math.floor(Math.random() * 300 + 600),
      Math.floor(Math.random() * 300 + 600),
      Math.floor(Math.random() * 300 + 600)
    ]);
    setMockDoughnutData([
      Math.floor(Math.random() * 500 + 900),
      Math.floor(Math.random() * 500 + 900),
      Math.floor(Math.random() * 500 + 900)
    ]);
  }, []);

  return (
    <>
      <div className="comparison">
        <div className="comparison__banner">Government - Services - Army</div>
        <div className="comparison__row comparison__row--charts">
          <CardLayout
            className="comparison__tag-over-time-card"
            contentStyle="comparison__tag-over-time-content"
            headerStyle="comparison__tag-over-time-header"
            header={
              <>
                <div className="comparison__section-title">Case tagging over time</div>
                <ActionButton
                  name="Show"
                  content="Last Week"
                  className="comparison__time-tool"
                  panelClassName="comparison__time-dropdown"
                  panelContent={
                    <>
                      {tagOverTimeDropdown?.map((item, index) => (
                        <div key={index} className="comparison__dropdown-item">
                          {item}
                        </div>
                      ))}
                    </>
                  }
                />
              </>
            }
          >
            <div className="comparison__line-chart-wrap">
              <CustomizeLineChart
                labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
                data={[
                  {
                    lineColor: ['#FEBD42', '#EFD7AB'],
                    value: mockLineData1,
                    fill: false
                  },
                  {
                    lineColor: ['#A9FFBB', '#6FFF8D'],
                    value: mockLineData2,
                    fill: false
                  },
                  {
                    lineColor: ['#5D43FF', '#A5A4FF'],
                    value: mockLineData3,
                    fill: false
                  }
                ]}
                width={714}
                height={280}
              />
            </div>
          </CardLayout>
          <CardLayout
            className="comparison__tagging-card"
            contentStyle="comparison__tagging-content"
            headerStyle="comparison__tagging-header"
            header={<div className="comparison__section-title">Cases tagging</div>}
          >
            <div className="comparison__doughnut-wrap">
              <CustomizeDoughnutChart
                data={mockDoughnutData}
                labels={['Government', 'Services', 'Army']}
                segmentColors={comparisonDoughnutChartColorData}
              />
              <div className="comparison__doughnut-legend">
                {['Government', 'Services', 'Army'].map((item, index) => (
                  <div className="comparison__doughnut-legend-item" key={index}>
                    <div
                      className="comparison__doughnut-legend-swatch"
                      style={{
                        background: `linear-gradient(238.95deg, ${comparisonDoughnutChartColorData[index]?.first} 31.21%, ${comparisonDoughnutChartColorData[index]?.last} 62.45%)`
                      }}
                    />
                    <div className="comparison__doughnut-legend-label">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardLayout>
        </div>
        <div className="comparison__row comparison__row--word-clouds">
          <CardLayout
            className="comparison__word-cloud-card comparison__word-cloud-card--government"
            headerStyle="comparison__word-cloud-header"
            header={<div className="comparison__word-cloud-title">Word Cloud - Government</div>}
            contentStyle="comparison__word-cloud-content"
          >
            <Vega spec={WordCloudOption as VisualizationSpec} actions={false} />
          </CardLayout>
          <CardLayout
            className="comparison__word-cloud-card comparison__word-cloud-card--services"
            headerStyle="comparison__word-cloud-header"
            header={<div className="comparison__word-cloud-title">Word Cloud - Services</div>}
            contentStyle="comparison__word-cloud-content"
          >
            <Vega spec={WordCloudOption as VisualizationSpec} actions={false} />
          </CardLayout>
        </div>
        <div className="comparison__row comparison__row--army">
          <CardLayout
            className="comparison__word-cloud-card comparison__word-cloud-card--army"
            headerStyle="comparison__word-cloud-header"
            header={<div className="comparison__word-cloud-title">Word Cloud - Army</div>}
            contentStyle="comparison__word-cloud-content"
          >
            <Vega spec={WordCloudOption as VisualizationSpec} actions={false} />
          </CardLayout>
        </div>
        <CustomizeTable
          className="comparison__table-section"
          header={
            <div className="comparison__table-header">
              <div className="comparison__table-title">Shared Items</div>
              <SearchInput
                action={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchValue(e.target.value)
                }
                inputValue={searchValue}
                className="comparison__table-search"
                inputWith
              />
              <div className="comparison__toolbar">
                <FilterDropdown className="comparison__toolbar-btn" type="filter" />
                <FilterDropdown className="comparison__toolbar-btn" />
                <img src={refresh} alt="tool" className="comparison__toolbar-btn" />
                <img src={csv} alt="tool" className="comparison__toolbar-btn" />
                <img src={more_tool} alt="tool" className="comparison__toolbar-btn" />
                <img src={more_detail} alt="tool" className="comparison__toolbar-btn" />
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
              <td onClick={() => handleViewModal(index)}>View</td>
              <td>Link</td>
              <td>
                <ThreeDotBtn className="comparison__actions-btn" action={() => {}} />
              </td>
            </tr>
          ))}
        />
        <ModalLayout
          show={!!query.get('tableviewmodal_show')}
          onClose={handleViewModalClose}
          className="comparison__view-modal"
        >
          <ThreeDotBtn className="comparison__actions-btn" action={() => {}} />
          <img src={closeIcon} alt="closIcon" onClick={handleViewModalClose} />
          <div className="comparison__view-modal-body">
            <div className="comparison__view-modal-media">+</div>
            <div className="comparison__view-modal-divider"></div>
            <div className="comparison__view-modal-content">
              <div className="comparison__section-title">General info:</div>
              <div className="comparison__view-modal-meta">
                <div className="comparison__view-modal-meta-item">Upload date:</div>
                <div className="comparison__view-modal-meta-item">Username:</div>
              </div>
              <div className="comparison__view-modal-section">
                <div className="comparison__section-title">Cases</div>
                <div className="comparison__view-modal-card">
                  <img src={person3} alt="avatart" />
                  <div className="comparison__view-modal-card-body">
                    <div className="comparison__view-modal-card-inner">
                      <div className="comparison__view-modal-card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque cras felis interdum tempor, lobortis
                        egestas volutpat consectetur.....
                      </div>
                      <div className="comparison__view-modal-card-date">Feb 6, 11:49 AM</div>
                    </div>
                  </div>
                  <ThreeDotBtn className="comparison__actions-btn" action={() => {}} />
                </div>
              </div>
              <div className="comparison__view-modal-section comparison__view-modal-section--comments">
                <div className="comparison__section-title">Comments:</div>
                <div className="comparison__view-modal-card">
                  <ThreeDotBtn className="comparison__actions-btn" action={() => {}} />
                  <textarea
                    placeholder="Comment here"
                    value={commentArea}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setCommentArea(e.target.value)
                    }
                  />
                  <div className="comparison__view-modal-submit">Post</div>
                </div>
              </div>
            </div>
          </div>
        </ModalLayout>
      </div>
    </>
  );
}

export default Comparison;

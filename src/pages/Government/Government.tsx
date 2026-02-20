import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Vega } from 'react-vega';
import GovernmentCard from './component/GovernmentCard/GovernmentCard';
import BackBtn from '../../components/BackBtn/BackBtn';
import SearchInput from '../../components/SearchInput/SearchInput';
import ActionButton from '../../components/ActionButton/ActionButton';
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown';
import ActionDropdown from '../../components/ActionDropdown/ActionDropdown';
import CustomizeLineChart from '../../components/CustomizeLineChart/CustomizeLineChart';
import csv from '../../asset/images/csv_icon.svg';
import messi1 from '../../asset/government/messi1.svg';
import messi2 from '../../asset/government/messi2.svg';
import messi3 from '../../asset/government/messi3.svg';
import messi4 from '../../asset/government/messi4.svg';
import mbappe from '../../asset/government/mbappe.svg';
import neymar1 from '../../asset/government/neymar1.svg';
import neymar2 from '../../asset/government/neymar2.svg';
import neymar3 from '../../asset/government/neymar3.svg';
import refresh from '../../asset/images/refresh_icon.svg';
import ronaldo1 from '../../asset/government/ronaldo1.svg';
import ronaldo2 from '../../asset/government/ronaldo2.svg';
import more_tool from '../../asset/images/more_tool_icon.svg';
import more_detail from '../../asset/images/more_detail_icon.svg';
import './Government.css';

const WordCloudOption = {
  $schema: 'https://vega.github.io/schema/vega/v5.json',
  description:
    'A word cloud visualization depicting Vega research paper abstracts.',
  width: 850,
  height: 350,
  padding: 0,
  data: [
    {
      name: 'table',
      values: [
        "Declarative visualization grammars can accelerate development, facilitate retargeting across platforms, and allow language-level optimizations. However, existing declarative visualization languages are primarily concerned with visual encoding, and rely on imperative event handlers for interactive behaviors. In response, we introduce a model of declarative interaction design for data visualizations. Adopting methods from reactive programming, we model low-level events as composable data streams from which we form higher-level semantic signals. Signals feed predicates and scale inversions, which allow us to generalize interactive selections at the level of item geometry (pixels) into interactive queries over the data domain. Production rules then use these queries to manipulate the visualization's appearance. To facilitate reuse and sharing, these constructs can be encapsulated as named interactors: standalone, purely declarative specifications of interaction techniques. We assess our model's feasibility and expressivity by instantiating it with extensions to the Vega visualization grammar. Through a diverse range of examples, we demonstrate coverage over an established taxonomy of visualization interaction techniques.",
        "We present Reactive Vega, a system architecture that provides the first robust and comprehensive treatment of declarative visual and interaction design for data visualization. Starting from a single declarative specification, Reactive Vega constructs a dataflow graph in which input data, scene graph elements, and interaction events are all treated as first-class streaming data sources. To support expressive interactive visualizations that may involve time-varying scalar, relational, or hierarchical data, Reactive Vega's dataflow graph can dynamically re-write itself at runtime by extending or pruning branches in a data-driven fashion. We discuss both compile- and run-time optimizations applied within Reactive Vega, and share the results of benchmark studies that indicate superior interactive performance to both D3 and the original, non-reactive Vega system."
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
      range: ['#fff', '#75B3FF', '#C2A6FF', '#B8B8B8']
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
          size: [850, 350],
          text: { field: 'text' },
          rotate: { field: 'datum.angle' },
          font: 'Helvetica Neue, Arial',
          fontSize: { field: 'datum.count' },
          fontWeight: { field: 'datum.weight' },
          fontSizeRange: [12, 36],
          padding: 5
        }
      ]
    }
  ]
};

function Government(): JSX.Element {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <>
      <div className="governmentRoot">
        <div className="governmentTitle">Government</div>
        <div className="governmentHeaderRoot">
          <BackBtn className="governmentHeaderLink" action={handleBack} />
          <ActionDropdown className="governmentHeaderBtn" />
        </div>
        <div className="chartContainer">
          <div className="chartHeader">
            <div className="databasePart">
              <div className="headerItemTitle">General info</div>
              <div className="chartTools">
                <ActionButton
                  name="Show"
                  content="This Week"
                  className="chartPeriod"
                />
                <ActionButton
                  content="Compare"
                  type="common"
                  className="chartCompare"
                />
              </div>
            </div>
            <div className="casesPart">
              <div className="headerItemTitle">Word Cloud</div>
            </div>
          </div>
          <div className="chartContent">
            <div className="databasePart">
              <div className="descriptionRoot">
                <div
                  className="descriptionItem"
                  style={{ paddingBottom: '27px' }}
                >
                  <div className="descriptionItemTitle">Total items</div>
                  <div
                    className="descriptionItemCount"
                    style={{
                      fontSize: '40px',
                      color: '#75b3ff',
                      fontWeight: 400
                    }}
                  >
                    108
                  </div>
                </div>
                <div
                  className="descriptionItem"
                  style={{ paddingTop: '26px', paddingBottom: '30px' }}
                >
                  <div className="descriptionItemTitle">
                    New items (past 7 days)
                  </div>
                  <div
                    className="descriptionItemCount"
                    style={{ color: '#0fdf63' }}
                  >
                    +12%
                  </div>
                </div>
                <div className="descriptionItem" style={{ paddingTop: '26px' }}>
                  <div className="descriptionItemTitle">Case open date</div>
                  <div
                    className="descriptionItemCount"
                    style={{ color: '#fff' }}
                  >
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
                      value: [1000, 1232, 1322, 900, 1488, 800, 1100],
                      fill: true
                    }
                  ]}
                  width={719}
                  height={275}
                />
              </div>
            </div>
            <div className="casesPart">
              <Vega spec={WordCloudOption} actions={false} />
            </div>
          </div>
        </div>
        <div className="governmentContentRoot">
          <div className="governmentHeader">
            <div className="governmentContentTitle">Items</div>
            <div className="governmentToolRoot">
              <SearchInput
                action={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchValue(e.target.value)
                }
                inputValue={searchValue}
                className="governmentSearchTool"
              />
              <FilterDropdown className="governmentSearchTool" type="filter" />
              <FilterDropdown className="governmentSearchTool" />
              <img src={refresh} alt="tool" />
              <img src={csv} alt="tool" />
              <img src={more_tool} alt="tool" />
              <img src={more_detail} alt="tool" />
            </div>
          </div>
          <div className="governmentContent">
            <div className="governmentContentItemRoot">
              <GovernmentCard
                imgRoot={<img src={neymar1} alt="neymar" />}
                className="governmentContentItem"
              />
              <GovernmentCard
                imgRoot={<img src={neymar3} alt="neymar" />}
                className="governmentContentItem"
              />
              <GovernmentCard
                imgRoot={<img src={messi3} alt="messi" />}
                className="governmentContentItem"
              />
              <GovernmentCard
                imgRoot={<img src={mbappe} alt="mbappe" />}
                className="governmentContentItem"
              />
            </div>
            <div className="governmentContentItemRoot">
              <GovernmentCard
                imgRoot={<img src={neymar2} alt="neymar" />}
                className="governmentContentItem"
              />
              <GovernmentCard
                imgRoot={<img src={messi2} alt="messi" />}
                className="governmentContentItem"
              />
              <GovernmentCard
                imgRoot={<img src={messi4} alt="messi" />}
                className="governmentContentItem"
              />
            </div>
            <div className="governmentContentItemRoot">
              <GovernmentCard
                imgRoot={<img src={messi1} alt="messi" />}
                className="governmentContentItem"
              />
              <GovernmentCard
                imgRoot={<img src={ronaldo1} alt="ronaldo" />}
                className="governmentContentItem"
              />
              <GovernmentCard
                imgRoot={<img src={ronaldo2} alt="ronaldo" />}
                className="governmentContentItem"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Government;

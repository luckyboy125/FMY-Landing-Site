import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Vega } from "react-vega";
import {
  post_percent_data,
  top_nfluencer,
  wordCloudAnalysisData,
} from "./Investigation.mock";
import Biocard from "./component/Biocard/Biocard";
import HashtagSelectInput from "./component/HashtagSelectInput/HashtagSelectInput";
import HashtagChartCard from "./component/HashtagChartCard/HashtagChartCard";
import ActionTab from "../../components/ActionTab/ActionTab";
import DropdownLayout from "../../components/DropdownLayout/DropdownLayout";
import DatabaseSearchDropdown from "../../components/DatabaseSearchDropdown/DatabaseSearchDropdown";
import person1 from "../../asset/person1.svg";
import searchIcon from "../../asset/images/search_icon_white.svg";
import _searchIcon from "../../asset/images/search_icon.svg";
import socialIcon from "../../asset/images/social/facebook_icon.svg";
import "./Investigation.css";

function Investigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const tabData = ["All", "Lorem", "Lorem", "Lorem", "Lorem"];
  const [searchUsername, setSearchUsername] = useState("");
  const [searchPost, setSearchPost] = useState("");

  const WordCloudOption = {
    $schema: "https://vega.github.io/schema/vega/v5.json",
    description:
      "A word cloud visualization depicting Vega research paper abstracts.",
    width: 1006,
    height: 590,
    padding: 0,
    data: [
      {
        name: "table",
        values: [
          "Declarative visualization grammars can accelerate development, facilitate retargeting across platforms, and allow language-level optimizations. However, existing declarative visualization languages are primarily concerned with visual encoding, and rely on imperative event handlers for interactive behaviors. In response, we introduce a model of declarative interaction design for data visualizations. Adopting methods from reactive programming, we model low-level events as composable data streams from which we form higher-level semantic signals. Signals feed predicates and scale inversions, which allow us to generalize interactive selections at the level of item geometry (pixels) into interactive queries over the data domain. Production rules then use these queries to manipulate the visualization’s appearance. To facilitate reuse and sharing, these constructs can be encapsulated as named interactors: standalone, purely declarative specifications of interaction techniques. We assess our model’s feasibility and expressivity by instantiating it with extensions to the Vega visualization grammar. Through a diverse range of examples, we demonstrate coverage over an established taxonomy of visualization interaction techniques.",
          "We present Reactive Vega, a system architecture that provides the first robust and comprehensive treatment of declarative visual and interaction design for data visualization. Starting from a single declarative specification, Reactive Vega constructs a dataflow graph in which input data, scene graph elements, and interaction events are all treated as first-class streaming data sources. To support expressive interactive visualizations that may involve time-varying scalar, relational, or hierarchical data, Reactive Vega’s dataflow graph can dynamically re-write itself at runtime by extending or pruning branches in a data-driven fashion. We discuss both compile- and run-time optimizations applied within Reactive Vega, and share the results of benchmark studies that indicate superior interactive performance to both D3 and the original, non-reactive Vega system.",
        ],
        transform: [
          {
            type: "countpattern",
            field: "data",
            case: "upper",
            pattern: "[\\w']{3,}",
            stopwords:
              "(i|me|my|myself|we|us|our|ours|ourselves|you|your|yours|yourself|yourselves|he|him|his|himself|she|her|hers|herself|it|its|itself|they|them|their|theirs|themselves|what|which|who|whom|whose|this|that|these|those|am|is|are|was|were|be|been|being|have|has|had|having|do|does|did|doing|will|would|should|can|could|ought|i'm|you're|he's|she's|it's|we're|they're|i've|you've|we've|they've|i'd|you'd|he'd|she'd|we'd|they'd|i'll|you'll|he'll|she'll|we'll|they'll|isn't|aren't|wasn't|weren't|hasn't|haven't|hadn't|doesn't|don't|didn't|won't|wouldn't|shan't|shouldn't|can't|cannot|couldn't|mustn't|let's|that's|who's|what's|here's|there's|when's|where's|why's|how's|a|an|the|and|but|if|or|because|as|until|while|of|at|by|for|with|about|against|between|into|through|during|before|after|above|below|to|from|up|upon|down|in|out|on|off|over|under|again|further|then|once|here|there|when|where|why|how|all|any|both|each|few|more|most|other|some|such|no|nor|not|only|own|same|so|than|too|very|say|says|said|shall)",
          },
          {
            type: "formula",
            as: "angle",
            expr: "[-90, -45, 0, 45, 90][~~(random() * 5)]",
          },
          {
            type: "formula",
            as: "weight",
            expr: "if(datum.text=='VEGA', 600, 300)",
          },
        ],
      },
    ],

    scales: [
      {
        name: "color",
        type: "ordinal",
        domain: { data: "table", field: "text" },
        range: ["#390F44", "#160462", "#13387B", "#280853"],
      },
    ],

    marks: [
      {
        type: "text",
        from: { data: "table" },
        encode: {
          enter: {
            text: { field: "text" },
            align: { value: "center" },
            baseline: { value: "alphabetic" },
            fill: { scale: "color", field: "text" },
          },
          update: {
            fillOpacity: { value: 1 },
          },
          hover: {
            fillOpacity: { value: 0.5 },
          },
        },
        transform: [
          {
            type: "wordcloud",
            size: [1006, 590],
            text: { field: "text" },
            rotate: { field: "datum.angle" },
            font: "Helvetica Neue, Arial",
            fontSize: { field: "datum.count" },
            fontWeight: { field: "datum.weight" },
            fontSizeRange: [30, 80],
            padding: 5,
          },
        ],
      },
    ],
  };

  const handleTab = (_tab) => {
    query.set("investigation_tab", _tab);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  return (
    <>
      <div className="investigationRoot">
        <div className="investigationHeaderRoot">
          <div>
            <div className="investigationHeaderTitle">Investigation</div>
            <ActionTab
              className="investigationHeaderTab"
              data={tabData}
              onSelect={(e) => handleTab(e)}
              select={
                query.get("investigation_tab") === null
                  ? tabData[0]
                  : query.get("investigation_tab")
              }
            />
          </div>
        </div>
        <div className="investigationContent">
          <div className="investigationContent1">
            <DatabaseSearchDropdown
              content="Cases"
              select="All"
              className="dropdown"
              type="keyword"
            />
            <div className="inputRoot">
              <img src={searchIcon} alt="search_icon" />
              <input
                placeholder="Enter username..."
                value={searchUsername}
                onChange={(e) => setSearchUsername(e.target.value)}
              />
              <div className="divline"></div>
              <DropdownLayout
                className="searchDropdown"
                dropRoot={
                  <>
                    <div className="item">
                      <div className="greenDot"></div>Last 7 Days
                    </div>
                    <div className="item">
                      <div className="greenDot"></div>Last 15 Days
                    </div>
                    <div className="item">
                      <div className="greenDot"></div>Last 30 Days
                    </div>
                    <div className="item">
                      <div className="greenDot"></div>Last 60 Days
                    </div>
                  </>
                }
                dropRootStyle="dropdownRoot"
              >
                <div className="dayBtn">
                  Last 15 Days <i className="fas fa-caret-down"></i>
                </div>
              </DropdownLayout>
              <div className="divline"></div>
              <div className="searchBtn">
                <img src={_searchIcon} alt="search_icon" />
              </div>
            </div>
          </div>
          <div className="investigationContent2">
            <div className="userAnalysisRoot">
              <div className="headerRoot">
                <div className="title">User analysis</div>
                <div className="viewDetail">
                  View Details <i className="fas fa-chevron-right"></i>
                </div>
              </div>
              <div className="nameRoot">
                <div className="front">
                  <img src={person1} alt="person" />
                  <div>
                    <div className="name">Victor Vance</div>
                    <div className="socialnameRoot">
                      <i className="fab fa-twitter"></i>
                      @vectorvance
                    </div>
                  </div>
                </div>
                <div className="end">
                  <i className="fas fa-map-marker-alt"></i>
                  New York, USA
                </div>
              </div>
              <div className="bio">Bio</div>
              <div className="bioRoot">
                <div className="itemRoot">
                  <Biocard
                    title="Followers"
                    count="204"
                    des="(178 last week)"
                    countDes={
                      <div className="biocardDes">
                        <i className="fas fa-caret-up"></i>105.23 %
                      </div>
                    }
                  />
                  <Biocard
                    title="Followers"
                    count="204"
                    des="(178 last week)"
                    countDes={
                      <div className="biocardDes">
                        <i className="fas fa-caret-up"></i>105.23 %
                      </div>
                    }
                  />
                  <Biocard
                    title="Followers"
                    count="204"
                    des="(178 last week)"
                    countDes={
                      <div className="biocardDes">
                        <i className="fas fa-caret-up"></i>105.23 %
                      </div>
                    }
                  />
                </div>
                <div className="itemRoot">
                  <Biocard
                    title="Followers"
                    count="204"
                    des="(178 last week)"
                    countDes={
                      <div className="biocardDes">
                        <i className="fas fa-caret-up"></i>105.23 %
                      </div>
                    }
                  />
                  <Biocard
                    title="Followers"
                    count="204"
                    des="(178 last week)"
                    countDes={
                      <div className="biocardDes">
                        <i className="fas fa-caret-up"></i>105.23 %
                      </div>
                    }
                  />
                  <Biocard
                    title="Followers"
                    count="204"
                    des="(178 last week)"
                    countDes={
                      <div className="biocardDes">
                        <i className="fas fa-caret-up"></i>105.23 %
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
            <div className="linkAnalysisRoot">
              <div className="title">Link analysis</div>
            </div>
          </div>
          <div className="investigationContent3">
            <div className="postAnalysisRoot">
              <div className="title">Post analysis</div>
              <div className="searchRoot">
                <input
                  value={searchPost}
                  placeholder="Search Here..."
                  onChange={(e) => setSearchPost(e.target.value)}
                />
                <div className="searchBtn">
                  <img src={_searchIcon} alt="search_icon" />
                </div>
              </div>
              <div className="postContentRoot">
                <div className="postHeaderRoot">
                  <div className="front">
                    <img src={person1} alt="avatar" />
                    <div>
                      <div className="nameRoot">
                        Myrtle Perkins
                        <div className="id">{`(@myrtleperkins)`}</div>
                      </div>
                      <div className="time">5hrs</div>
                    </div>
                  </div>
                  <div className="social">
                    <img src={socialIcon} alt="social_icon" />
                    Facebook
                  </div>
                </div>
                <div className="postContent">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  in diam proin tincidunt velit accumsan eget. Pulvinar urna,
                  sed nunc pretium consectetur diam. Dignissim cursus vestibulum
                  posuere placerat commodo nunc, mattis aliquam cursus. Posuere
                  placerat sed dolor eget integer. Nunc, condimentum interdum
                  nisl turpis praesent integer at. Ullamcorper scelerisque
                  quisque quam nibh laoreet a, tempus venenatis. Viverra tellus
                  urna ridiculus mauris et porta odio dui. Sit condimentum
                  aliquam ut nunc, fringilla tempus sodales pulvinar habitant.
                  Adipiscing ut adipiscing in scelerisque. Vel lorem nec
                  scelerisque augue tincidunt. Rhoncus maecenas sollicitudin
                  lacinia ac adipiscing. Morbi nec purus faucibus odio hac sit
                  ut ultrices dictum. Vitae maecenas convallis nisl et, iaculis
                  vulputate felis vitae. Nibh odio imperdiet magna vitae
                  consequat iaculis tempus massa. Et nunc nulla sit elementum,
                  laoreet justo. Senectus arcu est rutrum sagittis, vel. Lorem
                  tristique in vulputate morbi gravida nec. Tristique laoreet
                  neque nibh varius faucibus. Pellentesque eu sit in dui gravida
                  pellentesque. Risus, donec quis magna curabitur morbi
                  convallis tincidunt. Libero, pellentesque tempor, consequat
                  cum pellentesque diam a, morbi in. Enim adipiscing laoreet
                  consectetur consequat. Bibendum aliquet ut magna habitant
                  felis sit nunc. Ac nunc mauris massa pellentesque lectus
                  suspendisse. Read more
                </div>
                <div className="postPercentRoot">
                  {post_percent_data?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="item"
                        style={{ width: `${100 / post_percent_data.length}%` }}
                      >
                        <div className="itemContainer">
                          <div className="itemHeader">
                            <img src={item.des_icon} alt="icon" />
                            {item.title}
                          </div>
                          <div className="itemDes">{item.content}</div>
                          <div className="itemPercenRoot">
                            <div
                              className="percent_line"
                              style={{
                                width: `${item.percent}%`,
                                background: item.color,
                              }}
                            ></div>
                            <div className="white_line"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="hashtagAnalysisRoot">
              <div className="title">Hashtag analysis</div>
              <HashtagSelectInput className="hashSelect" />
              <div className="hashtagAnalysisRoot1">
                <HashtagChartCard
                  chartData={[
                    {
                      color: "#A0D7E7",
                      value: 60,
                    },
                    {
                      color: "#A0D7E7",
                      value: 90,
                    },
                    {
                      color: "#A0D7E7",
                      value: 30,
                    },
                    {
                      color: "#75B3FF",
                      value: 45,
                    },
                  ]}
                  title="Hashtage Used"
                  size="4.5M"
                  description="+58.2 %"
                  className="hashtagChartCard1"
                />
                <HashtagChartCard
                  chartData={[
                    {
                      color: "#CFC8FF",
                      value: 77,
                    },
                    {
                      color: "#CFC8FF",
                      value: 100,
                    },
                    {
                      color: "#6C5DD3",
                      value: 100,
                    },
                    {
                      color: "#CFC8FF",
                      value: 20,
                    },
                  ]}
                  title="Total Posts"
                  size="2.1M"
                  description="+102.2 %"
                  className="hashtagChartCard2"
                />
              </div>
              <div className="hashtagAnalysisRoot2">
                <div className="title">
                  Top Influencer
                  <i className="fas fa-angle-down"></i>
                </div>
                <div className="influencerContent">
                  {top_nfluencer?.map((item, index) => {
                    return (
                      <div key={index} className="item">
                        <img src={item.avatar} alt="avatar" />
                        <div className="desRoot">
                          <div className="name">{item.name}</div>
                          <div className="sizeRoot">
                            {item.size}
                            <span>followers</span>
                          </div>
                        </div>
                        <div className="analysisRoot">
                          <div className="title">Post Reach</div>
                          <div className="lineRoot">
                            <div
                              className="mainLine"
                              style={{ width: `${item.percent}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="investigationContent4">
            <div className="front">
              <div className="title">Word analysis</div>
              <div className="dataAnalysisRoot">
                <div className="headerRoot">
                  <div className="firstItem">Related Words</div>
                  <div className="secondItem">no. of Use</div>
                </div>
                <div className="contentRoot">
                  {wordCloudAnalysisData?.map((item, index) => {
                    return (
                      <div
                        className="item"
                        key={index}
                        style={{
                          background:
                            index % 2 === 0
                              ? "transparent"
                              : "rgba(249, 249, 250, 0.1)",
                        }}
                      >
                        <div className="firstItem">{item.word}</div>
                        <div className="secondItem">{item.use}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="end">
              <Vega spec={WordCloudOption} actions={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Investigation;

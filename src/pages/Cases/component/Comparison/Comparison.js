import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Vega } from "react-vega";
import { comparisonDoughnutChartColorData } from "../../../../helpers/chart.helper";
import ColorBtn from "../../../../components/ColorBtn/ColorBtn";
import CardLayout from "../../../../components/CardLayout/CardLayout";
import ModalLayout from "../../../../components/ModalLayout/ModalLayout";
import SearchInput from "../../../../components/SearchInput/SearchInput";
import ThreeDotBtn from "../../../../components/ThreeDotBtn/ThreeDotBtn";
import ActionButton from "../../../../components/ActionButton/ActionButton";
import FilterDropdown from "../../../../components/FilterDropdown/FilterDropdown";
import CustomizeTable from "../../../../components/CustomizeTable/CustomizeTable";
import CustomizeLineChart from "../../../../components/CustomizeLineChart/CustomizeLineChart";
import CustomizeDoughnutChart from "../../../../components/CustomizeDoughnutChart/CustomizeDoughnutChart";
import person3 from "../../../../asset/person3.svg";
import csv from "../../../../asset/images/csv_icon.svg";
import refresh from "../../../../asset/images/refresh_icon.svg";
import youtube from "../../../../asset/images/social/youtube.svg";
import more_tool from "../../../../asset/images/more_tool_icon.svg";
import more_detail from "../../../../asset/images/more_detail_icon.svg";
import closeIcon from "../../../../asset/images/close_icon.svg";
import "./Comparison.css";

function Comparison() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  const [searchValue, setSearchValue] = useState("");
  const tagOverTimeDropdown = ["Last week", "Last week", "Last week", "Custom"];
  const [mockTableData, setMockTableData] = useState([]);
  const [mockLineData1, setMockLineData1] = useState([]);
  const [mockLineData2, setMockLineData2] = useState([]);
  const [mockLineData3, setMockLineData3] = useState([]);
  const [mockDoughnutData, setMockDoughnutData] = useState([]);
  const [commentArea, setCommentArea] = useState("");

  const WordCloudOption = {
    $schema: "https://vega.github.io/schema/vega/v5.json",
    description:
      "A word cloud visualization depicting Vega research paper abstracts.",
    width: 872,
    height: 351,
    padding: 0,
    data: [
      {
        name: "table",
        values: [
          "Even with the snow falling outside, she felt it appropriate to wear her bikini 80% Israel World.",
          "If you spin around three times, you'll start to feel melancholy.",
          "Although it wasn't a pot of gold, Nancy was still enthralled at what she found at the end of the rainbow.",
          "He learned the hardest lesson of his life and had the scars, both physical and mental, to prove it.",
          "She says she has the ability to hear the soundtrack of your life.",
          "Giving directions that the mountains are to the west only works when you can see them.",
          "Everyone was curious about the large white blimp that appeared overnight.",
          "The bullet pierced the window shattering it before missing Danny's head by mere millimeters.",
          "I made myself a peanut butter sandwich as I didn't want to subsist on veggie crackers.",
          "The best part of marriage is animal crackers with peanut butter.",
          "I love bacon, beer, birds, and baboons.",
          "The minute she landed she understood the reason this was a fly-over state.",
          "The shark-infested South Pine channel was the only way in or out.",
          "She is never happy until she finds something to be unhappy about; then, she is overjoyed.",
          "The thunderous roar of the jet overhead confirmed her worst fears.",
          "The fence was confused about whether it was supposed to keep things in or keep things out.",
          "Cursive writing is the best way to build a race track.",
          "Nobody has encountered an explosive daisy and lived to tell the tale.",
          "He had a vague sense that trees gave birth to dinosaurs.",
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
            expr: "[-90, 0, 90][~~(random() * 3)]",
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
        range: [
          "#75B3FF",
          "#E8699F",
          "#A9FFBB",
          "#FFDC5D",
          "#fff",
          "#FF703D",
          "#C2A6FF",
        ],
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
            size: [872, 351],
            text: { field: "text" },
            rotate: { field: "datum.angle" },
            font: "Helvetica Neue, Arial",
            fontWeight: 700,
            fontSize: { field: "datum.count" },
            fontWeight: { field: "datum.weight" },
            fontSizeRange: [25, 50],
            padding: 5,
          },
        ],
      },
    ],
  };

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      setMockTableData((pre) => [
        ...pre,
        {
          item: "Post",
          user: "Olive Yew",
          addeddate: "June 26, 2022 15:45",
          addbyuser: {
            name: "Nimrod",
            image: person3,
          },
          case: "Lorem ipsum",
          priority: "Medium",
        },
      ]);
    }
    setMockLineData1([
      Math.floor(Math.random() * 300 + 1200),
      Math.floor(Math.random() * 300 + 1200),
      Math.floor(Math.random() * 300 + 1200),
      Math.floor(Math.random() * 300 + 1200),
      Math.floor(Math.random() * 300 + 1200),
      Math.floor(Math.random() * 300 + 1200),
      Math.floor(Math.random() * 300 + 1200),
    ]);
    setMockLineData2([
      Math.floor(Math.random() * 300 + 900),
      Math.floor(Math.random() * 300 + 900),
      Math.floor(Math.random() * 300 + 900),
      Math.floor(Math.random() * 300 + 900),
      Math.floor(Math.random() * 300 + 900),
      Math.floor(Math.random() * 300 + 900),
      Math.floor(Math.random() * 300 + 900),
    ]);
    setMockLineData3([
      Math.floor(Math.random() * 300 + 600),
      Math.floor(Math.random() * 300 + 600),
      Math.floor(Math.random() * 300 + 600),
      Math.floor(Math.random() * 300 + 600),
      Math.floor(Math.random() * 300 + 600),
      Math.floor(Math.random() * 300 + 600),
      Math.floor(Math.random() * 300 + 600),
    ]);
    setMockDoughnutData([
      Math.floor(Math.random() * 500 + 900),
      Math.floor(Math.random() * 500 + 900),
      Math.floor(Math.random() * 500 + 900),
    ]);
  }, []);

  const handleViewModal = (index) => {
    query.set("tableviewmodal_show", index);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  const handleViewModalClose = () => {
    query.delete("tableviewmodal_show");
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  return (
    <>
      <div className="comparisonRoot">
        <div className="comparisonHeader">Government - Services - Army</div>
        <div className="comparisonRoot1">
          <CardLayout
            className="tagOverTimeRoot"
            contentStyle="tagOverTime"
            headerStyle="tagOverTimeHeader"
            header={
              <>
                <div className="title">Case tagging over time</div>
                <ActionButton
                  name="Show"
                  content="Last Week"
                  className="timeTool"
                  dropRootStyle="timeToolDropdownRoot"
                  dropRoot={
                    <>
                      {tagOverTimeDropdown?.map((item, index) => {
                        return (
                          <div key={index} className="item">
                            {item}
                          </div>
                        );
                      })}
                    </>
                  }
                />
              </>
            }
          >
            <div className="tagOverTimeLineRoot">
              <CustomizeLineChart
                label={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
                data={[
                  {
                    line_color: ["#FEBD42", "#EFD7AB"],
                    value: mockLineData1,
                    fill: false,
                  },
                  {
                    line_color: ["#A9FFBB", "#6FFF8D"],
                    value: mockLineData2,
                    fill: false,
                  },
                  {
                    line_color: ["#5D43FF", "#A5A4FF"],
                    value: mockLineData3,
                    fill: false,
                  },
                ]}
                width={714}
                height={280}
              />
            </div>
          </CardLayout>
          <CardLayout
            className="taggingRoot"
            contentStyle="tagging"
            headerStyle="taggingHeader"
            header={
              <>
                <div className="title">Cases tagging</div>
              </>
            }
          >
            <div className="doughnutChartRoot">
              <CustomizeDoughnutChart
                data={mockDoughnutData}
                label={["Government", "Services", "Army"]}
                colorInfo={comparisonDoughnutChartColorData}
              />
              <div className="doughnutChartDes">
                {["Government", "Services", "Army"].map((item, index) => {
                  return (
                    <div className="doughnutChartDesItem" key={index}>
                      <div
                        className="doughnutChartIcon"
                        style={{
                          background: `linear-gradient(238.95deg, ${comparisonDoughnutChartColorData[index]?.first} 31.21%, ${comparisonDoughnutChartColorData[index]?.last} 62.45%)`,
                        }}
                      ></div>
                      <div className="doughnutChartItemName">{item}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardLayout>
        </div>
        <div className="comparisonRoot2">
          <CardLayout
            className="governmentWordCloud"
            headerStyle="wordCloudHeader"
            header={<div className="headerTitle">Word Cloud - Government</div>}
            contentStyle="wordCloud"
          >
            <Vega spec={WordCloudOption} actions={false} />
          </CardLayout>
          <CardLayout
            className="servicesWordCloud"
            headerStyle="wordCloudHeader"
            header={<div className="headerTitle">Word Cloud - Services</div>}
            contentStyle="wordCloud"
          >
            <Vega spec={WordCloudOption} actions={false} />
          </CardLayout>
        </div>
        <div className="comparisonRoot3">
          <CardLayout
            className="armyWordCloud"
            headerStyle="wordCloudHeader"
            header={<div className="headerTitle">Word Cloud - Army</div>}
            contentStyle="wordCloud"
          >
            <Vega spec={WordCloudOption} actions={false} />
          </CardLayout>
        </div>
        <CustomizeTable
          className="comparisonRoot4"
          header={
            <div className="comparisonTableHeader">
              <div className="comparisonTableTitle">Shared Items</div>
              <SearchInput
                action={(e) => setSearchValue(e.target.value)}
                inputValue={searchValue}
                className="comparisonTableSearchTool"
                inputWith
              />
              <div className="toolEndRoot">
                <FilterDropdown className="tool" type="filter" />
                <FilterDropdown className="tool" />
                <img src={refresh} alt="tool" className="tool" />
                <img src={csv} alt="tool" className="tool" />
                <img src={more_tool} alt="tool" className="tool" />
                <img src={more_detail} alt="tool" className="tool" />
              </div>
            </div>
          }
          tableHeader={[
            "",
            "Item",
            "User",
            "Added date",
            "Added by",
            "Case",
            "Priority",
            "Screenshot",
            "Link",
            "",
          ]}
          body={mockTableData.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={youtube} alt="social_icon"></img>
                </td>
                <td>{item.item}</td>
                <td>{item.user}</td>
                <td>{item.addeddate}</td>
                <td>
                  <img src={item.addbyuser.image} alt="avatar" />{" "}
                  {item.addbyuser.name}
                </td>
                <td>{item.case}</td>
                <td>
                  <ColorBtn
                    name="Medium"
                    width={130}
                    arrowShow
                    color="#37CE4A"
                  />
                </td>
                <td onClick={() => handleViewModal(index)}>View</td>
                <td>Link</td>
                <td>
                  <ThreeDotBtn className="dotBtn" action={() => {}} />
                </td>
              </tr>
            );
          })}
        />
        <ModalLayout
          show={query.get("tableviewmodal_show")}
          onClose={handleViewModalClose}
          className="tabelViewModalRoot"
        >
          <ThreeDotBtn className="dotBtn" action={() => {}} />
          <img src={closeIcon} alt="closIcon" onClick={handleViewModalClose} />
          <div className="mainRoot">
            <div className="leftPart">+</div>
            <div className="divLinePart"></div>
            <div className="rightPart">
              <div className="title">General info:</div>
              <div className="rightPart1">
                <div className="item">Upload date:</div>
                <div className="item">Username:</div>
              </div>
              <div className="casesPart">
                <div className="title">Cases</div>
                <div className="desRoot">
                  <img src={person3} alt="avatart" />
                  <div className="desRoot1">
                    <div className="desContent">
                      <div className="des">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque cras felis interdum tempor, lobortis
                        egestas volutpat consectetur.....
                      </div>
                      <div className="desDate">Feb 6, 11:49 AM</div>
                    </div>
                  </div>
                  <ThreeDotBtn className="dotBtn" action={() => {}} />
                </div>
              </div>
              <div className="commentPart">
                <div className="title">Comments:</div>
                <div className="desRoot">
                  <ThreeDotBtn className="dotBtn" action={() => {}} />
                  <textarea
                    placeholder="Comment here"
                    value={commentArea}
                    onChange={(e) => setCommentArea(e.target.value)}
                  />
                  <div className="postBtn">Post</div>
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

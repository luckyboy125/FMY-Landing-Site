import { useEffect, useState } from "react";
import { Vega } from "react-vega";
import ActionButton from "../../../../components/ActionButton/ActionButton";
import CardLayout from "../../../../components/CardLayout/CardLayout";
import CustomizeDoughnutChart from "../../../../components/CustomizeDoughnutChart/CustomizeDoughnutChart";
import CustomizeLineChart from "../../../../components/CustomizeLineChart/CustomizeLineChart";
import CustomizeTable from "../../../../components/CustomizeTable/CustomizeTable";
import FilterDropdown from "../../../../components/FilterDropdown/FilterDropdown";
import GradientButton from "../../../../components/GradientButton/GradientButton";
import PlusButton from "../../../../components/PlusButton/PlusButton";
import RoundButton from "../../../../components/RoundButton/RoundButton";
import SearchInput from "../../../../components/SearchInput/SearchInput";
import { doughnutChartColorData } from "../../../../helpers/chart.helper";
import refresh from "../../../../asset/images/refresh_icon.svg";
import more_tool from "../../../../asset/images/more_tool_icon.svg";
import more_detail from "../../../../asset/images/more_detail_icon.svg";
import csv from "../../../../asset/images/csv_icon.svg";
import "./Service.css";

function Service() {
  const [searchValue, setSearchValue] = useState("");
  const [mockTableData, setMockTableData] = useState([]);
  const lineChartData = {
    label: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [1320, 932, 901, 1300, 1290, 1330, 1320],
  };

  const doughnutChartData = {
    label: ["first", "second", "third", "fourth", "fifth", "sixth"],
    data: [100, 120, 124, 300, 145, 50],
  };

  const WordCloudOption = {
    $schema: "https://vega.github.io/schema/vega/v5.json",
    description:
      "A word cloud visualization depicting Vega research paper abstracts.",
    width: 1850,
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
            size: [1850, 351],
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
          domain: "rock.myspace.com",
          addedDate: "June 26, 2022",
          ipaddress: "251.196.63",
          keyword: "Lorem ipsum",
        },
      ]);
    }
  }, []);

  return (
    <>
      <div className="serviceRoot1">
        <CardLayout
          className="relativeServiceRoot"
          contentStyle="relativeService"
          headerStyle="relativeServiceHeader"
          header={
            <>
              <GradientButton content="Service" />
              <div className="headerContent">Related cases</div>
            </>
          }
        >
          <div className="descriptionRoot">
            <div
              className="descriptionItem"
              style={{ marginTop: "4px", paddingBottom: "24px" }}
            >
              <div className="descriptionItemTitle">Total items</div>
              <div
                className="descriptionItemCount"
                style={{ color: "#0FDF63" }}
              >
                630
              </div>
            </div>
            <div className="descriptionItem" style={{ padding: "28px 0 28px" }}>
              <div className="descriptionItemTitle">
                New items (past 7 days)
              </div>
              <div
                className="descriptionItemCount"
                style={{ color: "#75B3FF" }}
              >
                100
              </div>
            </div>
            <div className="descriptionItem" style={{ paddingTop: "31px" }}>
              <div className="descriptionItemTitle">Added date</div>
              <div className="descriptionItemCount" style={{ color: "#fff" }}>
                17 Nov 2022
              </div>
            </div>
          </div>
          <div className="doughnutChartRoot">
            <CustomizeDoughnutChart
              data={doughnutChartData.data}
              label={doughnutChartData.label}
              colorInfo={doughnutChartColorData}
            />
            <div className="doughnutChartDes">
              {doughnutChartData.label.map((item, index) => {
                return (
                  <div className="doughnutChartDesItem" key={index}>
                    <div
                      className="doughnutChartIcon"
                      style={{
                        background: `linear-gradient(238.95deg, ${doughnutChartColorData[index]?.first} 31.21%, ${doughnutChartColorData[index]?.last} 62.45%)`,
                      }}
                    ></div>
                    <div className="doughnutChartItemName">{item}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <RoundButton className="toolRoot" />
        </CardLayout>
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
              />
            </>
          }
        >
          <div className="tagOverTimeLineRoot">
            <CustomizeLineChart
              axis={lineChartData.label}
              ayis={lineChartData.data}
              width={714}
              height={280}
            />
          </div>
        </CardLayout>
      </div>
      <CardLayout
        className="serviceRoot2"
        headerStyle="wordCloudHeader"
        header={<div className="headerTitle">Word Cloud</div>}
        contentStyle="wordCloud"
      >
        <Vega spec={WordCloudOption} actions={false} />
      </CardLayout>
      <CustomizeTable
        className="serviceRoot3"
        header={
          <div className="serviceTableHeader">
            <div className="serviceTableTitle">Goverment</div>
            <SearchInput
              action={(e) => setSearchValue(e.target.value)}
              inputValue={searchValue}
              className="serviceTableSearchTool"
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
              <td className="firstTd">{item.domain}</td>
              <td className="secondTd">{item.addedDate}</td>
              <td className="thirdTd">{item.ipaddress}</td>
              <td className="fourthTd">{item.keyword}</td>
              <td className="fifthTd">
                <PlusButton
                  content="+ Add to monitoring"
                  action={() => {}}
                  className="addBtn"
                />
                <div className="des">Active</div>
              </td>
            </tr>
          );
        })}
      />
    </>
  );
}

export default Service;

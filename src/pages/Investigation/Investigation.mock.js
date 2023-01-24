import person1 from "../../asset/person1.svg";
import person2 from "../../asset/person2.svg";
import person3 from "../../asset/person3.svg";
import Sentiment from "../../asset/investigation/sentiment_icon.svg";
import Engagement from "../../asset/investigation/engagement_icon.svg";
import Impace_score from "../../asset/investigation/impace_score_icon.svg";

export const post_percent_data = [
  {
    title: "Sentiment",
    color: "#FF6628",
    content: "74%",
    des_icon: Sentiment,
    percent: Math.random(50) + 50,
  },
  {
    title: "Engagement",
    color: "#FFA2C0",
    content: "1m",
    des_icon: Engagement,
    percent: Math.random(50) + 50,
  },
  {
    title: "Impace Score",
    color: "#7FBA7A",
    content: "91",
    des_icon: Impace_score,
    percent: Math.random(50) + 50,
  },
];

export const top_nfluencer = [
  {
    avatar: person1,
    name: "@neymarjr",
    size: "158m",
    percent: 90,
  },
  {
    avatar: person2,
    name: "@psg",
    size: "46.4m",
    percent: 45,
  },
  {
    avatar: person3,
    name: "@BBCSport",
    size: "46.4m",
    percent: 35,
  },
  {
    avatar: person2,
    name: "@psg",
    size: "46.4m",
    percent: 70,
  },
  {
    avatar: person3,
    name: "@BBCSport",
    size: "46.4m",
    percent: 10,
  },
];

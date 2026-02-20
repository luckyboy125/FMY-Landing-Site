import person1 from '../../asset/person1.svg';
import person2 from '../../asset/person2.svg';
import person3 from '../../asset/person3.svg';
import Sentiment from '../../asset/investigation/sentiment_icon.svg';
import Engagement from '../../asset/investigation/engagement_icon.svg';
import Impace_score from '../../asset/investigation/impace_score_icon.svg';

export interface PostPercentItem {
  title: string;
  color: string;
  content: string;
  des_icon: string;
  percent: number;
}

export const post_percent_data: PostPercentItem[] = [
  {
    title: 'Sentiment',
    color: '#FF6628',
    content: '74%',
    des_icon: Sentiment,
    percent: Math.random() * 50 + 50
  },
  {
    title: 'Engagement',
    color: '#FFA2C0',
    content: '1m',
    des_icon: Engagement,
    percent: Math.random() * 50 + 50
  },
  {
    title: 'Impace Score',
    color: '#7FBA7A',
    content: '91',
    des_icon: Impace_score,
    percent: Math.random() * 50 + 50
  }
];

export interface TopInfluencerItem {
  avatar: string;
  name: string;
  size: string;
  percent: number;
}

export const top_nfluencer: TopInfluencerItem[] = [
  { avatar: person1, name: '@neymarjr', size: '158m', percent: 90 },
  { avatar: person2, name: '@psg', size: '46.4m', percent: 45 },
  { avatar: person3, name: '@BBCSport', size: '46.4m', percent: 35 },
  { avatar: person2, name: '@psg', size: '46.4m', percent: 70 },
  { avatar: person3, name: '@BBCSport', size: '46.4m', percent: 10 }
];

export interface WordCloudAnalysisItem {
  word: string;
  use: string;
}

export const wordCloudAnalysisData: WordCloudAnalysisItem[] = [
  { word: 'Bercelona', use: '894K' },
  { word: 'Sergio Ramos', use: '894K' },
  { word: 'Free agent', use: '294K' },
  { word: 'messi', use: '1.8M' },
  { word: 'leomessi', use: '2.6M' },
  { word: 'real madrid', use: '1.2M' },
  { word: 'as free', use: '201K' },
  { word: 'sergio', use: '83K' }
];

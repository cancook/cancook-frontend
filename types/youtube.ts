export type YoutubeRecommended = {
  id: string;
  thumbnailURL: string;
  playTime: string;
  link: string;
};

export type YoutubeCategory = {
  title: string;
  data: VideoInformation[];
};

export type Video = {
  id: string;
  title: string;
  thumbnailURL: string;
  playTime: string;
  views: number;
  link: string; // 해당 게시글 외부 링크
  createdAt: string;
};

export type Creator = {
  id: string;
  name: string;
  thumbnail: string;
};

export type VideoInformation = {
  video: Video;
  creator: Creator;
};

export type YoutubeDetail = {
  urlPk: string;
  title: string;
  description: string;
  ingredients: string[];
  views: number;
  createdAt: string;
};

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

export type VideoInformation = {
  video: {
    id: string;
    title: string;
    thumbnailURL: string;
    playTime: string;
    views: number;
    link: string; // 해당 게시글 외부 링크
    createdAt: string;
  };
  creator: {
    id: string;
    name: string;
    thumbnail: string;
  };
};

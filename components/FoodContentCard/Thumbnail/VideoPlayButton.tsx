import React from 'react';
import VideoPlayIcon from '@/public/svg/video_play.svg';
import styled from '@emotion/styled';

export const PlayButton = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 5rem;
  height: 5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const VideoPlayButton = () => {
  return (
    <PlayButton>
      <VideoPlayIcon />
    </PlayButton>
  );
};

export default VideoPlayButton;

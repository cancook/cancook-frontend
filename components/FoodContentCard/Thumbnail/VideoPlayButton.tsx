import React from 'react';
import videoPlayIcon from '@/public/png/video_play.png';
import styled from '@emotion/styled';
import Image from 'next/image';

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
      <Image src={videoPlayIcon} alt="video-play-icon" />
    </PlayButton>
  );
};

export default VideoPlayButton;

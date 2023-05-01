import Head from 'next/head';
import BannerCarousel from '@/components/Carousel/BannerCarousel';
import styled from '@emotion/styled';
import Category from '@/components/Carousel/Category';
import { CardProps } from '@/components/Carousel/Category/Card';
import FoodContentCard from '@/components/FoodContentCard';
import { ComponentProps } from 'react';

// TODO: API 데이터를 불러오고 지워버리기
const SAMPLE_CARD_DATA: CardProps[] = [
  {
    thumbnail: {
      isPlayButton: true,
      src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
      size: 'md',
      time: '8:00'
    },
    body: {
      title: '어떤 조합도 칼로리 폭탄! 미쿡요리 레시피',
      subTitle: '조회수 26만회 • 7일전'
    }
  },
  {
    thumbnail: {
      isPlayButton: true,
      src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
      size: 'md',
      time: '8:00'
    },
    body: {
      title: '어떤 조합도 칼로리 폭탄! 미쿡요리 레시피',
      subTitle: '조회수 26만회 • 7일전'
    }
  },
  {
    thumbnail: {
      isPlayButton: true,
      src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
      size: 'md',
      time: '8:00'
    },
    body: {
      title: '어떤 조합도 칼로리 폭탄! 미쿡요리 레시피',
      subTitle: '조회수 26만회 • 7일전'
    }
  },
  {
    thumbnail: {
      isPlayButton: true,
      src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
      size: 'md',
      time: '8:00'
    },
    body: {
      title: '어떤 조합도 칼로리 폭탄! 미쿡요리 레시피',
      subTitle: '조회수 26만회 • 7일전'
    }
  },
  {
    thumbnail: {
      isPlayButton: true,
      src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
      size: 'md',
      time: '8:00'
    },
    body: {
      title: '어떤 조합도 칼로리 폭탄! 미쿡요리 레시피',
      subTitle: '조회수 26만회 • 7일전'
    }
  },
  {
    thumbnail: {
      isPlayButton: true,
      src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
      size: 'md',
      time: '8:00'
    },
    body: {
      title: '어떤 조합도 칼로리 폭탄! 미쿡요리 레시피',
      subTitle: '조회수 26만회 • 7일전'
    }
  },
  {
    thumbnail: {
      isPlayButton: true,
      src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
      size: 'md',
      time: '8:00'
    },
    body: {
      title: '어떤 조합도 칼로리 폭탄! 미쿡요리 레시피',
      subTitle: '조회수 26만회 • 7일전'
    }
  },
  {
    thumbnail: {
      isPlayButton: true,
      src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
      size: 'md',
      time: '8:00'
    },
    body: {
      title: '어떤 조합도 칼로리 폭탄! 미쿡요리 레시피',
      subTitle: '조회수 26만회 • 7일전'
    }
  },
  {
    thumbnail: {
      isPlayButton: true,
      src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
      size: 'md',
      time: '8:00'
    },
    body: {
      title: '어떤 조합도 칼로리 폭탄! 미쿡요리 레시피',
      subTitle: '조회수 26만회 • 7일전'
    }
  },
  {
    thumbnail: {
      isPlayButton: true,
      src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
      size: 'md',
      time: '8:00'
    },
    body: {
      title: '어떤 조합도 칼로리 폭탄! 미쿡요리 레시피',
      subTitle: '조회수 26만회 • 7일전'
    }
  },
  {
    thumbnail: {
      isPlayButton: true,
      src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
      size: 'md',
      time: '8:00'
    },
    body: {
      title: '어떤 조합도 칼로리 폭탄! 미쿡요리 레시피',
      subTitle: '조회수 26만회 • 7일전'
    }
  },
  {
    thumbnail: {
      isPlayButton: true,
      src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
      size: 'md',
      time: '8:00'
    },
    body: {
      title: '어떤 조합도 칼로리 폭탄! 미쿡요리 레시피',
      subTitle: '조회수 26만회 • 7일전'
    }
  },
  {
    thumbnail: {
      isPlayButton: true,
      src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
      size: 'md',
      time: '8:00'
    },
    body: {
      title: '어떤 조합도 칼로리 폭탄! 미쿡요리 레시피',
      subTitle: '조회수 26만회 • 7일전'
    }
  },
  {
    thumbnail: {
      isPlayButton: true,
      src: 'https://i.ytimg.com/vi/B2s5seuBCn0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArD-nM9VEHz5TZ3qai6BzHy9H28A',
      size: 'md',
      time: '8:00'
    },
    body: {
      title: '어떤 조합도 칼로리 폭탄! 미쿡요리 레시피',
      subTitle: '조회수 26만회 • 7일전'
    }
  }
];

const SAMPLE_BANNER_DATA: ComponentProps<typeof FoodContentCard.Thumbnail>[] = [
  {
    isPlayButton: true,
    src: 'https://i.ytimg.com/vi/H_O3eoQD3TA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCh-w7jTBcaLPNy31EZ0ydlIOxOAQ',
    size: 'lg',
    time: '8:00',
    socialBadge: 'youtube'
  },
  {
    isPlayButton: true,
    src: 'https://i.ytimg.com/vi/H_O3eoQD3TA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCh-w7jTBcaLPNy31EZ0ydlIOxOAQ',
    size: 'lg',
    time: '8:00',
    socialBadge: 'youtube'
  },
  {
    isPlayButton: true,
    src: 'https://i.ytimg.com/vi/H_O3eoQD3TA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCh-w7jTBcaLPNy31EZ0ydlIOxOAQ',
    size: 'lg',
    time: '8:00',
    socialBadge: 'youtube'
  },
  {
    isPlayButton: true,
    src: 'https://i.ytimg.com/vi/H_O3eoQD3TA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCh-w7jTBcaLPNy31EZ0ydlIOxOAQ',
    size: 'lg',
    time: '8:00',
    socialBadge: 'youtube'
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* NOTE: 이 부분은 따로 component로 빼도 될거 같기는 한데, 우선 Server Side Props 로 받아오면 
                어떻게 보일지를 몰라서, 나중에 변경 예정
      */}
      <MainContainer>
        <BannerCarousel contents={SAMPLE_BANNER_DATA} />
        <Category
          title={'헬스 하는 사람들을 위한 음식'}
          contents={SAMPLE_CARD_DATA}
        />
        <Category
          title={'헬스 하는 사람들을 위한 음식'}
          contents={SAMPLE_CARD_DATA}
        />
        <Category
          title={'헬스 하는 사람들을 위한 음식'}
          contents={SAMPLE_CARD_DATA}
        />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  background-color: #000;
`;

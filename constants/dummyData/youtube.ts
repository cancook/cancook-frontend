import { YoutubeRecommended, YoutubeCategory } from '@/types/youtube';

export const YOUTUBE_BANNER_DUMMY_DATA: YoutubeRecommended[] = [
  {
    id: '1',
    thumbnailURL: 'https://placekitten.com/800/600',
    playTime: '07:23',
    link: 'https://www.youtube.com/watch?v=PVcpF7J2oXs'
  },
  {
    id: '2',
    thumbnailURL: 'https://placekitten.com/801/600',
    playTime: '15:42',
    link: 'https://www.youtube.com/watch?v=PVcpF7J2oXs'
  },
  {
    id: '3',
    thumbnailURL: 'https://placekitten.com/802/600',
    playTime: '02:56',
    link: 'https://www.youtube.com/watch?v=PVcpF7J2oXs'
  },
  {
    id: '4',
    thumbnailURL: 'https://placekitten.com/803/600',
    playTime: '10:19',
    link: 'https://www.youtube.com/watch?v=PVcpF7J2oXs'
  },
  {
    id: '5',
    thumbnailURL: 'https://placekitten.com/804/600',
    playTime: '03:45',
    link: 'https://www.youtube.com/watch?v=PVcpF7J2oXs'
  },
  {
    id: '6',
    thumbnailURL: 'https://placekitten.com/805/600',
    playTime: '12:57',
    link: 'https://www.youtube.com/watch?v=PVcpF7J2oXs'
  },
  {
    id: '7',
    thumbnailURL: 'https://placekitten.com/806/600',
    playTime: '01:34',
    link: 'https://www.youtube.com/watch?v=PVcpF7J2oXs'
  },
  {
    id: '8',
    thumbnailURL: 'https://placekitten.com/807/600',
    playTime: '08:06',
    link: 'https://www.youtube.com/watch?v=PVcpF7J2oXs'
  },
  {
    id: '9',
    thumbnailURL: 'https://placekitten.com/808/600',
    playTime: '19:28',
    link: 'https://www.youtube.com/watch?v=PVcpF7J2oXs'
  },
  {
    id: '10',
    thumbnailURL: 'https://placekitten.com/809/600',
    playTime: '05:51',
    link: 'https://www.youtube.com/watch?v=PVcpF7J2oXs'
  }
];

export const YOUTUBE_CATEGORY_DUMMY_DATA: YoutubeCategory[] = [
  {
    title: '재미있는 요리 카테고리',
    data: [
      {
        video: {
          id: '1',
          title: '맛있는 파스타 만들기',
          thumbnailURL:
            'https://i.ytimg.com/vi/DdWBDm-_llY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCQKt_8_QeAoYDpOFZCPBaYyVkAw',
          playTime: '12:34',
          views: 52693,
          link: 'https://i.ytimg.com/vi/DdWBDm-_llY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCQKt_8_QeAoYDpOFZCPBaYyVkAw',
          createdAt: '2023-05-28T09:15:00Z'
        },
        creator: {
          id: '1',
          name: '요리마스터 셰프',
          thumbnail:
            'https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s68-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '2',
          title: '간편한 레시피 10가지',
          thumbnailURL:
            'https://i.ytimg.com/vi/KNZpBh9NdXU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRJtaOwJ5QPPOtKfpBzShIRtsjAg',
          playTime: '08:27',
          views: 79341,
          link: 'https://www.youtube.com/watch?v=abcdefg2',
          createdAt: '2023-05-27T15:30:00Z'
        },
        creator: {
          id: '2',
          name: '맛있는 요리요리',
          thumbnail:
            'https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s68-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '3',
          title: '시원한 아이스크림 만들기',
          thumbnailURL:
            'https://i.ytimg.com/vi/3Gc2NiekupU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPmYz0vprfb_mfVnH8WiyRadQesA',
          playTime: '06:12',
          views: 28751,
          link: 'https://www.youtube.com/watch?v=abcdefg3',
          createdAt: '2023-05-26T11:45:00Z'
        },
        creator: {
          id: '3',
          name: '디저트 마스터',
          thumbnail:
            'https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s68-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '4',
          title: '달콤한 베이커리 빵 만들기',
          thumbnailURL:
            'https://i.ytimg.com/vi/3Gc2NiekupU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPmYz0vprfb_mfVnH8WiyRadQesA',
          playTime: '09:03',
          views: 62589,
          link: 'https://www.youtube.com/watch?v=abcdefg4',
          createdAt: '2023-05-25T19:20:00Z'
        },
        creator: {
          id: '4',
          name: '베이킹 마스터',
          thumbnail:
            'https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s68-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '5',
          title: '한그릇 김치찌개 레시피',
          thumbnailURL:
            'https://i.ytimg.com/vi/3Gc2NiekupU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPmYz0vprfb_mfVnH8WiyRadQesA',
          playTime: '14:50',
          views: 42536,
          link: 'https://www.youtube.com/watch?v=abcdefg5',
          createdAt: '2023-05-24T08:55:00Z'
        },
        creator: {
          id: '5',
          name: '김치맛집TV',
          thumbnail:
            'https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s68-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '6',
          title: '고기구이 전문가의 비법 레시피',
          thumbnailURL:
            'https://i.ytimg.com/vi/3Gc2NiekupU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPmYz0vprfb_mfVnH8WiyRadQesA',
          playTime: '11:17',
          views: 94623,
          link: 'https://www.youtube.com/watch?v=abcdefg6',
          createdAt: '2023-05-23T14:10:00Z'
        },
        creator: {
          id: '6',
          name: '맛있는 고기야',
          thumbnail:
            'https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s68-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '7',
          title: '신선한 샐러드 만들기',
          thumbnailURL:
            'https://i.ytimg.com/vi/3Gc2NiekupU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPmYz0vprfb_mfVnH8WiyRadQesA',
          playTime: '05:38',
          views: 31579,
          link: 'https://www.youtube.com/watch?v=abcdefg7',
          createdAt: '2023-05-22T09:40:00Z'
        },
        creator: {
          id: '7',
          name: '샐러드 킹',
          thumbnail:
            'https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s68-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '8',
          title: '가장 쉬운 스파게티 레시피',
          thumbnailURL:
            'https://i.ytimg.com/vi/3Gc2NiekupU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPmYz0vprfb_mfVnH8WiyRadQesA',
          playTime: '07:59',
          views: 74218,
          link: 'https://www.youtube.com/watch?v=abcdefg8',
          createdAt: '2023-05-21T16:05:00Z'
        },
        creator: {
          id: '8',
          name: '요리하는 스파게티',
          thumbnail:
            'https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s68-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '9',
          title: '달콤한 디저트 만들기',
          thumbnailURL:
            'https://i.ytimg.com/vi/3Gc2NiekupU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPmYz0vprfb_mfVnH8WiyRadQesA',
          playTime: '10:21',
          views: 51974,
          link: 'https://www.youtube.com/watch?v=abcdefg9',
          createdAt: '2023-05-20T13:25:00Z'
        },
        creator: {
          id: '9',
          name: '디저트 마스터',
          thumbnail:
            'https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s68-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '10',
          title: '간편 요리 레시피 5가지',
          thumbnailURL:
            'https://i.ytimg.com/vi/3Gc2NiekupU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPmYz0vprfb_mfVnH8WiyRadQesA',
          playTime: '06:47',
          views: 37826,
          link: 'https://www.youtube.com/watch?v=abcdefg10',
          createdAt: '2023-05-19T11:50:00Z'
        },
        creator: {
          id: '10',
          name: '요리하는 산타',
          thumbnail:
            'https://yt3.ggpht.com/TjSlbvsyFZvCYMrV_ymIEX-_7XiU9P4g3DA-1cKUr0W28h33WgDD0ra8ggyaGxJs4ixwJcUkQA=s68-c-k-c0x00ffffff-no-rj'
        }
      }
    ]
  },
  {
    title: '즐거운 음식 만들기',
    data: [
      {
        video: {
          id: '1',
          title: '맛있는 파스타 만들기',
          thumbnailURL:
            'https://i.ytimg.com/vi/3Gc2NiekupU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPmYz0vprfb_mfVnH8WiyRadQesA',
          playTime: '12:34',
          views: 52693,
          link: 'https://www.youtube.com/watch?v=abcdefg1',
          createdAt: '2023-05-28T09:15:00Z'
        },
        creator: {
          id: '1',
          name: '요리마스터 셰프',
          thumbnail:
            'https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s68-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '2',
          title: '간편한 레시피 10가지',
          thumbnailURL:
            'https://i.ytimg.com/vi/KNZpBh9NdXU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRJtaOwJ5QPPOtKfpBzShIRtsjAg',
          playTime: '08:27',
          views: 79341,
          link: 'https://www.youtube.com/watch?v=abcdefg2',
          createdAt: '2023-05-27T15:30:00Z'
        },
        creator: {
          id: '2',
          name: '맛있는 요리요리',
          thumbnail:
            'https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s68-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '3',
          title: '시원한 아이스크림 만들기',
          thumbnailURL:
            'https://i.ytimg.com/vi/3Gc2NiekupU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPmYz0vprfb_mfVnH8WiyRadQesA',
          playTime: '06:12',
          views: 28751,
          link: 'https://www.youtube.com/watch?v=abcdefg3',
          createdAt: '2023-05-26T11:45:00Z'
        },
        creator: {
          id: '3',
          name: '디저트 마스터',
          thumbnail:
            'https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s68-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '4',
          title: '달콤한 베이커리 빵 만들기',
          thumbnailURL:
            'https://i.ytimg.com/vi/3Gc2NiekupU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPmYz0vprfb_mfVnH8WiyRadQesA',
          playTime: '09:03',
          views: 62589,
          link: 'https://www.youtube.com/watch?v=abcdefg4',
          createdAt: '2023-05-25T19:20:00Z'
        },
        creator: {
          id: '4',
          name: '베이킹 마스터',
          thumbnail:
            'https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s68-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '5',
          title: '한그릇 김치찌개 레시피',
          thumbnailURL:
            'https://i.ytimg.com/vi/3Gc2NiekupU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPmYz0vprfb_mfVnH8WiyRadQesA',
          playTime: '14:50',
          views: 42536,
          link: 'https://www.youtube.com/watch?v=abcdefg5',
          createdAt: '2023-05-24T08:55:00Z'
        },
        creator: {
          id: '5',
          name: '김치맛집TV',
          thumbnail:
            'https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s68-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '6',
          title: '고기구이 전문가의 비법 레시피',
          thumbnailURL:
            'https://i.ytimg.com/vi/3Gc2NiekupU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPmYz0vprfb_mfVnH8WiyRadQesA',
          playTime: '11:17',
          views: 94623,
          link: 'https://www.youtube.com/watch?v=abcdefg6',
          createdAt: '2023-05-23T14:10:00Z'
        },
        creator: {
          id: '6',
          name: '맛있는 고기야',
          thumbnail:
            'https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s68-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '7',
          title: '신선한 샐러드 만들기',
          thumbnailURL:
            'https://i.ytimg.com/vi/3Gc2NiekupU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPmYz0vprfb_mfVnH8WiyRadQesA',
          playTime: '05:38',
          views: 31579,
          link: 'https://www.youtube.com/watch?v=abcdefg7',
          createdAt: '2023-05-22T09:40:00Z'
        },
        creator: {
          id: '7',
          name: '샐러드 킹',
          thumbnail:
            'https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s68-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '8',
          title: '가장 쉬운 스파게티 레시피',
          thumbnailURL:
            'https://i.ytimg.com/vi/3Gc2NiekupU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPmYz0vprfb_mfVnH8WiyRadQesA',
          playTime: '07:59',
          views: 74218,
          link: 'https://www.youtube.com/watch?v=abcdefg8',
          createdAt: '2023-05-21T16:05:00Z'
        },
        creator: {
          id: '8',
          name: '요리하는 스파게티',
          thumbnail:
            'https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s68-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '9',
          title: '달콤한 디저트 만들기',
          thumbnailURL:
            'https://i.ytimg.com/vi/3Gc2NiekupU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPmYz0vprfb_mfVnH8WiyRadQesA',
          playTime: '10:21',
          views: 51974,
          link: 'https://www.youtube.com/watch?v=abcdefg9',
          createdAt: '2023-05-20T13:25:00Z'
        },
        creator: {
          id: '9',
          name: '디저트 마스터',
          thumbnail:
            'https://yt3.ggpht.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s68-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '10',
          title: '간편 요리 레시피 5가지',
          thumbnailURL:
            'https://i.ytimg.com/vi/3Gc2NiekupU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPmYz0vprfb_mfVnH8WiyRadQesA',
          playTime: '06:47',
          views: 37826,
          link: 'https://www.youtube.com/watch?v=abcdefg10',
          createdAt: '2023-05-19T11:50:00Z'
        },
        creator: {
          id: '10',
          name: '요리하는 산타',
          thumbnail:
            'https://yt3.ggpht.com/TjSlbvsyFZvCYMrV_ymIEX-_7XiU9P4g3DA-1cKUr0W28h33WgDD0ra8ggyaGxJs4ixwJcUkQA=s68-c-k-c0x00ffffff-no-rj'
        }
      }
    ]
  }
];

import { YoutubeRecommended, YoutubeCategory } from '@/types/youtube';

export const YOUTUBE_BANNER_DUMMY_DATA: YoutubeRecommended[] = [
  {
    id: '7',
    thumbnailURL: 'https://i.ytimg.com/vi/6Xhhj74GnZs/maxresdefault.jpg',
    playTime: '07:55',
    link: 'https://youtu.be/6Xhhj74GnZs'
  },
  {
    id: '2',
    thumbnailURL: 'https://i.ytimg.com/vi/Os-XpPfTYg4/maxresdefault.jpg',
    playTime: '07:58',
    link: 'https://youtu.be/Os-XpPfTYg4'
  },
  {
    id: '7',
    thumbnailURL: 'https://i.ytimg.com/vi/lfAIkTWOgt4/maxresdefault.jpg',
    playTime: '09:36',
    link: 'https://www.youtube.com/watch?v=lfAIkTWOgt4'
  },
  {
    id: '2',
    thumbnailURL: 'https://i.ytimg.com/vi/NSLdPYXHHf0/maxresdefault.jpg',
    playTime: '13:46',
    link: 'https://www.youtube.com/watch?v=NSLdPYXHHf0'
  },
  {
    id: '3',
    thumbnailURL: 'https://i.ytimg.com/vi/aV7zcAPmuPA/maxresdefault.jpg',
    playTime: '03:57',
    link: 'https://youtu.be/aV7zcAPmuPA'
  },
  {
    id: '8',
    thumbnailURL: 'https://i.ytimg.com/vi/tPfpVBBdhNI/maxresdefault.jpg',
    playTime: '08:32',
    link: 'https://youtu.be/tPfpVBBdhNI'
  },
  {
    id: '2',
    thumbnailURL: 'https://i.ytimg.com/vi/roA-HHX9-GU/maxresdefault.jpg',
    playTime: '02:44',
    link: 'https://youtu.be/roA-HHX9-GU'
  },
  {
    id: '6',
    thumbnailURL: 'https://i.ytimg.com/vi/jFabzMoMERM/maxresdefault.jpg',
    playTime: '15:18',
    link: 'https://www.youtube.com/watch?v=jFabzMoMERM'
  }
];

export const YOUTUBE_CATEGORY_DUMMY_DATA: YoutubeCategory[] = [
  {
    title: '미국음식 피자만 생각난다면,🍕이런 레시피는 어떠세요?🍕',
    data: [
      {
        video: {
          id: '1',
          title:
            '[스프 레시피] 셰프가 알려주는 클램차우더스프 레시피! 샌프란시스코에서 먹던 그 맛!! / 친구들과 가족들과 따뜻한 연말 보내세요! / 연말파티음식',
          thumbnailURL:
            'https://i.ytimg.com/vi/0Ic34-oG9to/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYYtl9FTri9x9yH_zbUBiQ5kXeFw',
          playTime: '04:46',
          views: 966,
          link: 'https://www.youtube.com/watch?v=0Ic34-oG9to',
          createdAt: '2021-12-10T09:15:00Z'
        },
        creator: {
          id: '1',
          name: '쉐프양 Chef Yang 👨‍🍳',
          thumbnail:
            'https://yt3.googleusercontent.com/dQKTEO_hFoSxraDN2OduFA8FEd8qe8pfrDmXLhOupuePn5Q-JUa88zFxLS9cwLiyR18_pgSobg=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '2',
          title:
            '칠리 콘 카르네 : 너무 맛있어서 2번 만들었습니다... 칠리 콘 카르네 : 너무 맛있어서 2번 만들었습니다...',
          thumbnailURL: 'https://i.ytimg.com/vi/NSLdPYXHHf0/maxresdefault.jpg',
          playTime: '13:46',
          views: 1579141,
          link: 'https://www.youtube.com/watch?v=NSLdPYXHHf0',
          createdAt: '2022-02-22T15:30:00Z'
        },
        creator: {
          id: '2',
          name: '육식맨 YOOXICMAN ',
          thumbnail:
            'https://yt3.googleusercontent.com/ytc/AGIKgqPhms0RAnXAc0NgtLmibUtBzygpA0nFUVFY7EyG=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '3',
          title: `쿠바 샌드위치 : 샌드위치 하나로 해외여행 가는 법 (영화 '아메리칸 셰프', Mojo Pork Cubanos from movie 'CHEF')`,
          thumbnailURL: 'https://i.ytimg.com/vi/eA7ucLT26Mg/maxresdefault.jpg',
          playTime: '12:29',
          views: 2448848,
          link: 'https://youtu.be/eA7ucLT26Mg',
          createdAt: '2021-08-17T11:45:00Z'
        },
        creator: {
          id: '2',
          name: '육식맨 YOOXICMAN ',
          thumbnail:
            'https://yt3.googleusercontent.com/ytc/AGIKgqPhms0RAnXAc0NgtLmibUtBzygpA0nFUVFY7EyG=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '4',
          title:
            '4가지 데일리 홈브런치 | 맛있고 건강한, 현실 15분컷 가정식 브런치 만들기',
          thumbnailURL: 'https://i.ytimg.com/vi/wFdx7h4MKBc/maxresdefault.jpg',
          playTime: '16:34',
          views: 57816,
          link: 'https://www.youtube.com/watch?v=wFdx7h4MKBc',
          createdAt: '2021-11-10T19:20:00Z'
        },
        creator: {
          id: '4',
          name: '찹찹키친 ChopChop Kitchen',
          thumbnail:
            'https://yt3.googleusercontent.com/ytc/AGIKgqOt0Na2vm_dmkaRC8niRt58NlS58gs8zoLNuuX5=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '5',
          title:
            '에그베네딕트! 백종원 에그베네딕트로 분위기있는 브런치요리 만들기!',
          thumbnailURL: 'https://i.ytimg.com/vi/seYA55RzmME/maxresdefault.jpg',
          playTime: '04:23',
          views: 75744,
          link: 'https://youtu.be/seYA55RzmME',
          createdAt: '2015-09-17T08:55:00Z'
        },
        creator: {
          id: '5',
          name: 'MOCCA 모카',
          thumbnail:
            'https://yt3.googleusercontent.com/ytc/AGIKgqPl4mIAPR_8AsVNAODsGcp2H2-hfVJBbjC4whOj=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '6',
          title:
            '비리아 타코 : 미국 스트릿 푸드를 평정한 미친 맛, 칠리 육수에 찍어 먹는 타코 (Homemade Birria Tacos, Quesabirria)',
          thumbnailURL: 'https://i.ytimg.com/vi/jFabzMoMERM/maxresdefault.jpg',
          playTime: '15:18',
          views: 1651832,
          link: 'https://www.youtube.com/watch?v=jFabzMoMERM',
          createdAt: '2022-05-09T14:10:00Z'
        },
        creator: {
          id: '2',
          name: '육식맨 YOOXICMAN ',
          thumbnail:
            'https://yt3.googleusercontent.com/ytc/AGIKgqPhms0RAnXAc0NgtLmibUtBzygpA0nFUVFY7EyG=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '7',
          title:
            '단돈 6천원 갓성비✨ 촉촉한 안심 스테이크 🐽 [레이먼킴 인생고기|돼지 안심 스테이크]',
          thumbnailURL: 'https://i.ytimg.com/vi/lfAIkTWOgt4/maxresdefault.jpg',
          playTime: '09:36',
          views: 361567,
          link: 'https://www.youtube.com/watch?v=lfAIkTWOgt4',
          createdAt: '2020-08-17T09:40:00Z'
        },
        creator: {
          id: '7',
          name: '레이먼킴의 인생고기 RaymonKim Meat',
          thumbnail:
            'https://yt3.googleusercontent.com/CPUG6VuzaBO8nuBZMpDd0rHODpmnwQZ9LnyN0iHCIwLn-xW53vEa3TM8j35zirbMWDCOV4YNozg=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '8',
          title:
            '비주얼 실화? 단짠맵 소스 치트키로 버무린 수제 폭립! [레이먼킴의 인생고기🍖ㅣBarbecue pork ribs Coleslaw]',
          thumbnailURL: 'https://i.ytimg.com/vi/d3pPZzo0unE/maxresdefault.jpg',
          playTime: '10:42',
          views: 277778,
          link: 'https://youtu.be/d3pPZzo0unE',
          createdAt: '2020-06-05T16:05:00Z'
        },
        creator: {
          id: '7',
          name: '레이먼킴의 인생고기 RaymonKim Meat',
          thumbnail:
            'https://yt3.googleusercontent.com/CPUG6VuzaBO8nuBZMpDd0rHODpmnwQZ9LnyN0iHCIwLn-xW53vEa3TM8j35zirbMWDCOV4YNozg=s176-c-k-c0x00ffffff-no-rj'
        }
      }
    ]
  },
  {
    title: '보기 만 해도 힐링되는 영화 🌿 ‘리틀포레스트’ 김태리가 먹는 레시피',
    data: [
      {
        video: {
          id: '1',
          title:
            '영화 리틀 포레스트 속 수제비와 배추전 만들기 Sujebi and cabbage jeon in Little Forest movie',
          thumbnailURL: 'https://i.ytimg.com/vi/OAIhwCqWY7k/maxresdefault.jpg',
          playTime: '05:57',
          views: 344990,
          link: 'https://youtu.be/OAIhwCqWY7k',
          createdAt: '2019-03-04T09:15:00Z'
        },
        creator: {
          id: '1',
          name: 'cozytable',
          thumbnail:
            'https://yt3.googleusercontent.com/ytc/AGIKgqOb-y-Y-L5FWuFgbyetkpyxh7IMeU5xAfU7lps7=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '2',
          title:
            '완전 쫀득쫀득 얼큰한 김치수제비!! 후다닥 해먹기 [박막례 할머니]',
          thumbnailURL: 'https://i.ytimg.com/vi/Os-XpPfTYg4/maxresdefault.jpg',
          playTime: '07:58',
          views: 5866083,
          link: 'https://youtu.be/Os-XpPfTYg4',
          createdAt: '2019-01-27T15:30:00Z'
        },
        creator: {
          id: '2',
          name: '박막례 할머니 Korea_Grandma',
          thumbnail:
            'https://yt3.googleusercontent.com/OauKg10DgpzYxZ-t8PXX7Kwlm7XQZolX5BSeoAm8AByZsYcAHfhRRMpxX3OvZfSTWLWb0dQ4vMU=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '3',
          title: '리틀 포레스트 오이콩국수 만들기 豆乳キュウリ麺 [무비키친]',
          thumbnailURL: 'https://i.ytimg.com/vi/50XMOJP-98U/maxresdefault.jpg',
          playTime: '02:11',
          views: 37026,
          link: 'https://youtu.be/50XMOJP-98U',
          createdAt: '2019-06-26T11:45:00Z'
        },
        creator: {
          id: '3',
          name: '무비키친',
          thumbnail:
            'https://yt3.googleusercontent.com/9Oz-dsCdIQAUXkvTfYxBfQJwXJNOoB7Z3wyA-M8awPC11VAUBR3I3EXEKETjWsIbKDsTZzsx=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '4',
          title: '직접 반죽해서 만든 김치 수제비!',
          thumbnailURL: 'https://i.ytimg.com/vi/G2kylWhMw5s/maxresdefault.jpg',
          playTime: '15:15',
          views: 3247152,
          link: 'https://youtu.be/G2kylWhMw5s',
          createdAt: '2020-02-26T19:20:00Z'
        },
        creator: {
          id: '4',
          name: '백종원 PAIK JONG WON',
          thumbnail:
            'https://yt3.googleusercontent.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '5',
          title: '개운하게 아삭한 양배추 샌드위치',
          thumbnailURL: 'https://i.ytimg.com/vi/se6sTc2tzq4/maxresdefault.jpg',
          playTime: '03:36',
          views: 2212717,
          link: 'https://youtu.be/se6sTc2tzq4',
          createdAt: '2020-06-05T08:55:00Z'
        },
        creator: {
          id: '5',
          name: '하루한끼 one meal a day',
          thumbnail:
            'https://yt3.googleusercontent.com/ytc/AGIKgqMua2ZT8A_yyQYfjQjS1cNqSiw4UhN8qkVgveJp=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '6',
          title: '정말 맛있는 양배추 토스트 만들기 | 영양만점 간단요리',
          thumbnailURL: 'https://i.ytimg.com/vi/_nSIwDBtjG4/maxresdefault.jpg',
          playTime: '03:04',
          views: 5492778,
          link: 'https://youtu.be/_nSIwDBtjG4',
          createdAt: '2020-08-13T14:10:00Z'
        },
        creator: {
          id: '6',
          name: '메리니즈부엌Meliniskitchen',
          thumbnail:
            'https://yt3.googleusercontent.com/ytc/AGIKgqOd-PIlgy85Ut2DDNksSz0FlrNsTr3XVq6uoLkJPw=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '7',
          title:
            '(eng) 리틀포레스트 밤조림 만들기, 보늬밤 완성판! 가을 간식으로 딱 좋아요! Marron Glace from the movie Little Forest',
          thumbnailURL: 'https://i.ytimg.com/vi/6Xhhj74GnZs/maxresdefault.jpg',
          playTime: '07:55',
          views: 192045,
          link: 'https://youtu.be/6Xhhj74GnZs',
          createdAt: '2019-10-23T09:40:00Z'
        },
        creator: {
          id: '7',
          name: '가벼운날들 Korean Dessert',
          thumbnail:
            'https://yt3.googleusercontent.com/ytc/AGIKgqPY-NNqYcdgCcfZ9NfpoAFQgcqs3KQOe6iMDZ9AOg=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '8',
          title:
            '[ENG] 세상 귀찮은데, 세상 중독적인 맛! 매년 가을, 꼭 만드는 밤조림! 햇밤 100배 맛있게 먹기 Marron glacé | 하다앳홈',
          thumbnailURL:
            'https://i.ytimg.com/vi/QnJENSTIt74/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCalXP3u47mMn8AqU81hW4IpF1aZQ',
          playTime: '07:22',
          views: 135217,
          link: 'https://youtu.be/QnJENSTIt74',
          createdAt: '2020-09-15T16:05:00Z'
        },
        creator: {
          id: '8',
          name: 'HADA at HOME하다앳홈',
          thumbnail:
            'https://yt3.googleusercontent.com/ytc/AGIKgqNxbsIbodpRo5TLeIyc09cr3YlkgArkeVa4hnrr=s176-c-k-c0x00ffffff-no-rj'
        }
      }
    ]
  },
  {
    title: '매운맛 좋아하세요?💥 한국인의 소울푸드,떡볶이 최강자들 모아보기',
    data: [
      {
        video: {
          id: '1',
          title: '분식집st 떡 볶 이🎉',
          thumbnailURL: 'https://i.ytimg.com/vi/t4Es8mwdYlE/maxresdefault.jpg',
          playTime: '12:55',
          views: 12568489,
          link: 'https://youtu.be/t4Es8mwdYlE',
          createdAt: '2020-02-07T09:15:00Z'
        },
        creator: {
          id: '4',
          name: '백종원 PAIK JONG WON',
          thumbnail:
            'https://yt3.googleusercontent.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '2',
          title:
            '떡볶이에 제발 멸치육수나 다진마늘 이런거 넣지마세요~ 떡볶이 만드는법',
          thumbnailURL: 'https://i.ytimg.com/vi/roA-HHX9-GU/maxresdefault.jpg',
          playTime: '02:44',
          views: 2691531,
          link: 'https://youtu.be/roA-HHX9-GU',
          createdAt: '2021-10-21T15:30:00Z'
        },
        creator: {
          id: '2',
          name: '[윤이련]50년 요리비결',
          thumbnail:
            'https://yt3.googleusercontent.com/j3pDzAVJ3emyqRkO83-103emFlUD93UyZoKt1dCwjZhbzJmb8Isl7enlRNGOySXXDkwbpBI57pw=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '3',
          title:
            '제발~ 떡볶이에 시간 투자하지 마세요. / 10분이면 충분합니다! 국물이 끝장나는 [국물떡볶이] Tteok-bokki(Stir-fried Rice Cake)',
          thumbnailURL: 'https://i.ytimg.com/vi/aV7zcAPmuPA/maxresdefault.jpg',
          playTime: '03:57',
          views: 2629276,
          link: 'https://youtu.be/aV7zcAPmuPA',
          createdAt: '2021-01-23T11:45:00Z'
        },
        creator: {
          id: '3',
          name: '이 남자의 cook',
          thumbnail:
            'https://yt3.googleusercontent.com/ytc/AGIKgqN54JVXb0jCh949lCsvLwJGnJM1VVARhDu9AXh9=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '4',
          title:
            'sub)진짜 분식집 떡볶이 만들기(분식집 떡볶이 레시피) 학교 앞에서 먹던 바로 그 맛! | 반디Bandi',
          thumbnailURL: 'https://i.ytimg.com/vi/aIgelu5E608/maxresdefault.jpg',
          playTime: '07:18',
          views: 4744521,
          link: 'https://youtu.be/aIgelu5E608',
          createdAt: '2019-07-19T19:20:00Z'
        },
        creator: {
          id: '4',
          name: '반디Bandi',
          thumbnail:
            'https://yt3.googleusercontent.com/ytc/AGIKgqOuSC0wUiLQ0czzk7UkevL6yQAZ-NTzcInEk2PsKw=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '5',
          title: '간장떡볶이 만들기::간단요리::#44',
          thumbnailURL: 'https://i.ytimg.com/vi/TEfW6u_Vfy8/maxresdefault.jpg',
          playTime: '02:47',
          views: 2557545,
          link: 'https://www.youtube.com/watch?v=TEfW6u_Vfy8',
          createdAt: '2019-06-06T08:55:00Z'
        },
        creator: {
          id: '5',
          name: '하루한끼 one meal a day',
          thumbnail:
            'https://yt3.googleusercontent.com/ytc/AGIKgqMua2ZT8A_yyQYfjQjS1cNqSiw4UhN8qkVgveJp=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '6',
          title:
            '양념과 떡이 따로논다구요? 포장마차 떡볶이처럼 찐득한 떡볶이 만드는 법.',
          thumbnailURL: 'https://i.ytimg.com/vi/0wLzQ_2TIkY/maxresdefault.jpg',
          playTime: '06:50',
          views: 2068991,
          link: 'https://youtu.be/0wLzQ_2TIkY',
          createdAt: '2020-04-08T14:10:00Z'
        },
        creator: {
          id: '6',
          name: '슈고 SHUGO COOK',
          thumbnail:
            'https://yt3.googleusercontent.com/5tp7RI5j20l5sPL22_i8jEGbtJHUSgVmRaBM7v34sLwL8GoT4as5HxtlMnhbWFhhq_nMXc529g=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '7',
          title:
            '6년을 갈아 넣은 떡볶이 양념에 저희 딸이 접시까지 핥아 먹고 있네요. 한번 달려 보입시다~',
          thumbnailURL: 'https://i.ytimg.com/vi/g6K87STXV-k/maxresdefault.jpg',
          playTime: '02:55',
          views: 778180,
          link: 'https://www.youtube.com/watch?v=g6K87STXV-k',
          createdAt: '2021-09-01T09:40:00Z'
        },
        creator: {
          id: '7',
          name: '쿡잇파파 C.E.P.P',
          thumbnail:
            'https://yt3.googleusercontent.com/lP5MSH0ECoAx4eL1BiV68ElBRWE8qVkCnVdaFB4xQPHl1Hq3x8Ynux7qi30cuuyrfnSczoH38UI=s176-c-k-c0x00ffffff-no-rj'
        }
      },
      {
        video: {
          id: '8',
          title:
            '🌹형수님이 꼽은 레이먼킴 레시피 1위! 스테이크도 떡볶이는 못 이기더라...🍝마성의 옛날 떡볶이 레시피',
          thumbnailURL: 'https://i.ytimg.com/vi/tPfpVBBdhNI/maxresdefault.jpg',
          playTime: '08:32',
          views: 348824,
          link: 'https://youtu.be/tPfpVBBdhNI',
          createdAt: '2021-03-17T16:05:00Z'
        },
        creator: {
          id: '7',
          name: '레이먼킴의 인생고기 RaymonKim Meat',
          thumbnail:
            'https://yt3.googleusercontent.com/CPUG6VuzaBO8nuBZMpDd0rHODpmnwQZ9LnyN0iHCIwLn-xW53vEa3TM8j35zirbMWDCOV4YNozg=s176-c-k-c0x00ffffff-no-rj'
        }
      }
    ]
  }
];

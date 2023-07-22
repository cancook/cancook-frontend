import styled from '@emotion/styled';
import Image from 'next/image';

type RotatingTextItem = {
  img: string;
  name: string;
};

type RotatingTextList = RotatingTextItem[];

const RotatingText = ({
  ingredientList
}: {
  ingredientList: RotatingTextList;
}) => {
  return (
    <RotatingTextContainer>
      <HeadRotatingTextList>
        {ingredientList.map((ingredient) => (
          <RotatingTextItem key={ingredient.name}>
            <EmojiWrapper>
              <Image
                src={`/asset/emoji/${ingredient.img}.png`}
                alt={`Emoji ${ingredient.img}`}
                fill
                style={{ objectFit: 'contain' }}
              />
            </EmojiWrapper>
            <RotatingTextName>{ingredient.name}</RotatingTextName>
          </RotatingTextItem>
        ))}
      </HeadRotatingTextList>
      <TailRotatingTextList>
        {ingredientList.map((ingredient) => (
          <RotatingTextItem key={ingredient.name}>
            <EmojiWrapper>
              <Image
                src={`/asset/emoji/${ingredient.img}.png`}
                alt={`Emoji ${ingredient.img}`}
                fill
                style={{ objectFit: 'contain' }}
              />
            </EmojiWrapper>
            <RotatingTextName>{ingredient.name}</RotatingTextName>
          </RotatingTextItem>
        ))}
      </TailRotatingTextList>
    </RotatingTextContainer>
  );
};

export default RotatingText;

// Text Rotating
const RotatingTextContainer = styled.div`
  position: relative;
  width: 6.75rem;
  height: 2.25rem;
  border-radius: 0.45rem;
  background: #232328;
  overflow: hidden;

  ${({ theme }) => theme.screen.desktop} {
    width: 15rem;
    height: 5rem;
    border-radius: 1rem;
  }
`;

// count 는 list item 의 숫자입니다.
const RotatingTextList = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation-duration: 10s;
  animation-timing-function: cubic-bezier(0.55, 0, 0.55, 1);
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
`;

const HeadRotatingTextList = styled(RotatingTextList)`
  animation-name: headTextMove;

  @keyframes headTextMove {
    0%,
    12.5% {
      top: 0;
    }
    25%,
    37.5% {
      top: calc(1 * -2.25rem);
    }
    50%,
    62.5% {
      top: calc(2 * -2.25rem);
    }
    75%,
    87.5% {
      top: calc(3 * -2.25rem);
    }
    100% {
      top: calc(4 * -2.25rem);
    }
  }

  ${({ theme }) => theme.screen.desktop} {
    @keyframes headTextMove {
      0%,
      12.5% {
        top: 0;
      }
      25%,
      37.5% {
        top: calc(1 * -5rem);
      }
      50%,
      62.5% {
        top: calc(2 * -5rem);
      }
      75%,
      87.5% {
        top: calc(3 * -5rem);
      }
      100% {
        top: calc(4 * -5rem);
      }
    }
  }
`;

const TailRotatingTextList = styled(RotatingTextList)`
  animation-name: tailTextMove;
  top: calc(-4 * -2.25rem);
  @keyframes tailTextMove {
    0%,
    12.5% {
      top: calc(-4 * -2.25rem);
    }
    25%,
    37.5% {
      top: calc(-3 * -2.25rem);
    }
    50%,
    62.5% {
      top: calc(-2 * -2.25rem);
    }
    75%,
    87.5% {
      top: calc(-1 * -2.25rem);
    }
    100% {
      top: calc(0 * -2.25rem);
    }
  }

  ${({ theme }) => theme.screen.desktop} {
    top: calc(-4 * -5rem);
    @keyframes tailTextMove {
      0%,
      12.5% {
        top: calc(-4 * -5rem);
      }
      25%,
      37.5% {
        top: calc(-3 * -5rem);
      }
      50%,
      62.5% {
        top: calc(-2 * -5rem);
      }
      75%,
      87.5% {
        top: calc(-1 * -5rem);
      }
      100% {
        top: calc(0 * -5rem);
      }
    }
  }
`;

const RotatingTextItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmojiWrapper = styled.div`
  position: relative;
  width: 1.65rem;
  height: 1.65rem;

  ${({ theme }) => theme.screen.desktop} {
    width: 4rem;
    height: 4rem;
  }
`;

const RotatingTextName = styled.span`
  text-align: center;
  color: #ffc043;
  font-family: Pretendard;
  font-size: 1.575rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.01688rem;
  padding: 0 0.375rem;
  line-height: 2.25rem;

  ${({ theme }) => theme.screen.desktop} {
    font-size: 3.5rem;
    line-height: 5rem;
    letter-spacing: -0.0375rem;
  }
`;

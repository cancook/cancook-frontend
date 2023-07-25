import React, { useState } from 'react';
import SearchInput from '../SearchInput';
import styled from '@emotion/styled';
import { Tab, Tabs } from '@/components/common/Tab';
import RefreshSvg from '@/public/svg/refresh.svg';
import Toggle from '@/components/common/Toggle';
import Button from '@/components/common/Button';

const SearchModal = () => {
  const [value, setValue] = useState<string>();
  const [selectedChecked, setSelectedChecked] = useState<boolean>(false);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const reset = () => {
    setSelectedIngredients([]);
  };
  return (
    <div>
      {/* Search Input 컨테이너 */}
      <SearhcInputContainer>
        {/* TODO: height 변경 */}
        <SearchInput
          isFocus={false}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          className="search-input"
        />
      </SearhcInputContainer>
      {/* Tab 컨테이너 */}
      <TabsContainer>
        <Tabs>
          <Tab title="고기칸">
            <div
              style={{
                fontSize: '2rem',
                height: 'calc(80vh - 18rem)',
                overflow: 'scroll'
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              temporibus, reiciendis quas saepe nihil voluptatem repudiandae
              iste et id architecto eum vero, voluptatum maiores impedit quos
              pariatur velit asperiores cumque. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Perferendis labore maiores harum
              quibusdam eum numquam et officia sint ipsam! Ipsum perspiciatis
              magni cum ipsam quae non voluptatum tempora deserunt accusamus.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              suscipit sapiente architecto distinctio reprehenderit delectus
              voluptates nobis, repudiandae assumenda similique dolore ipsa
              alias voluptatum, aut tempore illum quo sunt iure. Facilis quasi
              et minus eos, officiis tempore accusantium! Eos ipsam provident
              atque ullam, perspiciatis quae saepe in, aliquid dolorem placeat
              at odit dolores maiores. Voluptatibus rerum repellendus nesciunt
              quis enim! Delectus non distinctio necessitatibus eos magnam.
              Rerum ab ducimus omnis amet, blanditiis commodi suscipit in sed
              recusandae quis fugit eligendi aliquam impedit. Reiciendis id sit,
              at fugit qui quam hic? Ullam quis expedita nihil numquam quisquam
              sed accusamus voluptatem omnis, iure hic ab rerum itaque tenetur
              at enim error vitae vero? Obcaecati nam libero, officiis ducimus
              blanditiis error excepturi illo? Voluptate quisquam illum corporis
              explicabo dolor fugit accusantium consequuntur, similique
              necessitatibus eius aut ducimus nesciunt deleniti ut aliquid
              suscipit exercitationem tempore iste blanditiis repellendus
              dolores commodi delectus. Odio, expedita minima. Placeat,
              similique nulla quisquam nisi odit perferendis, cum tenetur quod
              iusto commodi voluptate natus, facere eligendi minima quasi
              aliquid ratione provident adipisci est totam non accusantium? Nam
              ullam minima quos! Ipsum a quidem temporibus odit quis enim minus,
              repudiandae reiciendis ipsa ab saepe illum obcaecati dolorem
              officiis quibusdam tempore. Fuga laboriosam ipsam quibusdam nisi
              doloremque quidem iure dolore nostrum omnis. Accusantium
              perferendis alias cum quam porro, nobis eos consectetur maiores!
              Nisi ea dolor reiciendis aliquam dolore obcaecati facere corrupti,
              incidunt unde officiis suscipit nam nesciunt, reprehenderit
              recusandae optio ducimus et. Facere ad explicabo officiis? Esse
              dolor numquam totam aliquam distinctio et perspiciatis dolores
              voluptatem deleniti nihil? Ipsam ab iusto, ipsum suscipit in unde
              voluptatem officiis ad eos repellat quam aspernatur? Similique
              excepturi totam omnis dolorem id deleniti quam recusandae!
              Voluptatibus, sint odit facere reiciendis alias, consequatur
              tempore provident dolor earum voluptate laudantium cum molestiae
              vel impedit iure aut accusamus mollitia.
            </div>
          </Tab>
          <Tab title="야채칸">Test 2</Tab>
          <Tab title="과일칸">Test 3</Tab>
          <Tab title="기타">Test 4</Tab>
        </Tabs>
      </TabsContainer>
      {/* 버튼 컨테이너 */}
      <ButtonContainer>
        <OptionalButtonContainer>
          <RefreshButton onClick={reset}>
            <RefreshSvg />
            <span className="optional-button-label">전체 초기화</span>
          </RefreshButton>
          <SelectedToggleWrapper
            onClick={() => {
              setSelectedChecked((prev) => !prev);
            }}
          >
            <span className="optional-button-label">선택 재료만</span>
            <Toggle
              checked={selectedChecked}
              setValue={() => {
                setSelectedChecked((prev) => !prev);
              }}
            />
          </SelectedToggleWrapper>
        </OptionalButtonContainer>
        <SubmitButtonContainer>
          <SubmitButton
            disabled={selectedIngredients.length === 0}
            onClick={() => {
              console.log('레시피 찾기');
            }}
          >
            레시피 찾기
          </SubmitButton>
        </SubmitButtonContainer>
      </ButtonContainer>
    </div>
  );
};

export default SearchModal;

// Search Container
const SearhcInputContainer = styled.div`
  padding: 0 1rem 0.5rem;

  ${({ theme }) => theme.screen.tablet} {
  }
`;

// Tab Container
const TabsContainer = styled.div`
  min-height: auto;
  ${({ theme }) => theme.screen.tablet} {
    height: 20rem;
  }
`;

// Button Container
const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 0.88rem;
  padding: 0.5rem 1.5rem 2rem;

  ${({ theme }) => theme.screen.tablet} {
    position: relative;
  }
`;

const OptionalButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .optional-button-label {
    ${({ theme }) => theme.font.body.sm};
    color: rgba(255, 255, 255, 0.5);
  }
`;

const RefreshButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;

  border: none;
  outline: none;
  background: none;
`;

const SelectedToggleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
`;

const SubmitButtonContainer = styled.div`
  width: 100%;
`;

const SubmitButton = styled(Button)`
  padding: 0.69rem 0;
`;

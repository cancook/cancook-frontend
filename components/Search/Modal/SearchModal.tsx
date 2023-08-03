import React, { useState } from 'react';
import SearchInput from '../SearchInput';
import styled from '@emotion/styled';
import { Tab, Tabs } from '@/components/common/Tab';
import RefreshSvg from '@/public/svg/refresh.svg';
import Toggle from '@/components/common/Toggle';
import Button from '@/components/common/Button';
import CheckboxField from '@/components/common/Checkbox';
import { useCategoryIngredientList } from '@/apis/ingredient';

const SearchModal = () => {
  const [value, setValue] = useState<string>();
  const [selectedChecked, setSelectedChecked] = useState<boolean>(false);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const { list: categoryIngredientList } = useCategoryIngredientList();

  const reset = () => {
    setSelectedIngredients([]);
  };

  if (categoryIngredientList.length === 0) return <></>;

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
          {categoryIngredientList.map((category: CategoryIngredient) => (
            <Tab key={category.category_name} title={category.category_name}>
              <TabWrapper>
                {category.ingredientNameList.map((ingredient: Ingredient) => (
                  <CheckboxFieldWrapper key={ingredient}>
                    <CheckboxField
                      name={ingredient}
                      label={ingredient}
                      checked={false}
                      setValue={() => {
                        console.log(ingredient);
                      }}
                    />
                  </CheckboxFieldWrapper>
                ))}
              </TabWrapper>
            </Tab>
          ))}
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

const TabWrapper = styled.div`
  display: flex;
  overflow: scroll;
  width: 100%;
  flex-direction: column;
`;
const CheckboxFieldWrapper = styled.div`
  width: 100%;
  padding: 0.62rem 1rem;
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

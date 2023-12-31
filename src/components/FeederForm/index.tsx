import React, { forwardRef, useImperativeHandle } from 'react';

import { useTheme } from 'styled-components/native';

import { Input, ChipButton, Button, Icon } from '..';

import * as Styled from './styles';
import { FeederFormProps, FeederFormRefProps } from './types';
import { useFeederForm } from './useFeederForm';

export const FeederForm = forwardRef<FeederFormRefProps, FeederFormProps>(
  ({ onSubmit, isLoading = false }, ref): React.JSX.Element => {
    const theme = useTheme();

    const {
      addressNumber,
      setAddressNumber,
      addressComplement,
      setAddressComplement,
      addressReference,
      setAddressReference,
      feederFoods,
      handleToggleFeedFoods,
      handleSubmit,
      populateFields,
    } = useFeederForm({ onSubmit });

    useImperativeHandle(ref, () => ({
      feederFoods,
      addressNumber,
      populateFields,
    }));

    return (
      <Styled.FormContent>
        <Styled.InputsWrapper>
          <Styled.InputContainer flex={1}>
            <Input
              value={addressNumber}
              onChangeText={setAddressNumber}
              placeholder="Número"
            />
          </Styled.InputContainer>

          <Styled.InputContainer flex={3}>
            <Input
              value={addressComplement}
              onChangeText={setAddressComplement}
              placeholder="Complemento"
              isOptional
            />

            <Styled.FieldDescription>
              Apto / Bloco / Casa
            </Styled.FieldDescription>
          </Styled.InputContainer>
        </Styled.InputsWrapper>

        <Styled.InputsWrapper>
          <Input
            value={addressReference}
            onChangeText={setAddressReference}
            placeholder="Ponto de referência"
            isOptional
          />
        </Styled.InputsWrapper>

        <Styled.FormFooter>
          <Styled.Label>Seu comedouro alimenta: </Styled.Label>

          <Styled.ChipsWrapper>
            <Styled.ChipButtonContainer>
              <ChipButton
                isSelected={feederFoods.dog}
                onPress={() => handleToggleFeedFoods('dog')}>
                <Icon
                  name="dog"
                  color={
                    feederFoods.dog
                      ? theme.colors.orange[500]
                      : theme.colors.gray[500]
                  }
                />
                <Styled.ChipButtonLabel isSelected={feederFoods.dog}>
                  Cachorros
                </Styled.ChipButtonLabel>
              </ChipButton>
            </Styled.ChipButtonContainer>

            <Styled.ChipButtonContainer>
              <ChipButton
                isSelected={feederFoods.cat}
                onPress={() => handleToggleFeedFoods('cat')}>
                <Icon
                  name="cat"
                  color={
                    feederFoods.cat
                      ? theme.colors.orange[500]
                      : theme.colors.gray[500]
                  }
                />
                <Styled.ChipButtonLabel isSelected={feederFoods.cat}>
                  Gatos
                </Styled.ChipButtonLabel>
              </ChipButton>
            </Styled.ChipButtonContainer>
          </Styled.ChipsWrapper>

          <ChipButton
            isSelected={feederFoods.others}
            onPress={() => handleToggleFeedFoods('others')}>
            <Icon
              name="dotsThreeCircle"
              color={
                feederFoods.others
                  ? theme.colors.orange[500]
                  : theme.colors.gray[500]
              }
            />
            <Styled.ChipButtonLabel isSelected={feederFoods.others}>
              Outros
            </Styled.ChipButtonLabel>
          </ChipButton>
        </Styled.FormFooter>

        <Button.Root
          type="filled"
          color={theme.colors.orange[500]}
          onPress={handleSubmit}
          disabled={isLoading}
          isLoading={isLoading}>
          <Button.Icon>
            <Icon name="archiveBox" color={theme.colors.gray[0]} />
          </Button.Icon>

          <Button.Text color={theme.colors.gray[0]}>
            Salvar comedouro
          </Button.Text>
        </Button.Root>
      </Styled.FormContent>
    );
  },
);

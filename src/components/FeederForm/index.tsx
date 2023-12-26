import React, { forwardRef, useImperativeHandle } from 'react';

import { useTheme } from 'styled-components/native';

import { Input, ChipButton, Button, Icon } from '..';

import * as S from './styles';
import { FeederFormProps, FeederFormRefProps } from './types';
import { useFeederForm } from './useFeederForm';

export const FeederForm = forwardRef<FeederFormRefProps, FeederFormProps>(
  ({ onSubmit, isLoading = false }, ref) => {
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
      <S.FormContent>
        <S.InputsWrapper>
          <S.InputContainer flex={1}>
            <Input
              value={addressNumber}
              onChangeText={setAddressNumber}
              placeholder="Número"
            />
          </S.InputContainer>

          <S.InputContainer flex={3}>
            <Input
              value={addressComplement}
              onChangeText={setAddressComplement}
              placeholder="Complemento"
              isOptional
            />

            <S.FieldDescription>Apto / Bloco / Casa</S.FieldDescription>
          </S.InputContainer>
        </S.InputsWrapper>

        <S.InputsWrapper>
          <Input
            value={addressReference}
            onChangeText={setAddressReference}
            placeholder="Ponto de referência"
            isOptional
          />
        </S.InputsWrapper>

        <S.FormFooter>
          <S.Label>Seu comedouro alimenta: </S.Label>

          <S.ChipsWrapper>
            <S.ChipButtonContainer>
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
                <S.ChipButtonLabel isSelected={feederFoods.dog}>
                  Cachorros
                </S.ChipButtonLabel>
              </ChipButton>
            </S.ChipButtonContainer>

            <S.ChipButtonContainer>
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
                <S.ChipButtonLabel isSelected={feederFoods.cat}>
                  Gatos
                </S.ChipButtonLabel>
              </ChipButton>
            </S.ChipButtonContainer>
          </S.ChipsWrapper>

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
            <S.ChipButtonLabel isSelected={feederFoods.others}>
              Outros
            </S.ChipButtonLabel>
          </ChipButton>
        </S.FormFooter>

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
      </S.FormContent>
    );
  },
);

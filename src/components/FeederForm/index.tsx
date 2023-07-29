import React, { forwardRef, useImperativeHandle } from 'react';

import { useTheme } from 'styled-components';
import Dog from 'phosphor-react-native/src/icons/Dog';
import Cat from 'phosphor-react-native/src/icons/Cat';
import DotsThreeCircle from 'phosphor-react-native/src/icons/DotsThreeCircle';
import ArchiveBox from 'phosphor-react-native/src/icons/ArchiveBox';

import { Input, ChipButton, Button } from '@src/components';
import { useFeederForm } from './useFeederForm';
import type { IFeederFormProps, IFeederFormRef } from './types';

import * as S from './styles';

export const FeederForm = forwardRef<IFeederFormRef, IFeederFormProps>(
  ({ onSubmit }, ref) => {
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
      isLoading,
      handleSubmit,
      clearFields,
      populateFields,
    } = useFeederForm({ onSubmit });

    useImperativeHandle(ref, () => ({
      feederFoods,
      addressNumber,
      clearFields,
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
                <Dog
                  color={
                    feederFoods.dog
                      ? theme.colors.primary[500]
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
                <Cat
                  color={
                    feederFoods.cat
                      ? theme.colors.primary[500]
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
            <DotsThreeCircle
              color={
                feederFoods.others
                  ? theme.colors.primary[500]
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
          color={theme.colors.primary[500]}
          onPress={handleSubmit}
          disabled={isLoading}
          isLoading={isLoading}>
          <Button.Icon>
            <ArchiveBox color={theme.colors.utils.white} />
          </Button.Icon>

          <Button.Text color={theme.colors.utils.white}>
            Salvar comedouro
          </Button.Text>
        </Button.Root>
      </S.FormContent>
    );
  },
);

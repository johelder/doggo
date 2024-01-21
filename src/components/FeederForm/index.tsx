import React, { forwardRef, useImperativeHandle } from 'react';

import { useTheme } from 'styled-components/native';

import { Button, Icon } from '..';

import { ChipButton } from './components/ChipButton';
import { Input } from './components/Input';
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
          <Input
            value={addressNumber}
            onChangeText={setAddressNumber}
            placeholder="Número"
            flex={1}
          />

          <Input
            value={addressComplement}
            onChangeText={setAddressComplement}
            placeholder="Complemento"
            description="Apto / Bloco / Casa"
            isOptional
            flex={3}
          />
        </Styled.InputsWrapper>

        <Input
          value={addressReference}
          onChangeText={setAddressReference}
          placeholder="Ponto de referência"
          isOptional
        />

        <Styled.FormFooter>
          <Styled.Label>Seu comedouro alimenta: </Styled.Label>

          <Styled.ChipsWrapper>
            <ChipButton
              isSelected={feederFoods.dog}
              onPress={() => handleToggleFeedFoods('dog')}
              iconName="dog"
              label="Cachorros"
            />

            <ChipButton
              isSelected={feederFoods.cat}
              onPress={() => handleToggleFeedFoods('cat')}
              iconName="cat"
              label="Gatos"
            />
          </Styled.ChipsWrapper>

          <ChipButton
            isSelected={feederFoods.others}
            onPress={() => handleToggleFeedFoods('others')}
            iconName="dotsThreeCircle"
            label="Outros"
          />
        </Styled.FormFooter>

        <Button.Root
          testID="create-feeder-button"
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

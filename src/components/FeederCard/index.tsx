import React from 'react';

import type { IReadOnlyCardProps } from './types';

import { Icon, Label, Root } from './components';

import * as S from './styles';

// export function WithActions({ feeder }: IFeederCardProps) {
//   const { isCollapsed, handleToggleCollapseSession } = useFeederCard();

//   const theme = useTheme();

//   const {
//     address: { street, houseNumber, neighborhood, city, complement, reference },
//     user,
//   } = feeder;

//   return (
//     <Root>
//       <Session>
//         <Icon name="map" />
//       </Session>
//     </Root>
//     // <S.Container>
//     //   <S.Header>
//     //     <MapPin color={theme.colors.gray[700]} size={24} />

//     //     <S.Title>
//     //       {street}, {houseNumber}, {neighborhood}, {city}
//     //     </S.Title>

//     //     {sideButton}
//     //   </S.Header>

//     //   <>
//     //     <S.LabelContainer>
//     //       <User color={theme.colors.gray[500]} size={24} />
//     //       <S.Label>
//     //         Comedouro de {user.name} - {complement}
//     //       </S.Label>
//     //     </S.LabelContainer>

//     //     <S.LabelContainer>
//     //       <CookingPot color={theme.colors.gray[500]} size={24} />
//     //       <S.Label>Comida para gatos e cachorros</S.Label>
//     //     </S.LabelContainer>
//     //   </>

//     //   {reference && (
//     //     <>
//     //       <S.CollapseButton onPress={handleToggleCollapseSession}>
//     //         {isCollapsed ? (
//     //           <CaretUp weight="bold" color={theme.colors.gray[500]} size={20} />
//     //         ) : (
//     //           <CaretDown
//     //             weight="bold"
//     //             color={theme.colors.gray[500]}
//     //             size={20}
//     //           />
//     //         )}
//     //       </S.CollapseButton>

//     //       {isCollapsed && (
//     //         <S.LabelContainer>
//     //           <PushPin color={theme.colors.gray[500]} size={24} />
//     //           <S.Label>{reference}</S.Label>
//     //         </S.LabelContainer>
//     //       )}
//     //     </>
//     //   )}

//     //   {!isReadOnly && (
//     //     <S.ButtonsContainer>
//     //       <S.ActionButton>
//     //         <Signpost color={theme.colors.gray[500]} size={24} />
//     //         <S.Label>Ver rotas</S.Label>
//     //       </S.ActionButton>

//     //       <S.ActionButton>
//     //         <Heart color={theme.colors.gray[500]} size={24} />
//     //         <S.Label>Favoritar</S.Label>
//     //       </S.ActionButton>
//     //     </S.ButtonsContainer>
//     //   )}
//     // </S.Container>
//   );
// }

function ReadOnly({ feeder, sideButton }: IReadOnlyCardProps) {
  const {
    address: { street, houseNumber, neighborhood, city, complement, reference },
  } = feeder;

  return (
    <Root>
      <S.Header>
        <S.Session>
          <Icon name="map" isTitle />
          <Label
            label={`${street}, ${houseNumber}, ${neighborhood}, ${city} - ${complement}`}
            isTitle
          />
        </S.Session>

        {sideButton}
      </S.Header>

      <S.Session>
        <Icon name="cookingPot" />
        <Label label="Comida para gatos e cachorros" />
      </S.Session>

      {reference && (
        <S.Session>
          <Icon name="pushPin" />
          <Label label={reference} />
        </S.Session>
      )}
    </Root>
  );
}

export const FeederCard = {
  // WithActions,
  ReadOnly,
};

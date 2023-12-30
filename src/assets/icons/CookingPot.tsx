import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { IconBase } from '@components';

export function CookingPot({ size = 24, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0001 6V2C11.0001 1.73478 11.1054 1.48043 11.293 1.29289C11.4805 1.10536 11.7348 1 12.0001 1C12.2653 1 12.5196 1.10536 12.7072 1.29289C12.8947 1.48043 13.0001 1.73478 13.0001 2V6C13.0001 6.26522 12.8947 6.51957 12.7072 6.70711C12.5196 6.89464 12.2653 7 12.0001 7C11.7348 7 11.4805 6.89464 11.293 6.70711C11.1054 6.51957 11.0001 6.26522 11.0001 6ZM16.0001 7C16.2653 7 16.5196 6.89464 16.7072 6.70711C16.8947 6.51957 17.0001 6.26522 17.0001 6V2C17.0001 1.73478 16.8947 1.48043 16.7072 1.29289C16.5196 1.10536 16.2653 1 16.0001 1C15.7348 1 15.4805 1.10536 15.293 1.29289C15.1054 1.48043 15.0001 1.73478 15.0001 2V6C15.0001 6.26522 15.1054 6.51957 15.293 6.70711C15.4805 6.89464 15.7348 7 16.0001 7ZM20.0001 7C20.2653 7 20.5196 6.89464 20.7072 6.70711C20.8947 6.51957 21.0001 6.26522 21.0001 6V2C21.0001 1.73478 20.8947 1.48043 20.7072 1.29289C20.5196 1.10536 20.2653 1 20.0001 1C19.7348 1 19.4805 1.10536 19.293 1.29289C19.1054 1.48043 19.0001 1.73478 19.0001 2V6C19.0001 6.26522 19.1054 6.51957 19.293 6.70711C19.4805 6.89464 19.7348 7 20.0001 7ZM31.6001 12.8L28.0001 15.5V23C28.0001 24.0609 27.5786 25.0783 26.8285 25.8284C26.0783 26.5786 25.0609 27 24.0001 27H8.00006C6.9392 27 5.92178 26.5786 5.17164 25.8284C4.42149 25.0783 4.00007 24.0609 4.00007 23V15.5L0.400065 12.8C0.187892 12.6409 0.0476229 12.404 0.0101156 12.1414C-0.0273916 11.8789 0.0409352 11.6122 0.200065 11.4C0.359195 11.1878 0.596093 11.0476 0.858644 11.0101C1.12119 10.9725 1.38789 11.0409 1.60007 11.2L4.00007 13V11C4.00007 10.4696 4.21078 9.96086 4.58585 9.58579C4.96092 9.21071 5.46963 9 6.00007 9H26.0001C26.5305 9 27.0392 9.21071 27.4143 9.58579C27.7894 9.96086 28.0001 10.4696 28.0001 11V13L30.4001 11.2C30.6122 11.0409 30.8789 10.9725 31.1415 11.0101C31.404 11.0476 31.6409 11.1878 31.8001 11.4C31.9592 11.6122 32.0275 11.8789 31.99 12.1414C31.9525 12.404 31.8122 12.6409 31.6001 12.8ZM26.0001 11H6.00007V23C6.00007 23.5304 6.21078 24.0391 6.58585 24.4142C6.96092 24.7893 7.46963 25 8.00006 25H24.0001C24.5305 25 25.0392 24.7893 25.4143 24.4142C25.7894 24.0391 26.0001 23.5304 26.0001 23V11Z"
        fill={color}
      />
    </Svg>
  );
}
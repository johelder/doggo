import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { IconBase } from '@components';

export function HeartFilled({ size = 24, color = 'black', ...rest }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none" {...rest}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.0001 11.75C30.0001 20.5 17.0263 27.5825 16.4738 27.875C16.3282 27.9533 16.1654 27.9943 16.0001 27.9943C15.8347 27.9943 15.6719 27.9533 15.5263 27.875C14.9738 27.5825 2.00006 20.5 2.00006 11.75C2.00238 9.69528 2.81964 7.72539 4.27254 6.27248C5.72545 4.81958 7.69534 4.00232 9.75006 4C12.3313 4 14.5913 5.11 16.0001 6.98625C17.4088 5.11 19.6688 4 22.2501 4C24.3048 4.00232 26.2747 4.81958 27.7276 6.27248C29.1805 7.72539 29.9977 9.69528 30.0001 11.75Z"
        fill={color}
      />
    </Svg>
  );
}

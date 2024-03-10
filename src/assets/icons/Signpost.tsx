import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { IconBase } from '@components';

export function Signpost({ size = 24, color = 'black', ...rest }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none" {...rest}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.7501 13.3313L26.2501 8.33125C26.1556 8.22617 26.0398 8.14232 25.9106 8.08523C25.7813 8.02813 25.6414 7.99908 25.5001 8H17.0001V4C17.0001 3.73478 16.8947 3.48043 16.7072 3.29289C16.5196 3.10536 16.2653 3 16.0001 3C15.7348 3 15.4805 3.10536 15.293 3.29289C15.1054 3.48043 15.0001 3.73478 15.0001 4V8H5.00006C4.46963 8 3.96092 8.21071 3.58585 8.58579C3.21077 8.96086 3.00006 9.46957 3.00006 10V18C3.00006 18.5304 3.21077 19.0391 3.58585 19.4142C3.96092 19.7893 4.46963 20 5.00006 20H15.0001V28C15.0001 28.2652 15.1054 28.5196 15.293 28.7071C15.4805 28.8946 15.7348 29 16.0001 29C16.2653 29 16.5196 28.8946 16.7072 28.7071C16.8947 28.5196 17.0001 28.2652 17.0001 28V20H25.5001C25.6403 20 25.779 19.9706 25.9072 19.9135C26.0353 19.8564 26.15 19.773 26.2438 19.6688L30.7438 14.6687C30.9098 14.4859 31.0023 14.2481 31.0035 14.0012C31.0046 13.7543 30.9143 13.5156 30.7501 13.3313ZM25.0551 18H5.00006V10H25.0551L28.6551 14L25.0551 18Z"
        fill={color}
      />
    </Svg>
  );
}

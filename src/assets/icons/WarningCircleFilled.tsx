import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { IconBase } from '@components';

export function WarningCircleFilled({ size = 24, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM15 10C15 9.73478 15.1054 9.48043 15.2929 9.29289C15.4804 9.10536 15.7348 9 16 9C16.2652 9 16.5196 9.10536 16.7071 9.29289C16.8946 9.48043 17 9.73478 17 10V17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18C15.7348 18 15.4804 17.8946 15.2929 17.7071C15.1054 17.5196 15 17.2652 15 17V10ZM16 23C15.7033 23 15.4133 22.912 15.1667 22.7472C14.92 22.5824 14.7277 22.3481 14.6142 22.074C14.5007 21.7999 14.4709 21.4983 14.5288 21.2074C14.5867 20.9164 14.7296 20.6491 14.9393 20.4393C15.1491 20.2296 15.4164 20.0867 15.7074 20.0288C15.9983 19.9709 16.2999 20.0007 16.574 20.1142C16.8481 20.2277 17.0824 20.42 17.2472 20.6666C17.412 20.9133 17.5 21.2033 17.5 21.5C17.5 21.8978 17.342 22.2794 17.0607 22.5607C16.7794 22.842 16.3978 23 16 23Z"
        fill={color}
      />
    </Svg>
  );
}

import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { IconBase } from '@components';

export function BoneFilled({ size = 24, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.89 13.465C28.1869 14.2716 27.2187 14.8005 26.1601 14.9563C25.1015 15.1122 24.022 14.8847 23.1162 14.315C23.1122 14.3134 23.1078 14.3134 23.1037 14.315L14.31 23.11C14.31 23.11 14.31 23.11 14.31 23.12C14.6663 23.6939 14.8888 24.3407 14.961 25.0123C15.0332 25.684 14.9533 26.3633 14.7272 26.9999C14.501 27.6364 14.1345 28.2139 13.6547 28.6894C13.1749 29.165 12.5942 29.5264 11.9557 29.7469C11.3172 29.9674 10.6372 30.0414 9.96621 29.9632C9.29521 29.8851 8.65042 29.6568 8.07966 29.2955C7.50891 28.9341 7.02683 28.4489 6.66919 27.8758C6.31155 27.3027 6.08753 26.6565 6.01374 25.985C5.34225 25.9112 4.69599 25.6872 4.1229 25.3295C3.5498 24.9719 3.06458 24.4898 2.70323 23.919C2.34187 23.3483 2.11365 22.7035 2.0355 22.0325C1.95734 21.3615 2.03126 20.6815 2.25177 20.043C2.47228 19.4045 2.83371 18.8238 3.30927 18.344C3.78483 17.8642 4.3623 17.4977 4.99886 17.2715C5.63541 17.0454 6.31471 16.9655 6.98637 17.0377C7.65803 17.1099 8.30482 17.3324 8.87874 17.6887C8.88277 17.6903 8.88722 17.6903 8.89124 17.6887L17.685 8.89372C17.685 8.89372 17.685 8.89372 17.685 8.88372C17.3287 8.30979 17.1062 7.66301 17.034 6.99135C16.9617 6.31969 17.0417 5.64039 17.2678 5.00383C17.4939 4.36728 17.8605 3.7898 18.3403 3.31425C18.8201 2.83869 19.4007 2.47725 20.0393 2.25674C20.6778 2.03624 21.3578 1.96232 22.0288 2.04047C22.6998 2.11862 23.3446 2.34684 23.9153 2.7082C24.4861 3.06956 24.9682 3.55478 25.3258 4.12787C25.6834 4.70097 25.9075 5.34723 25.9812 6.01872C26.802 6.10511 27.5832 6.41555 28.2393 6.91607C28.8955 7.41659 29.4014 8.08792 29.7017 8.85663C30.002 9.62535 30.0851 10.4618 29.9419 11.2746C29.7988 12.0874 29.4349 12.8451 28.89 13.465Z"
        fill={color}
      />
    </Svg>
  );
}

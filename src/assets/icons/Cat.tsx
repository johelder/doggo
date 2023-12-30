import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { IconBase } from '@components';

export function Cat({ size = 24, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 17.5001C12.0001 17.7967 11.9121 18.0867 11.7473 18.3334C11.5824 18.5801 11.3482 18.7723 11.0741 18.8859C10.8 18.9994 10.4984 19.0291 10.2074 18.9712C9.91645 18.9134 9.64918 18.7705 9.4394 18.5607C9.22962 18.3509 9.08676 18.0837 9.02888 17.7927C8.97101 17.5017 9.00071 17.2001 9.11424 16.926C9.22777 16.6519 9.42003 16.4177 9.66671 16.2528C9.91338 16.088 10.2034 16.0001 10.5001 16.0001C10.8979 16.0001 11.2794 16.1581 11.5607 16.4394C11.842 16.7207 12.0001 17.1022 12.0001 17.5001ZM21.5001 16.0001C21.2034 16.0001 20.9134 16.088 20.6667 16.2528C20.42 16.4177 20.2278 16.6519 20.1142 16.926C20.0007 17.2001 19.971 17.5017 20.0289 17.7927C20.0868 18.0837 20.2296 18.3509 20.4394 18.5607C20.6492 18.7705 20.9165 18.9134 21.2074 18.9712C21.4984 19.0291 21.8 18.9994 22.0741 18.8859C22.3482 18.7723 22.5824 18.5801 22.7473 18.3334C22.9121 18.0867 23.0001 17.7967 23.0001 17.5001C23.0001 17.1022 22.842 16.7207 22.5607 16.4394C22.2794 16.1581 21.8979 16.0001 21.5001 16.0001ZM29.0001 6.00005V17.0001C29.0001 23.6163 23.1688 29.0001 16.0001 29.0001C8.83131 29.0001 3.00006 23.6163 3.00006 17.0001V6.00005C3.00024 5.60462 3.11764 5.21812 3.33742 4.8894C3.55719 4.56067 3.86948 4.30447 4.23482 4.15317C4.60016 4.00187 5.00215 3.96226 5.38999 4.03936C5.77783 4.11645 6.13411 4.30678 6.41381 4.5863C6.43131 4.6038 6.44631 4.62005 6.46131 4.63755L8.62506 7.12505C10.8375 5.7389 13.3955 5.00375 16.0063 5.00375C18.6171 5.00375 21.1751 5.7389 23.3876 7.12505L25.5388 4.63755C25.5538 4.62005 25.5688 4.6038 25.5863 4.5863C25.866 4.30678 26.2223 4.11645 26.6101 4.03936C26.998 3.96226 27.4 4.00187 27.7653 4.15317C28.1306 4.30447 28.4429 4.56067 28.6627 4.8894C28.8825 5.21812 28.9999 5.60462 29.0001 6.00005ZM27.0001 6.00005L24.3051 9.10005C24.1402 9.29077 23.9094 9.41219 23.6588 9.44C23.4083 9.46782 23.1565 9.39997 22.9538 9.25005C22.3438 8.79892 21.6891 8.41148 21.0001 8.0938V11.0001C21.0001 11.2653 20.8947 11.5196 20.7072 11.7072C20.5196 11.8947 20.2653 12.0001 20.0001 12.0001C19.7348 12.0001 19.4805 11.8947 19.293 11.7072C19.1054 11.5196 19.0001 11.2653 19.0001 11.0001V7.3813C18.344 7.21254 17.675 7.09881 17.0001 7.0413V11.0001C17.0001 11.2653 16.8947 11.5196 16.7072 11.7072C16.5196 11.8947 16.2653 12.0001 16.0001 12.0001C15.7348 12.0001 15.4805 11.8947 15.293 11.7072C15.1054 11.5196 15.0001 11.2653 15.0001 11.0001V7.0413C14.3251 7.09881 13.6561 7.21254 13.0001 7.3813V11.0001C13.0001 11.2653 12.8947 11.5196 12.7072 11.7072C12.5196 11.8947 12.2653 12.0001 12.0001 12.0001C11.7348 12.0001 11.4805 11.8947 11.293 11.7072C11.1054 11.5196 11.0001 11.2653 11.0001 11.0001V8.0938C10.311 8.41148 9.65636 8.79892 9.04631 9.25005C8.84409 9.40041 8.59255 9.46888 8.34202 9.44177C8.09149 9.41465 7.86043 9.29395 7.69506 9.1038L5.00006 6.00005V17.0001C5.00006 22.2076 9.40131 26.5001 15.0001 26.9588V24.4138L13.2926 22.7063C13.1997 22.6134 13.1261 22.5031 13.0759 22.3817C13.0257 22.2604 12.9999 22.1303 12.9999 21.999C13 21.8676 13.0259 21.7376 13.0762 21.6163C13.1266 21.495 13.2003 21.3848 13.2932 21.2919C13.4808 21.1045 13.7353 20.9992 14.0005 20.9993C14.1318 20.9994 14.2619 21.0253 14.3832 21.0756C14.5045 21.1259 14.6147 21.1996 14.7076 21.2926L16.0001 22.5851L17.2926 21.2926C17.3854 21.1996 17.4956 21.1259 17.6169 21.0756C17.7382 21.0253 17.8683 20.9994 17.9996 20.9993C18.131 20.9993 18.261 21.0251 18.3824 21.0753C18.5037 21.1255 18.614 21.1991 18.7069 21.2919C18.7998 21.3848 18.8736 21.495 18.9239 21.6163C18.9742 21.7376 19.0001 21.8676 19.0002 21.999C19.0002 22.1303 18.9744 22.2604 18.9242 22.3817C18.874 22.5031 18.8004 22.6134 18.7076 22.7063L17.0001 24.4138V26.9588C22.5988 26.4976 27.0001 22.2088 27.0001 17.0001V6.00005Z"
        fill={color}
      />
    </Svg>
  );
}
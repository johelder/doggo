import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { IconBase } from '@components';

export function ArchiveBox({ size = 24, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.8951 8.5525L25.8951 4.5525C25.812 4.38636 25.6842 4.24667 25.5261 4.14908C25.368 4.05149 25.1859 3.99987 25.0001 4H7.00012C6.81434 3.99987 6.6322 4.05149 6.47412 4.14908C6.31603 4.24667 6.18826 4.38636 6.10512 4.5525L4.10512 8.5525C4.03619 8.69161 4.00026 8.84475 4.00012 9V26C4.00012 26.5304 4.21084 27.0391 4.58591 27.4142C4.96098 27.7893 5.46969 28 6.00012 28H26.0001C26.5306 28 27.0393 27.7893 27.4143 27.4142C27.7894 27.0391 28.0001 26.5304 28.0001 26V9C28 8.84475 27.9641 8.69161 27.8951 8.5525ZM7.61762 6H24.3826L25.3826 8H6.61762L7.61762 6ZM26.0001 26H6.00012V10H26.0001V26ZM20.7076 18.2925C20.8006 18.3854 20.8744 18.4957 20.9247 18.6171C20.975 18.7385 21.0009 18.8686 21.0009 19C21.0009 19.1314 20.975 19.2615 20.9247 19.3829C20.8744 19.5043 20.8006 19.6146 20.7076 19.7075L16.7076 23.7075C16.6147 23.8005 16.5045 23.8742 16.3831 23.9246C16.2617 23.9749 16.1315 24.0008 16.0001 24.0008C15.8687 24.0008 15.7386 23.9749 15.6172 23.9246C15.4958 23.8742 15.3855 23.8005 15.2926 23.7075L11.2926 19.7075C11.105 19.5199 10.9996 19.2654 10.9996 19C10.9996 18.7346 11.105 18.4801 11.2926 18.2925C11.4803 18.1049 11.7348 17.9994 12.0001 17.9994C12.2655 17.9994 12.52 18.1049 12.7076 18.2925L15.0001 20.5863V13C15.0001 12.7348 15.1055 12.4804 15.293 12.2929C15.4806 12.1054 15.7349 12 16.0001 12C16.2653 12 16.5197 12.1054 16.7072 12.2929C16.8948 12.4804 17.0001 12.7348 17.0001 13V20.5863L19.2926 18.2925C19.3855 18.1995 19.4958 18.1258 19.6172 18.0754C19.7386 18.0251 19.8687 17.9992 20.0001 17.9992C20.1315 17.9992 20.2617 18.0251 20.3831 18.0754C20.5045 18.1258 20.6147 18.1995 20.7076 18.2925Z"
        fill={color}
      />
    </Svg>
  );
}

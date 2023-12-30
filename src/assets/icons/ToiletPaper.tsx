import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { IconBase } from '@components';

export function ToiletPaper({ size = 24, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.50012 15C9.50012 15.2967 9.41215 15.5867 9.24733 15.8334C9.0825 16.08 8.84824 16.2723 8.57415 16.3858C8.30006 16.4993 7.99846 16.5291 7.70749 16.4712C7.41652 16.4133 7.14924 16.2704 6.93946 16.0607C6.72968 15.8509 6.58682 15.5836 6.52894 15.2926C6.47107 15.0017 6.50077 14.7001 6.6143 14.426C6.72783 14.1519 6.92009 13.9176 7.16677 13.7528C7.41344 13.588 7.70345 13.5 8.00012 13.5C8.39795 13.5 8.77948 13.658 9.06078 13.9393C9.34209 14.2206 9.50012 14.6022 9.50012 15ZM30.0001 15V26C30.0001 26.5304 29.7894 27.0391 29.4143 27.4142C29.0393 27.7893 28.5306 28 28.0001 28H14.0001C13.4697 28 12.961 27.7893 12.5859 27.4142C12.2108 27.0391 12.0001 26.5304 12.0001 26V23.2938C10.9214 25.0463 9.52262 26 8.00012 26C6.26637 26 4.69262 24.7637 3.57012 22.5187C2.55762 20.5 2.00012 17.8238 2.00012 15C2.00012 12.1762 2.55762 9.50625 3.57012 7.48125C4.69262 5.23625 6.26637 4 8.00012 4H24.0001C25.7339 4 27.3076 5.23625 28.4301 7.48125C29.4426 9.50625 30.0001 12.1762 30.0001 15ZM12.0001 15C12.0001 9.69625 9.89262 6 8.00012 6C6.10762 6 4.00012 9.69625 4.00012 15C4.00012 20.3038 6.10762 24 8.00012 24C9.89262 24 12.0001 20.3038 12.0001 15ZM28.0001 26V16H26.0001C25.7349 16 25.4806 15.8946 25.293 15.7071C25.1055 15.5196 25.0001 15.2652 25.0001 15C25.0001 14.7348 25.1055 14.4804 25.293 14.2929C25.4806 14.1054 25.7349 14 26.0001 14H27.9739C27.7301 9.2375 25.7701 6 24.0001 6H11.5151C11.8663 6.46371 12.1726 6.95968 12.4301 7.48125C13.3226 9.26625 13.8601 11.5512 13.9764 14H16.0001C16.2653 14 16.5197 14.1054 16.7072 14.2929C16.8948 14.4804 17.0001 14.7348 17.0001 15C17.0001 15.2652 16.8948 15.5196 16.7072 15.7071C16.5197 15.8946 16.2653 16 16.0001 16H14.0001V26H28.0001ZM22.0001 14H20.0001C19.7349 14 19.4806 14.1054 19.293 14.2929C19.1055 14.4804 19.0001 14.7348 19.0001 15C19.0001 15.2652 19.1055 15.5196 19.293 15.7071C19.4806 15.8946 19.7349 16 20.0001 16H22.0001C22.2653 16 22.5197 15.8946 22.7072 15.7071C22.8948 15.5196 23.0001 15.2652 23.0001 15C23.0001 14.7348 22.8948 14.4804 22.7072 14.2929C22.5197 14.1054 22.2653 14 22.0001 14Z"
        fill={color}
      />
    </Svg>
  );
}
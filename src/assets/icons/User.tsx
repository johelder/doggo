import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { IconBase } from '@components';

export function User({ size = 24, color = 'black', ...rest }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none" {...rest}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.865 26.5C26.9613 23.2087 24.0275 20.8487 20.6038 19.73C22.2973 18.7218 23.6131 17.1856 24.349 15.3572C25.085 13.5289 25.2004 11.5095 24.6776 9.60918C24.1548 7.70887 23.0226 6.03272 21.455 4.83814C19.8874 3.64355 17.9709 2.99658 16 2.99658C14.0291 2.99658 12.1127 3.64355 10.5451 4.83814C8.97743 6.03272 7.84528 7.70887 7.32246 9.60918C6.79964 11.5095 6.91507 13.5289 7.65102 15.3572C8.38697 17.1856 9.70274 18.7218 11.3963 19.73C7.97253 20.8475 5.03878 23.2075 3.13503 26.5C3.06522 26.6138 3.01891 26.7405 2.99884 26.8725C2.97878 27.0045 2.98535 27.1392 3.01819 27.2687C3.05102 27.3981 3.10945 27.5197 3.19002 27.6262C3.2706 27.7326 3.37168 27.8219 3.48731 27.8887C3.60295 27.9555 3.73079 27.9985 3.86329 28.015C3.9958 28.0316 4.13028 28.0215 4.25881 27.9853C4.38734 27.949 4.50731 27.8874 4.61164 27.8041C4.71598 27.7207 4.80256 27.6173 4.86628 27.5C7.22128 23.43 11.3838 21 16 21C20.6163 21 24.7788 23.43 27.1338 27.5C27.1975 27.6173 27.2841 27.7207 27.3884 27.8041C27.4928 27.8874 27.6127 27.949 27.7413 27.9853C27.8698 28.0215 28.0043 28.0316 28.1368 28.015C28.2693 27.9985 28.3971 27.9555 28.5128 27.8887C28.6284 27.8219 28.7295 27.7326 28.81 27.6262C28.8906 27.5197 28.949 27.3981 28.9819 27.2687C29.0147 27.1392 29.0213 27.0045 29.0012 26.8725C28.9812 26.7405 28.9348 26.6138 28.865 26.5ZM9.00003 12C9.00003 10.6155 9.41058 9.26214 10.1797 8.11099C10.9489 6.95985 12.0422 6.06264 13.3212 5.53283C14.6003 5.00301 16.0078 4.86439 17.3657 5.13449C18.7235 5.40458 19.9708 6.07127 20.9498 7.05023C21.9287 8.0292 22.5954 9.27648 22.8655 10.6344C23.1356 11.9922 22.997 13.3997 22.4672 14.6788C21.9374 15.9578 21.0402 17.0511 19.889 17.8203C18.7379 18.5894 17.3845 19 16 19C14.1441 18.998 12.3648 18.2599 11.0525 16.9475C9.74015 15.6352 9.00202 13.8559 9.00003 12Z"
        fill={color}
      />
    </Svg>
  );
}

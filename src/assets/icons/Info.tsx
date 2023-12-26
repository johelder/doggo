import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { IconBase } from '@components';

export function Info({ size = 24, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.0001 3C12.6267 3 10.3067 3.70379 8.33328 5.02236C6.35989 6.34094 4.82182 8.21508 3.91357 10.4078C3.00532 12.6005 2.76768 15.0133 3.2307 17.3411C3.69373 19.6689 4.83662 21.807 6.51485 23.4853C8.19308 25.1635 10.3313 26.3064 12.659 26.7694C14.9868 27.2324 17.3996 26.9948 19.5923 26.0865C21.785 25.1783 23.6592 23.6402 24.9778 21.6668C26.2963 19.6934 27.0001 17.3734 27.0001 15C26.9968 11.8184 25.7314 8.76814 23.4817 6.51843C21.232 4.26872 18.1817 3.00336 15.0001 3ZM15.0001 25.1538C12.9919 25.1538 11.0287 24.5583 9.35895 23.4426C7.68916 22.3269 6.38772 20.7411 5.6192 18.8857C4.85068 17.0303 4.6496 14.9887 5.04138 13.0191C5.43317 11.0494 6.40023 9.24019 7.82027 7.82015C9.24031 6.40011 11.0496 5.43305 13.0192 5.04126C14.9889 4.64947 17.0305 4.85055 18.8858 5.61907C20.7412 6.38759 22.327 7.68903 23.4427 9.35882C24.5585 11.0286 25.154 12.9918 25.154 15C25.1509 17.692 24.0802 20.2729 22.1766 22.1765C20.2731 24.08 17.6922 25.1508 15.0001 25.1538ZM16.8463 20.5385C16.8463 20.7833 16.749 21.0181 16.5759 21.1912C16.4028 21.3643 16.168 21.4615 15.9232 21.4615C15.4336 21.4615 14.964 21.267 14.6178 20.9208C14.2716 20.5746 14.077 20.105 14.077 19.6154V15C13.8322 15 13.5974 14.9027 13.4243 14.7296C13.2512 14.5565 13.154 14.3217 13.154 14.0769C13.154 13.8321 13.2512 13.5973 13.4243 13.4242C13.5974 13.2511 13.8322 13.1538 14.077 13.1538C14.5667 13.1538 15.0363 13.3483 15.3825 13.6946C15.7287 14.0408 15.9232 14.5104 15.9232 15V19.6154C16.168 19.6154 16.4028 19.7126 16.5759 19.8857C16.749 20.0589 16.8463 20.2936 16.8463 20.5385ZM13.154 9.92308C13.154 9.64922 13.2352 9.38152 13.3873 9.15383C13.5395 8.92613 13.7557 8.74866 14.0087 8.64386C14.2617 8.53906 14.5401 8.51164 14.8087 8.56507C15.0773 8.61849 15.324 8.75036 15.5177 8.944C15.7113 9.13765 15.8432 9.38436 15.8966 9.65295C15.95 9.92154 15.9226 10.1999 15.8178 10.4529C15.713 10.706 15.5355 10.9222 15.3078 11.0743C15.0801 11.2265 14.8124 11.3077 14.5386 11.3077C14.1714 11.3077 13.8192 11.1618 13.5595 10.9021C13.2999 10.6425 13.154 10.2903 13.154 9.92308Z"
        fill={color}
      />
    </Svg>
  );
}

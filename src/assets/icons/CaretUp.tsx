import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { IconBase } from '@components';

export function CaretUp({ size = 24, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.0612 21.0613C26.9218 21.2011 26.7563 21.3121 26.5739 21.3878C26.3916 21.4635 26.1961 21.5025 25.9987 21.5025C25.8013 21.5025 25.6058 21.4635 25.4235 21.3878C25.2411 21.3121 25.0756 21.2011 24.9362 21.0613L15.9999 12.125L7.0612 21.0613C6.7794 21.3431 6.39721 21.5014 5.9987 21.5014C5.60018 21.5014 5.21799 21.3431 4.9362 21.0613C4.6544 20.7795 4.49609 20.3973 4.49609 19.9988C4.49609 19.6003 4.6544 19.2181 4.9362 18.9363L14.9362 8.9363C15.0756 8.79646 15.2411 8.6855 15.4235 8.6098C15.6058 8.53409 15.8013 8.49512 15.9987 8.49512C16.1961 8.49512 16.3916 8.53409 16.5739 8.6098C16.7563 8.6855 16.9218 8.79646 17.0612 8.9363L27.0612 18.9363C27.201 19.0757 27.312 19.2412 27.3877 19.4236C27.4634 19.6059 27.5024 19.8014 27.5024 19.9988C27.5024 20.1962 27.4634 20.3917 27.3877 20.574C27.312 20.7564 27.201 20.9219 27.0612 21.0613Z"
        fill={color}
      />
    </Svg>
  );
}
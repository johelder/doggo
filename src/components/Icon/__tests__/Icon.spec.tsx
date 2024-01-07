import React from 'react';

import { fireEvent, render } from 'test-utils';

import { Icon } from '..';
import { IconProps } from '../types';

describe('<Icon />', () => {
  it('should call the onPress function when user tap in the icon', () => {
    const iconName: IconProps['name'] = 'archiveBox';
    const mockedOnPress = jest.fn();

    const { getByTestId } = render(
      <Icon name={iconName} onPress={mockedOnPress} />,
    );

    fireEvent.press(getByTestId(iconName));

    expect(mockedOnPress).toHaveBeenCalled();
  });
});

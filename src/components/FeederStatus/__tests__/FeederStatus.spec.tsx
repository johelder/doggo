import React from 'react';
import { StyleSheet } from 'react-native';

import { render } from 'test-utils';

import { IconProps } from '@components';
import { theme } from '@theme';

import { FeederStatus } from '..';

describe('<FeederStatus />', () => {
  it('should render the correct label text and color when feeder do not need maintenance', () => {
    const { getByText } = render(<FeederStatus isNeedMaintenance={false} />);

    const component = getByText('Manutenção em dias');
    const componentStyles = StyleSheet.flatten(component.props.style);

    expect(component).toBeTruthy();
    expect(componentStyles.color).toBe(theme.colors.green[500]);
  });

  it('should render the correct label text and color when feeder need maintenance', () => {
    const { getByText } = render(<FeederStatus isNeedMaintenance />);

    const component = getByText('Precisando de manutenção');
    const componentStyles = StyleSheet.flatten(component.props.style);

    expect(component).toBeTruthy();
    expect(componentStyles.color).toBe(theme.colors.red[500]);
  });

  it('should render the correct icon when feeder do not need maintenance', () => {
    const { getByTestId } = render(<FeederStatus isNeedMaintenance={false} />);

    const iconName: IconProps['name'] = 'checkCircle';
    const iconComponent = getByTestId(iconName);

    expect(iconComponent).toBeTruthy();
  });

  it('should render the correct icon when feeder need maintenance', () => {
    const { getByTestId } = render(<FeederStatus isNeedMaintenance />);

    const iconName: IconProps['name'] = 'info';
    const iconComponent = getByTestId(iconName);

    expect(iconComponent).toBeTruthy();
  });
});

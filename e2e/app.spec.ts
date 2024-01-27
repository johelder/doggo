import { device, element, by, expect, waitFor } from 'detox';

import { getElementTextById } from './utils';

async function AuthenticateInApp() {
  await element(by.id('google-button')).tap();
  await expect(element(by.id('location-permission-screen'))).toExist();

  await element(by.id('location-permission-button')).tap();
  await expect(element(by.id('map-component'))).toBeVisible();
}

describe('App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await AuthenticateInApp();
  });

  it('should able to create a feeder', async () => {
    await element(by.id('new-feeder-button')).tap();

    await waitFor(element(by.text(/Continuar/)))
      .toBeVisible()
      .withTimeout(5000);

    await element(by.id('map-component')).swipe('down', 'slow');

    const headerTitle = await getElementTextById('custom-header-title');
    const headerSubtitle = await getElementTextById('custom-header-subtitle');

    const [formattedHeaderTitle] = headerTitle.split(',');
    const formattedHeaderSubtitle = headerSubtitle.replace(' -', ',');

    await element(by.text(/Continuar/)).tap();

    await expect(element(by.id('address-title'))).toHaveText(
      formattedHeaderTitle,
    );
    await expect(element(by.id('address-subtitle'))).toHaveText(
      formattedHeaderSubtitle,
    );

    await element(by.id('address-number')).typeText('fake-number');
    await element(by.id('address-complement')).typeText('fake-complement');
    await element(by.id('address-reference')).typeText('fake-reference');
    await element(by.id('address-reference')).typeText('\n');
    await element(by.id('feeder-dog-foods')).tap();
    await element(by.id('feeder-cat-foods')).tap();
    await element(by.id('feeder-others-foods')).tap();

    await element(by.text(/Salvar comedouro/)).tap();

    await waitFor(element(by.text(/Comedouro criado com sucesso./)))
      .toBeVisible()
      .withTimeout(3000);
  });

  // it('should able favorite a feeder', async () => {
  //   await element(by.text(/Ver detalhes/))
  //     .atIndex(0)
  //     .tap();

  //   await waitFor(element(by.id('feeder-details-screen')))
  //     .toBeVisible()
  //     .withTimeout(3000);

  //   await element(by.id('favorite-button')).tap();

  //   await waitFor(element(by.text(/Favorito/)))
  //     .toBeVisible()
  //     .withTimeout(3000);
  // });
});

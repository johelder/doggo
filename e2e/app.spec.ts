import { device, element, by, expect, waitFor } from 'detox';

import { getElementTextById, goBack } from './utils';

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

    await element(by.id('map-component')).swipe('down', 'fast', NaN, 0.3);

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

    await waitFor(element(by.id('my-feeders-screen')))
      .toBeVisible()
      .withTimeout(3000);
  });

  it('should able favorite a feeder', async () => {
    await element(by.text(/Ver detalhes/))
      .atIndex(0)
      .tap();

    await waitFor(element(by.id('feeder-details-screen')))
      .toBeVisible()
      .withTimeout(3000);

    await element(by.id('favorite-button')).tap();

    await waitFor(element(by.text(/Favorito/)))
      .toBeVisible()
      .withTimeout(3000);

    await goBack();

    await element(by.id('profile-screen')).tap();
    await element(by.text(/Favoritos/)).tap();

    await expect(
      element(by.text(/Comedouro de doggo tester/)).atIndex(0),
    ).toBeVisible();
  });

  it('must be possible to update the maintenance of a feeder', async () => {
    await element(by.text(/Ver detalhes/))
      .atIndex(0)
      .tap();

    await element(by.text(/Reabasteci o comedouro/)).tap();
    await element(by.text(/Limpei o comedouro/)).tap();
    await element(by.id('update-maintenance-button')).tap();

    await expect(element(by.id('home-screen'))).toExist();
  });

  it('must be possible to delete a feeder', async () => {
    await element(by.id('profile-screen')).tap();
    await element(by.text(/Meus comedouros/)).tap();
    await element(by.id('feeder-address')).atIndex(0).tap();
    await element(by.id('delete-feeder-button')).tap();

    await expect(element(by.id('feeder-address'))).not.toBeVisible();
  });
});

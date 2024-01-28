import { by, element, device } from 'detox';
import { AndroidElementAttributes, IosElementAttributes } from 'detox/detox';

export async function getElementTextById(elementId: string) {
  const attributes = (await element(by.id(elementId)).getAttributes()) as
    | IosElementAttributes
    | AndroidElementAttributes;

  return attributes.text ?? '';
}

export const goBack = async () => {
  if (device.getPlatform() === 'android') {
    await device.pressBack();

    return;
  }

  await element(by.traits(['button']))
    .atIndex(0)
    .tap();
};

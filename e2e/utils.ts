import { by, element } from 'detox';
import { AndroidElementAttributes, IosElementAttributes } from 'detox/detox';

export async function getElementTextById(elementId: string) {
  const attributes = (await element(by.id(elementId)).getAttributes()) as
    | IosElementAttributes
    | AndroidElementAttributes;

  return attributes.text ?? '';
}

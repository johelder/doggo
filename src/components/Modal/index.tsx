import React from 'react';

import { Modalize } from 'react-native-modalize';

import { ModalProps } from './types';

export function Modal({
  modalRef,
  children,
  ...rest
}: ModalProps): React.JSX.Element {
  return (
    <Modalize ref={modalRef} {...rest}>
      {children}
    </Modalize>
  );
}

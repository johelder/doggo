import React from 'react';

import { Modalize } from 'react-native-modalize';

import { IModalProps } from './types';

export function Modal({ modalRef, children, ...rest }: IModalProps) {
  return (
    <Modalize ref={modalRef} {...rest}>
      {children}
    </Modalize>
  );
}

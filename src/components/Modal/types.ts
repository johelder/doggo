import { ReactNode, RefObject } from 'react';

import { Modalize, ModalizeProps } from 'react-native-modalize';

export interface ModalProps extends ModalizeProps {
  modalRef: RefObject<Modalize>;
  children: ReactNode;
}

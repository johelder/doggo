import type { ReactNode, RefObject } from 'react';
import type { Modalize, ModalizeProps } from 'react-native-modalize';

export interface IModalProps extends ModalizeProps {
  modalRef: RefObject<Modalize>;
  children: ReactNode;
}

import React, { FC, useCallback } from 'react';

import { StyledModal } from './Modal-styles';
import AddModal from './AddModal';

interface Props {
  type: 'add' | 'edit';
  isOpen: boolean;
  closeModal: (e: Event | React.MouseEvent<HTMLDivElement, MouseEvent> | undefined) => void;
}

const Modal: FC<Props> = ({ type, isOpen, closeModal }: Props) => {
  const getModalType = useCallback(() => {
    switch (type) {
      case 'add':
        return <AddModal buttonText='Add' />;
      case 'edit':
        return <AddModal buttonText='Edit' />;
      default:
        return null;
    }
  }, [type]);

  return (
    <StyledModal isOpen={isOpen} onBackgroundClick={closeModal} onEscapeKeydown={closeModal}>
      {getModalType()}
    </StyledModal>
  );
};

export default Modal;

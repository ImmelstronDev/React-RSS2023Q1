import { createContext, useContext } from 'react';

interface StartContext {
  handleOpenModal: (id: number) => void;
  handleCloseModal: () => void;
  modalData: ModalState;
}
export interface ModalState {
  isModal: boolean;
  isLoading: boolean;
  id: number | null;
}

export const HomeContext = createContext<StartContext>({
  handleOpenModal: () => {},
  handleCloseModal: () => {},
  modalData: { isModal: false, isLoading: false, id: null },
});

export const useHomePageContext = () => useContext(HomeContext);

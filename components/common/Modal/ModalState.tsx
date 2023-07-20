import { create } from 'zustand';
import React from 'react';

export type ModalState = {
  /** className */
  className?: string;
  /** Vsisibility */
  show: boolean;
  /** Title */
  title?: string;
  /** Content body */
  body: React.ReactNode;
};

const initialState: ModalState = {
  show: false,
  body: null
};

export const useModalStore = create(() => initialState);

export const showModal = (args: ModalState) => {
  const { show, ...rest } = args;
  useModalStore.setState({
    ...initialState,
    ...args
  });
};

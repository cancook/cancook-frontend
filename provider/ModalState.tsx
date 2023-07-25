import { create } from 'zustand';
import React from 'react';

export type ModalState = {
  /** className */
  className?: string;
  /** Vsisibility */
  show: boolean;
  /** Title */
  title?: string;
  /** Content body that is full screen in mobile */
  fullScreen?: boolean;
  /** Content body in normal modal state*/
  body: React.ReactNode;
};

const initialState: ModalState = {
  className: undefined,
  show: false,
  title: undefined,
  body: <></>,
  fullScreen: false
};

export const useModalStore = create(() => initialState);

export const resetModal = () => {
  useModalStore.setState(initialState);
};

export const closeModal = () => {
  useModalStore.setState({ ...initialState, show: false });
};

export const showModal = (args: ModalState) => {
  const { show, ...rest } = args;
  useModalStore.setState({
    ...initialState,
    ...args
  });
};

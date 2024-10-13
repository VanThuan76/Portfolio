import { closeModal, openModal } from "@store/app-slice";
import { RootState, useAppDispatch, useAppSelector } from "@store/index";

export type ModalType = "article";
export type ModalData = any;

export type ModalProps = {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
};

function useModal() {
  const modalStore = useAppSelector((state: RootState) => state.app.modalStore);
  const dispatch = useAppDispatch();

  const onOpen = (type: ModalType, data?: ModalData) => {
    dispatch(openModal({ type, data, isOpen: true }));
  };

  const onClose = () => {
    dispatch(closeModal());
  };

  return {
    isOpen: modalStore.isOpen,
    type: modalStore.type,
    data: modalStore.data,
    onOpen,
    onClose,
  };
}

export { useModal };

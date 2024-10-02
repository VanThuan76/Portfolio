"use client";

import { useEffect, useState } from "react";
import { useModal } from "@shared/hooks/use-modal";

import { Modal, ModalBody } from "@ui/molecules/modals/animated-modal";

import Comment from "./comment";
import ListComment from "./list-comment";

const ModalComment = () => {
  const { isOpen, type, onClose, data } = useModal();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen && type === "article") {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [isOpen]);

  if (!data) return <></>;

  return (
    <Modal open={isModalOpen} setClose={onClose}>
      <ModalBody className="p-4 overflow-y-auto">
        <Comment user={null} blogId={data.blogId} />
        <ListComment type="modal" comments={data.comments} />
      </ModalBody>
    </Modal>
  );
};

export default ModalComment;

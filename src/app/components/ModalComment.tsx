import React from "react";
import Modal from "./Modal";
import { useAppContext } from "@/context";
import InfoUserPublication from "./ui/InfoUserPublication";

function ModalComment() {
  const { modalCommentState } = useAppContext();
  return (
    <>
      {modalCommentState && (
        <Modal>
          {/* <InfoUserPublication  /> */}
        </Modal>
      )}
    </>
  );
}

export default ModalComment;

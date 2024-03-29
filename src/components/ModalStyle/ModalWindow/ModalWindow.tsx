import React, { useEffect } from "react";
import { IModal } from "../../../types/modalwindow";
import { ModalContainer, ModalContent, ModalIcon } from "./WindowStyle";

export const ModalWindow = ({
  active,
  setActive,
  children,
  onClose,
}: IModal) => {
  const onKeydown = ({ key }: KeyboardEvent) => {
    if (key == "Escape") {
        onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  return (
    <ModalContainer
      className={active ? "active" : ""}
      onClick={() => setActive(false)}
    >
      <ModalContent
        className={active ? "active" : ""}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalIcon onClick={onClose}></ModalIcon>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

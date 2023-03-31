import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(35, 35, 35, 0.9);
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;

  &.active {
    opacity: 1;
    cursor: pointer;
    pointer-events: all;
  }
`;
export const ModalContent = styled.div`
  width: 732px;
  background: #232323;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.07),
    0px 10px 20px rgba(0, 0, 0, 0.05), 0px 10px 50px rgba(0, 0, 0, 0.05);
  transform: scale(0.5);
  transition: 0.4s all;
  &.active {
    transform: scale(1);
  }
`;

export const ModalIcon = styled.div({
  display: "flex",
  marginLeft: "auto",
  width: "21px",
  height: "22px",
  padding: "30px",

  "&::before": {
    content: "''",
    border: "2px solid #ffffff",
    transform: "rotate(45deg)",
    color: "white",
    height: "22.36px",
    background: "white",
  },

  "&::after": {
    content: "''",
    border: "2px solid #ffffff",
    transform: "rotate(-45deg)",
    color: "white",
    height: "22.36px",
    background: "white",
  },
});

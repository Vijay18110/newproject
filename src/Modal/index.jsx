import React from "react";
import styles from "./index.module.css";
import { IoCloseOutline } from "react-icons/io5";

const Modal = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.modal_content}>
        <div className={styles.modal_body}>
          <p>
            <IoCloseOutline />
          </p>
          <div className={styles.modal_Poster}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            <div className={styles.modal_top}></div>
            <div className={styles.modal_mid}></div>
            <div className={styles.top_bot}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

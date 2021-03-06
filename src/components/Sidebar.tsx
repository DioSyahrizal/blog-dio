import React, { FC, useEffect } from "react";
import styles from "./Sidebar.module.css";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<Props> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }

    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [isOpen]);

  return (
    <div className={`z-10 fixed ${isOpen ? "visible" : "invisible"}`}>
      <div
        className={`${styles.overlay} ` + `${isOpen && styles.overlayVisible}`}
        onClick={(e) => {
          if (e.target !== e.currentTarget) {
            return;
          }
          onClose();
        }}
      >
        <div
          className={
            `absolute h-screen z-20 w-[0px] dark:bg-slate-900 bg-white border-r border-gray-200 dark:border-gray-700 text-xl transition-all ` +
            `${isOpen && styles.sidebarVisible}`
          }
        >
          Sidebar
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import { useEffect } from "react";

export const useClickOutside = (modalRef, setModalOpen) => {
  useEffect(() => {
    const clickOutside = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };

    window.addEventListener("click", clickOutside);

    return () => window.removeEventListener("click", clickOutside);
  }, [modalRef, setModalOpen]);
};

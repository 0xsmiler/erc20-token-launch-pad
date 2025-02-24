/* eslint-disable react/prop-types */
import { useEffect } from "react";

const ValidationModal = ({ isOpen, message, onClose, onNext }) => {
  useEffect(() => {
    if (isOpen) {
      // Focus the close button for accessibility
      const closeButton = document.querySelector(".validation-modal-close");
      if (closeButton) closeButton.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-red-600 p-6 rounded-lg shadow-lg max-w-md w-full text-white relative">
        <button
          className="validation-modal-close absolute top-2 right-2 text-white text-xl font-bold hover:text-gray-200 focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <p className="text-lg font-bold mb-4">{message}</p>
        <button
          className="bg-cyan-500 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-cyan-600 focus:outline-none"
          onClick={onNext}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ValidationModal;
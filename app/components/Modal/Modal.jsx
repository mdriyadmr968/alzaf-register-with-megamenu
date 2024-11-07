"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Modal = ({ isOpen, onClose }) => {
  const router = useRouter();

 
  const handleOk = () => {
    router.push("/signup"); 
    onClose(); 
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white text-black rounded-lg p-6 w-96">
        <h2 className="text-xl mb-2">Please Log In or Sign Up</h2>
        <p className="mb-4">
          To continue, you need to log in or create an account.
        </p>
        <div className="flex justify-center gap-8">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleOk}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 px-5"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
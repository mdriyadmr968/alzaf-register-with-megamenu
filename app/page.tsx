"use client";;
import Megamenu from "./components/Home/Megamenu";
import Products from "./components/Home/Products";
import { useState, useEffect } from "react";
import Modal from "./components/Modal/Modal";

const images = ["/images/homebanner.png", "/images/homebanner.png"];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Effect to open modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      openModal();
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array to run only on mount
  return (
    <div className="relative w-full  mx-auto">
      <div className="">
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        <Megamenu />
        <Products />
      </div>
    </div>
  );
}

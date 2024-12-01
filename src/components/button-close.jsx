import React, { useState } from "react";
import Modal from "./modal"; // Ensure the path matches your project structure
import LoginModal from "./login-modal"; // Ensure the path matches your project structure

const ButtonClose = () => {
  // State to track the visibility of each modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Handlers to open/close modals
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <div>
      {/* Buttons to trigger the modals */}
      <button onClick={openModal} style={{ margin: "10px", padding: "10px 20px" }}>
        Open Modal
      </button>
      <button onClick={openLoginModal} style={{ margin: "10px", padding: "10px 20px" }}>
        Open Login Modal
      </button>

      {/* Modals */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Sign In Modal" />
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} id={1} />
    </div>
  );
};

export default ButtonClose;

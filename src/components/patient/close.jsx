import React, { useState } from 'react';
import Modal from './Modal'; // Import the modal

const Close = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            {/* Button to open the modal */}
            <button onClick={openModal}>Open Login Modal</button>

            {/* Pass down the state and close function as props */}
            <Modal isOpen={isModalOpen} onClose={closeModal} title="Sign In" />
        </div>
    );
};

export default Close;

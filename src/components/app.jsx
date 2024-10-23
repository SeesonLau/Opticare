import React, { useState } from 'react';
import Modal from './modal';
import Modal2 from './modal2'; // Import your second modal

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false); // State for second modal

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const openModal2 = () => setIsModal2Open(true); // Function to open second modal
    const closeModal2 = () => setIsModal2Open(false); // Function to close second modal

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title="Sign In"
                onClinicSelect={openModal2} // Pass function to open second modal
            />
            <Modal2 isOpen={isModal2Open} onClose={closeModal2} /> {/* Render second modal */}
        </div>
    );
};

export default App;

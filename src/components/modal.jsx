import '../styles/modal.css'; 

const Modal = ({ isOpen, onClose, title }) => {
    if (!isOpen) return null;
  
    return (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{title}</h2>
            <p>This is the {title} modal content.</p>
            {/* Additional content can go here */}
          </div>
        </div>
      );
    };
  
  export default Modal;
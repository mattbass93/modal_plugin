import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>×</button>
                {children}
            </div>
        </div>,
        document.body
    );
};


Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired, // Determines whether the modal is open or closed
    onClose: PropTypes.func.isRequired, // Function to call once the modal is closed
    children: PropTypes.node.isRequired, // React element which will be inserted into the modal
};


export default Modal;

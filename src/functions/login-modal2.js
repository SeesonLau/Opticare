import React from "react";

export default function LoginModal ({isOpen, onClose, id}){

    if (!isOpen || !id) return null;

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-black text-white rounded-lg p-8 max-w-lg w-full relative">
                {/* Close button */}
                <button
                    className="absolute top-2 right-2 text-white text-xl"
                    onClick={onClose}
                >
                    &times; {/* Close icon */}
                </button>
            </div>
        </div>
    )

}
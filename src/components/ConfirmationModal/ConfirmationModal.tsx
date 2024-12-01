import React, { useEffect, useState } from 'react';

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm }) => {
    const [isVisible, setIsVisible] = useState(isOpen);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setTimeout(() => setIsAnimating(true), 10);
        } else {
            setIsAnimating(false);
            const timer = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const animationClass = isAnimating ? 'scale-100 opacity-100' : 'scale-90 opacity-0';

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300"
            onClick={onClose}
        >
            <div
                className={`bg-white rounded-lg shadow-lg p-6 w-96 transform transition-all duration-300 ease-in-out ${animationClass}`}
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl font-semibold text-gray-800">Apakah kamu yakin ingin keluar?</h2>
                <p className="mt-2 text-gray-600">Progress kamu akan hilang.</p>
                <div className="mt-4 flex justify-end gap-x-2">
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300 flex items-center gap-x-2"
                        onClick={onClose}
                    >
                        Batal
                    </button>
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 flex items-center gap-x-2"
                        onClick={onConfirm}
                    >
                        Keluar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;

import React, { useEffect, useState } from 'react';
import { CheckCircleOutlined, CloseCircleOutlined, SmileOutlined } from '@ant-design/icons';

interface ResultModalProps {
    isOpen: boolean;
    onClose: () => void;
    score: number;
    totalQuestions: number;
}

const ResultModal: React.FC<ResultModalProps> = ({ isOpen, onClose, score, totalQuestions }) => {
    const [isVisible, setIsVisible] = useState(isOpen);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setTimeout(() => setIsAnimating(true), 10); // Delay to allow animation class to apply
        } else {
            setIsAnimating(false);
            const timer = setTimeout(() => setIsVisible(false), 300); // Match the animation duration
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
                {/* Add a smiley or check icon depending on the score */}
                <div className="flex justify-center mb-4">
                    {score === totalQuestions ? (
                        <SmileOutlined className="text-green-500 text-6xl" />
                    ) : score >= totalQuestions / 2 ? (
                        <CheckCircleOutlined className="text-yellow-500 text-6xl" />
                    ) : (
                        <CloseCircleOutlined className="text-red-500 text-6xl" />
                    )}
                </div>
                
                <h2 className="text-xl font-semibold text-gray-800 text-center">Quiz Selesai!</h2>
                <p className="mt-2 text-gray-600 text-center">Poin kamu: {score} / {totalQuestions}</p>
                
                {/* Add some icons next to text */}
                <div className="mt-4 flex justify-center gap-x-4">
                    <div className="flex items-center gap-x-1 text-gray-600">
                        <CheckCircleOutlined />
                        <span>Benar</span>
                    </div>
                    <div className="flex items-center gap-x-1 text-gray-600">
                        <CloseCircleOutlined />
                        <span>Salah</span>
                    </div>
                </div>

                <div className="mt-4 flex justify-end gap-x-2">
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                        onClick={onClose}
                    >
                        Tutup
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultModal;

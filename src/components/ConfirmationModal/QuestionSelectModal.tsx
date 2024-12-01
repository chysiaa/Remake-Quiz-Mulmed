import React, { useState, useEffect } from 'react';

interface QuestionSelectModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (numQuestions: number) => void;
}

const QuestionSelectModal: React.FC<QuestionSelectModalProps> = ({ isOpen, onClose, onConfirm }) => {
    const [numQuestions, setNumQuestions] = useState(5);
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300">
            <div
                className={`bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md transform transition-all duration-300 ease-in-out ${animationClass}`}
            >
                <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">Pilih Jumlah Soal</h2>
                <div className="flex flex-col items-center">
                    <input
                        type="range"
                        min="5"
                        max="25"
                        value={numQuestions}
                        onChange={(e) => setNumQuestions(Number(e.target.value))}
                        className="w-full slider-thumb rounded-lg accent-blue-500"
                    />
                    <span className="text-xl font-semibold mt-2 text-blue-800">{numQuestions}</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                    <button
                        onClick={onClose}
                        className="w-32 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                        Batal
                    </button>
                    <button
                        onClick={() => {
                            onConfirm(numQuestions);
                            onClose();
                        }}
                        className="w-32 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
                    >
                        Mulai Quiz
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuestionSelectModal;
